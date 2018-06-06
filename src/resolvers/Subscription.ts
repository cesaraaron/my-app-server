import { Context } from '../utils'

const newSale = {
  subscribe: (_, _1, ctx: Context, info) => {
    return ctx.db.subscription.sale({
      where: { mutation_in: ['CREATED'] },
    }, info)
  },
}

export const Subscription = {
  newSale,
}
