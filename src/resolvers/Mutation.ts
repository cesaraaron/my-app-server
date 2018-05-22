import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context, getClientId } from '../utils'

const login = async (parent, { phoneNumber, password }, ctx: Context, info) => {
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

const createUser = async (parent, { name }, ctx: Context, info) => {
  const clientId = getClientId(ctx)

  const newUser = await ctx.db.mutation.createUser({
    data: {
      name,
      client: { connect: { id: clientId } } },
  }, info)

  return newUser
}

export const Mutation = {
  login,
  createUser,
}
