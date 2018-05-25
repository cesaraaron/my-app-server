import { getUserFromHeader, Context } from '../utils'

export const Query = {
  users: async (_, _1, ctx: Context, info) => {
    const user = await getUserFromHeader(ctx)
    const { id: clientId } = user.client
    return ctx.db.query.users({ where: { client: { id: clientId } } }, info)
  },

  products: async (_, _1, ctx: Context, info) => {
    const user = await getUserFromHeader(ctx)
    const { id: clientId } = user.client
    return ctx.db.query.products({ where: { client: { id: clientId } } }, info)
  },

  sales: async (_, _1, ctx: Context, info) => {
    const user = await getUserFromHeader(ctx)
    const { id: clientId } = user.client
    return ctx.db.query.sales({ where: { client: { id: clientId } } }, info)
  },
}
