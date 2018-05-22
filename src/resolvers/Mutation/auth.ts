import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context } from '../../utils'

export const auth = {
  async login(parent, { phoneNumber, password }, ctx: Context, info) {
    const client = await ctx.db.query.client({ where: { phoneNumber } })

    if (!client) {
      throw new Error(`Ningun usuario fue encontrado con el numero: ${phoneNumber}`)
    }

    const valid = await bcrypt.compare(password, client.password)
    if (!valid) {
      throw new Error('Contraseña invalida')
    }

    return {
      token: jwt.sign({ userId: client.id }, process.env.APP_SECRET),
    }
  },
}
