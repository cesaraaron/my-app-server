import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context, getClientId } from '../utils'

const login = async (_, { phoneNumber, password }, ctx: Context, _1) => {
  const client = await ctx.db.query.client({ where: { phoneNumber } })

  if (!client) {
    throw new Error(
      `Ningun usuario fue encontrado con el numero: ${phoneNumber}`
    )
  }

  const valid = await bcrypt.compare(password, client.password)
  if (!valid) {
    throw new Error('Contraseña invalida')
  }

  return {
    token: jwt.sign({ clientId: client.id }, process.env.APP_SECRET),
  }
}

const createUser = async (_, { name }, ctx: Context, info) => {
  const clientId = getClientId(ctx)

  return ctx.db.mutation.createUser(
    {
      data: {
        name,
        client: { connect: { id: clientId } },
      },
    },
    info
  )
}

const createProduct = (_, args, ctx: Context, info) => {
  const { name, price, quantity } = args
  const clientId = getClientId(ctx)

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
  const clientId = getClientId(ctx)

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
