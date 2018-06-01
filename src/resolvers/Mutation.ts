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
        permissions,
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

const updateProduct = async (_, args, ctx: Context, info) => {
  const { name, price, quantity, productId } = args
  const user = await getUserFromHeader(ctx)

  if (!user.isAdmin && !user.permissions.includes('EDIT_PRODUCTS')) {
    throw new Error('Este usuario no tiene permisos para editar productos.')
  }

  return ctx.db.mutation.updateProduct({
    where: { id: productId },
    data: {
      name,
      price,
      quantity,
    },
  }, info)
}

const deleteProduct = async (_, {productId}, ctx: Context, info) => {
  const user = await getUserFromHeader(ctx)

  if (!user.isAdmin && !user.permissions.includes('DELETE_PRODUCTS')) {
    throw new Error('Este usuario no tiene permisos para eliminar productos')
  }

  return ctx.db.mutation.deleteProduct({
    where: { id: productId }
  }, info)
}

const createSale = async (_, { products, userId }, ctx: Context, info) => {
  const user = await getUserFromHeader(ctx)
  const { id: clientId } = user.client

  const newSale = await ctx.db.mutation.createSale(
    {
      data: {
        products: { create: products },
        client: { connect: { id: clientId } },
        soldBy: { connect: { id: userId } },
      },
    },
    info
  )

  return newSale
}

export const Mutation = {
  login,
  createProduct,
  updateProduct,
  deleteProduct,
  createSale,
  createUser,
  updateUser,
  deleteUser,
}
