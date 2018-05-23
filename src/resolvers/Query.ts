import { getClientId, Context } from '../utils'

export const Query = {
  users: (_, _1, ctx: Context, info) => {
    const clientId = getClientId(ctx)
    return ctx.db.query.users({ where: { client: { id: clientId } } }, info)
  },

  products: (_, _1, ctx: Context, info) => {
    const clientId = getClientId(ctx)
    return ctx.db.query.products({ where: { client: { id: clientId } } }, info)
  },

  sales: (_, _1, ctx: Context, info) => {
    const clientId = getClientId(ctx)
    return ctx.db.query.sales({ where: { client: { id: clientId } } }, info)
  },
}
