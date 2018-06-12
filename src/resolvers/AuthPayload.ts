import { Context } from '../utils'

export const AuthPayload = {
  user: ({ user: { id } }, _, ctx: Context, info) =>
    ctx.db.query.user({ where: { id } }, info),
}
