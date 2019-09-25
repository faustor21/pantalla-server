import { GraphQLServer } from 'graphql-yoga'

import prisma from './prisma'
import { resolvers } from './resolvers'
import authenticate from './middleware/authenticate'
import applyMiddlewareTo from './utils/applyMiddlewareTo'

const authMiddleware = applyMiddlewareTo(resolvers, authenticate, [
  'createUser',
  'login'
])

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  middlewares: [authMiddleware],
  context(request) {
    return {
      prisma,
      request
    }
  }
})

server.start(options => console.log(`Server running on port ${options.port}`))
