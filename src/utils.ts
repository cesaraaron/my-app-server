import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma'

export interface Context {
  db: Prisma
  request: any
}

export function getUserFromHeader(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')

  if (!Authorization) {
    throw new AuthError()
  }

  const token = Authorization.replace('Bearer ', '')
  const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
    userId: string
  }


  if (!userId) {
    throw new AuthError()
  }

  return ctx.db.query.user(
    { where: { id: userId } },
    `{id name isAdmin client {id}}`
  )
}

export class AuthError extends Error {
  constructor() {
    super('Acceso denegado')
  }
}
