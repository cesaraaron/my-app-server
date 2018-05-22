import { getClientId, Context } from '../utils'

export const Query = {
  users: (root, args, ctx: Context, info) => {
    const clientId = getClientId(ctx)
    return ctx.db.query.users({ where: { client: { id: clientId } } }, info)
  },

  products: (root, args, ctx: Context, info) => {
    const clientId = getClientId(ctx)
    return ctx.db.query.products({ where: { client: { id: clientId } } }, info)
  },

  sales: (root, args, ctx: Context, info) => {
    const clientId = getClientId(ctx)
    return ctx.db.query.sales({ where: { client: { id: clientId } } }, info)
  },
}
