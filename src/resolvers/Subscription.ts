import { Context } from '../utils'

const sale = {
  subscribe: (_, _1, ctx: Context, info) => {
    return ctx.db.subscription.sale({
      where: { mutation_in: ['CREATED', 'DELETED'] },
    }, info)
  },
}

const product = {
  subscribe: (_, _1, ctx: Context, info) => {
    return ctx.db.subscription.product({
      where: { mutation_in: ['CREATED', 'DELETED', 'UPDATED'] },
    }, info)
  },
}

const user = {
  subscribe: (_, _1, ctx: Context, info) => {
    return ctx.db.subscription.user({
      where: { mutation_in: ['CREATED', 'DELETED', 'UPDATED'] },
    }, info)
  },
}

export const Subscription = {
  sale,
  user,
  product
}
