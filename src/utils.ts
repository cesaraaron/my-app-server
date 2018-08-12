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

type ExpoNotification = {
  to: string
  sound: string
  body: string
}

type ProductQuantityWithMessage = {
  message: string
  quantity: number
}

// If there are more than 10 notifications show a single notification
// with data to show in the app with the products low in inventory
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

  const notificationMessagesWithProductQuantity: ProductQuantityWithMessage[] = updatedProducts.map(
    ({ name, quantity }) => {
      const message =
        quantity === 0
          ? `El producto "${name}" tiene 0 unidades disponibles`
          : `El producto "${name}" se esta agotando. Solo le quedan ${quantity} ${
              quantity === 1 ? 'unidad disponible' : 'unidades disponibles.'
            }`
      return {
        message,
        quantity,
      }
    }
  )

  const notifications: ExpoNotification[] = []

  users.forEach(({ name, notifications: { devices, fireWhen } }) => {
    if (fireWhen === 0 || !devices.length) {
      return
    }

    notificationMessagesWithProductQuantity.forEach(({ quantity, message }) => {
      if (quantity > fireWhen) {
        return
      }

      devices.forEach(token => {
        // Check that all your push tokens appear to be valid Expo push tokens
        if (!Expo.isExpoPushToken(token)) {
          console.error(
            `Push token ${token} for user "${name}" is not a valid Expo push token.`
          )
          return
        }
        notifications.push({
          to: token,
          body: message,
          sound: 'default',
        })
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
