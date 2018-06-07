import { Context } from '../utils'

const newSale = {
  subscribe: (_, _1, ctx: Context, info) => {
    return ctx.db.subscription.sale({
      where: { mutation_in: ['CREATED'] },
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

export const Subscription = {
  newSale,
  product
}
