import { getUserId, Context, getUserWithId } from '../utils'

export const Query = {
  async me(_, _1, ctx: Context, info) {
    const userId = await getUserId(ctx)

    return ctx.db.query.user({where: {id: userId}}, info)
  },
  users: async (_, _1, ctx: Context, info) => {
    const userId = await getUserId(ctx)
    const {
      client: { id },
    } = await getUserWithId(userId, ctx, '{ client {id} }')

    return ctx.db.query.users({ where: { client: { id } } }, info)
  },

  products: async (_, _1, ctx: Context, info) => {
    const userId = await getUserId(ctx)
    const {
      client: { id },
    } = await getUserWithId(userId, ctx, '{ client {id} }')

    return ctx.db.query.products({ where: { client: { id } } }, info)
  },

  sales: async (_, _1, ctx: Context, info) => {
    const userId = await getUserId(ctx)
    const {
      client: { id },
    } = await getUserWithId(userId, ctx, '{ client {id} }')

    return ctx.db.query.sales({ where: { client: { id } } }, info)
  },
}
