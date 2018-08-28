import * as jwt from 'jsonwebtoken'
import { Prisma, User, Product, CartProduct } from './generated/prisma'
import * as Expo from 'expo-server-sdk'

let expo = new Expo()

export interface Context {
  db: Prisma
  request: any
}

export function getUserId(ctx: Context): string {
  const Authorization = ctx.request.get('Authorization')

  if (!Authorization) {
    throw new AuthError()
  }

  const token = Authorization.replace('Bearer ', '')

  if (!token) {
    throw new AuthError()
  }

  const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
    userId: string
  }

  if (!userId) {
    throw new AuthError()
  }

  return userId
}

export const updateProductsQuantity = async (
  cartProducts: CartProduct[],
  ctx: Context
): Promise<Product[]> => {
  const cartProductIds = cartProducts.map(p => p.productId)

  const products = await ctx.db.query.products({
    where: { id_in: cartProductIds },
  })

  const newProducts: Product[] = []

  products.forEach(({ id, quantity, ...rest }) => {
    const cartProduct = cartProducts.find(p => p.productId === id)
    const newQuantity = quantity - cartProduct.quantitySold

    if (newQuantity >= 0) {
      newProducts.push({ ...rest, id, quantity: newQuantity })
      return
    }

    throw new Error(
      `El producto: ${
        cartProduct.name
      } solo tiene ${quantity} disponible. Usted esta intentado agregar ${
        cartProduct.quantitySold
      }`
    )
  })
  return newProducts
}

export type PartialProduct = {
  id: string
  name: string
  quantity: number
}

export type NotificationData = {
  fireWhenProductIds?: string[]
}

type ExpoNotification = {
  to: string
  sound: string
  data: NotificationData
  body: string
}

export const sendNotifications = async (
  updatedProducts: Product[],
  ctx: Context
) => {
  const userId = await getUserId(ctx)
  const user = await getUserWithId(userId, ctx, '{ client {id}}')

  const users = await ctx.db.query.users(
    {
      where: { client: { id: user.client.id } },
    },
    '{ notifications { devices fireWhen } }'
  )

  const notifications: ExpoNotification[] = []

  users.forEach(({ name: userName, notifications: { devices, fireWhen } }) => {
    if (fireWhen === 0 || !devices.length) {
      return
    }

    const productsRunningOut: PartialProduct[] = []

    updatedProducts.forEach(
      ({ name: productName, id: productId, quantity }) => {
        if (quantity > fireWhen) {
          return
        }

        productsRunningOut.push({ name: productName, id: productId, quantity })
      }
    )

    let bodyMessage: string

    if (productsRunningOut.length === 0) {
      return
    }

    if (productsRunningOut.length === 1) {
      bodyMessage = `El producto '${productsRunningOut[0].name}' se esta acabando`
    } else {
      // Only send the name of the first 4 items
      const firstFourProducts = productsRunningOut.slice(0, 4)
      let remainingProductCount = productsRunningOut.length - firstFourProducts.length

      bodyMessage =
        `Los productos '${firstFourProducts.reduce(
          (p, c, idx) => p + c.name + (idx === firstFourProducts.length - 1 ? '' : ', '),
          ''
        )}'` +
        `${
          remainingProductCount > 0
            ? ` y ${remainingProductCount} productos más`
            : ''
        }` +
        ' se estan acabando.'
    }

    devices.forEach(token => {
      // Check that all your push tokens appear to be valid Expo push tokens
      if (!Expo.isExpoPushToken(token)) {
        console.error(
          `Push token ${token} for user "${userName}" is not a valid Expo push token.`
        )
        return
      }
      notifications.push({
        to: token,
        body: bodyMessage,
        data: { fireWhenProductIds: productsRunningOut.map(p => p.id)},
        sound: 'default',
      })
    })
  })

  if (notifications.length === 0) {
    return
  }

  let chunks = expo.chunkPushNotifications(notifications)
  ;(async () => {
    // Send the chunks to the Expo push notification service. There are
    // different strategies you could use. A simple one is to send one chunk at a
    // time, which nicely spreads the load out over time:
    for (let chunk of chunks) {
      try {
        let receipts = await expo.sendPushNotificationsAsync(chunk)
        console.log(receipts)
      } catch (error) {
        console.error(error)
      }
    }
  })()

  console.log('notifications sent!')
}

export function getUserWithId(
  id: string,
  ctx: Context,
  info = `{id createdAt updatedAt name lastName phoneNumber permissions isAdmin client {id}}`
): Promise<User> {
  return ctx.db.query.user({ where: { id } }, info)
}

export class AuthError extends Error {
  constructor() {
    super('Acceso denegado')
  }
}

export class UserPermission extends Error {
  constructor() {
    super('Este usuario no tiene permisos para realizar esta operacion')
  }
}
