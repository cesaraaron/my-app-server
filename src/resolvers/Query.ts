import { getUserId, Context, getUserWithId } from '../utils'

export const Query = {
  async me(_, _1, ctx: Context, info) {
    const id = await getUserId(ctx)

    return ctx.db.query.user({ where: { id } }, info)
  },
  users: async (_, _1, ctx: Context, info) => {
    const userId = await getUserId(ctx)
    const {
      client: { id: clientId },
    } = await getUserWithId(userId, ctx, '{ client { id } }')

    return ctx.db.query.users({ where: { client: { id: clientId } } }, info)
  },

  products: async (_, _1, ctx: Context, info) => {
    const userId = await getUserId(ctx)
    const {
      client: { id: clientId },
    } = await getUserWithId(userId, ctx, '{ client { id } }')

    return ctx.db.query.products({ where: { client: { id: clientId } } }, info)
  },

  productsWithIds: async (_, {ids}, ctx: Context, info) => {
    const userId = await getUserId(ctx)
    const {
      client: { id: clientId },
    } = await getUserWithId(userId, ctx, '{ client { id } }')

    return ctx.db.query.products({where: {client: {id: clientId}, id_in: ids}}, info)
  },

  sales: async (_, _1, ctx: Context, info) => {
    const userId = await getUserId(ctx)
    const {
      client: { id: clientId },
    } = await getUserWithId(userId, ctx, '{ client { id } }')

    return ctx.db.query.sales({ where: { client: { id: clientId } } }, info)
  },
}
