import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import resolvers from './resolvers'

require('dotenv').config()

const { PRISMA_ENDPOINT, PRISMA_SECRET, APP_SECRET } = process.env

if (!PRISMA_ENDPOINT || !PRISMA_SECRET || !APP_SECRET) {
  throw new Error('One or more of the three required env variables is missing')
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
    }),
  }),
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
