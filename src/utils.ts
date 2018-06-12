import * as jwt from 'jsonwebtoken'
import { Prisma, User } from './generated/prisma'

export interface Context {
  db: Prisma
  request: any
}

// TODO: Just return the userId from here
export function getUserId(ctx: Context): string {
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

  return userId
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
