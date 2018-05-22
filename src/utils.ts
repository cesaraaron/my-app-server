import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma'

export interface Context {
  db: Prisma
  request: any
}

export function getClientId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { clientId } = jwt.verify(token, process.env.APP_SECRET) as { clientId: string }
    return clientId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Acceso denegado')
  }
}
