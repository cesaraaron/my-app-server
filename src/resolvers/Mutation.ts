import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context, getUserFromHeader, UserPermission } from '../utils'

const login = async (_, { phoneNumber, password }, ctx: Context, _1) => {
  const user = await ctx.db.query.user({ where: { phoneNumber } })

  if (!user) {
    throw new Error(
      `La cuenta con el numero: ${phoneNumber} no existe. Por favor verifica el numero y vuelve a intentarlo`
    )
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('La contraseña que ingresaste es incorrecta')
  }

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  }
}

const createUser = async (_, args, ctx: Context, info) => {
  const { name, phoneNumber, password, permissions } = args
  const user = await getUserFromHeader(ctx)
  const { id: clientId } = user.client

  if (!user.isAdmin) {
    throw new UserPermission()
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  return ctx.db.mutation.createUser(
    {
      data: {
        phoneNumber,
        name,
        permissions: {
          set: permissions
        },
        password: hashedPassword,
        client: { connect: { id: clientId } },
      },
    },
    info
  )
}

const updateUser = async (_, args, ctx: Context, info) => {
  const { userId, name, phoneNumber, password, permissions } = args
  const user = await getUserFromHeader(ctx)

  if (!user.isAdmin) {
    throw new UserPermission()
  }

  if (password && password.length < 6) {
    throw new Error('La contraseña debe tener 6 o mas caracteres.')
  }

  const userToUpdate = await ctx.db.query.user({ where: { id: userId } })

  const newName = name || userToUpdate.name
  const newPhone = phoneNumber || userToUpdate.phoneNumber
  const newPassword = password
    ? await bcrypt.hash(password, 10)
    : userToUpdate.password

  return ctx.db.mutation.updateUser(
    {
      where: { id: userId },
      data: {
        permissions: { set: permissions },
        phoneNumber: newPhone,
        name: newName,
        password: newPassword,
      },
    },
    info
  )
}

const deleteUser = async (_, { userId }, ctx: Context, info) => {
  const user = await getUserFromHeader(ctx)

  if (!user.isAdmin) {
    throw new UserPermission()
  }

  return ctx.db.mutation.deleteUser({ where: { id: userId } }, info)
}

const createProduct = async (_, args, ctx: Context, info) => {
  const { name, price, quantity } = args
  const user = await getUserFromHeader(ctx)
  const { id: clientId } = user.client

  return ctx.db.mutation.createProduct(
    {
      data: {
        name,
        price,
        quantity,
        client: { connect: { id: clientId } },
      },
    },
    info
  )
}

// TODO: validate the fields of the product before trying to update it
const updateProduct = async (_, args, ctx: Context, info) => {
  const { name, price, quantity, productId } = args
  const user = await getUserFromHeader(ctx)

  if (!user.isAdmin && !user.permissions.includes('EDIT_PRODUCTS')) {
    throw new Error('Este usuario no tiene permisos para editar productos.')
  }

  return ctx.db.mutation.updateProduct(
    {
      where: { id: productId },
      data: {
        name,
        price,
        quantity,
      },
    },
    info
  )
}

const deleteProduct = async (_, { productId }, ctx: Context, info) => {
  const user = await getUserFromHeader(ctx)

  if (!user.isAdmin && !user.permissions.includes('DELETE_PRODUCTS')) {
    throw new Error('Este usuario no tiene permisos para eliminar productos')
  }

  return ctx.db.mutation.deleteProduct(
    {
      where: { id: productId },
    },
    info
  )
}

type CartProduct = {
  productId: string
  name: string
  price: number
  quantitySold: number
}

const createSale = async (_, args, ctx: Context, info) => {
  const { cartProducts } = args as {
    cartProducts: CartProduct[]
  }
  const user = await getUserFromHeader(ctx)
  const { id: clientId } = user.client

  if (!user.isAdmin && !user.permissions.includes('ADD_SALES')) {
    throw new Error('Este usuario no tiene permisos para añadir ventas')
  }

  const cartProductIds = cartProducts.map(p => p.productId)

  const products = await ctx.db.query.products({
    where: { id_in: cartProductIds },
  })

  let updateManyProductPromises = []

  products.forEach(({ id, quantity }) => {
    const cartProduct = cartProducts.find(p => p.productId === id)

    const newQuantity = quantity - cartProduct.quantitySold
    if (newQuantity < 0) {
      throw new Error(
        `El producto: ${
          cartProduct.name
        } solo tiene ${quantity} disponible. Usted esta intentado agregar ${
          cartProduct.quantitySold
        }`
      )
    }

    updateManyProductPromises.push(
      ctx.db.mutation.updateProduct({
        where: { id },
        data: {
          quantity: newQuantity,
        },
      })
    )
  })

  return Promise.all(updateManyProductPromises).then(() =>
    ctx.db.mutation.createSale(
      {
        data: {
          products: { create: cartProducts },
          client: { connect: { id: clientId } },
          soldBy: { connect: { id: user.id } },
        },
      },
      info
    )
  )
}

const deleteSale = async (_, { saleId }, ctx: Context, info) => {
  const user = await getUserFromHeader(ctx)

  if (!user.isAdmin && !user.permissions.includes('DELETE_SALES')) {
    throw new Error('Este usuario no tiene permisos para eliminar ventas')
  }

  const sale = await ctx.db.mutation.deleteSale(
    {
      where: { id: saleId },
    },
    `{ id }`
  )

  return ctx.db.query.sale({ where: { id: sale.id } }, info)
}

const createLog = async (_, args, ctx: Context, info) => {
  const user = await getUserFromHeader(ctx)

  return ctx.db.mutation.createLog(
    {
      data: {
        message: args.message,
        type: args.type,
        client: { connect: { id: user.client.id } },
      },
    },
    info
  )
}

export const Mutation = {
  login,
  createProduct,
  updateProduct,
  deleteProduct,
  createSale,
  deleteSale,
  createUser,
  updateUser,
  deleteUser,
  createLog,
}
