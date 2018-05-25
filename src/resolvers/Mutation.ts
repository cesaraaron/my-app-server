import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context, getUserFromHeader } from '../utils'

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
    user
  }
}

const createUser = async (_, { name, phoneNumber, password }, ctx: Context, info) => {
  const user = await getUserFromHeader(ctx)
  const {id: clientId} = user.client

  if (!user.isAdmin) {
    throw new Error('Acceso denegado')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  return ctx.db.mutation.createUser(
    {
      data: {
        phoneNumber,
        name,
        password: hashedPassword,
        client: { connect: { id: clientId } },
      },
    },
    info
  )
}

const createProduct = async (_, args, ctx: Context, info) => {
  const { name, price, quantity } = args
  const user = await getUserFromHeader(ctx)
  const {id: clientId} = user.client

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

const createSale = async (_, { products, userId }, ctx: Context, info) => {
  const user = await getUserFromHeader(ctx)
  const {id: clientId} = user.client

  const newSale = await ctx.db.mutation.createSale({
    data: {
      products: { create: products },
      client: { connect: { id: clientId } },
      soldBy: { connect: { id: userId } },
    },
  }, info)

  return newSale
}

export const Mutation = {
  login,
  createUser,
  createProduct,
  createSale,
}
