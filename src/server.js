import { GraphQLServer } from 'graphql-yoga'

import prisma from './prisma'
import { resolvers } from './resolvers'

import authenticate from './middleware/authenticate'
import permissions from './middleware/permissions'
import inputValidation from './middleware/validations/input'
import applyMiddlewareTo from './utils/applyMiddlewareTo'

const authMiddleware = applyMiddlewareTo(resolvers, authenticate, [
  'createUser',
  'login',
  'renewUserAccessToken'
])

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  middlewares: [authMiddleware, permissions, inputValidation],
  context(request) {
    return {
      prisma,
      request
    }
  }
})

server.start(options => console.log(`Server running on port ${options.port}`))
