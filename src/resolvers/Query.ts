import { getUserId, Context } from '../utils'

export const Query = {
  async me(_, _1, ctx: Context, info) {
    const id = await getUserId(ctx)

    return ctx.db.query.user({where: {id}}, info)
  },
  users: async (_, _1, ctx: Context, info) => {
    const id = await getUserId(ctx)

    return ctx.db.query.users({ where: { id } }, info)
  },

  products: async (_, _1, ctx: Context, info) => {
    const id = await getUserId(ctx)

    return ctx.db.query.products({ where: { user: {id} } }, info)
  },

  sales: async (_, _1, ctx: Context, info) => {
    const id = await getUserId(ctx)

    return ctx.db.query.sales({ where: { id } }, info)
  },
}
