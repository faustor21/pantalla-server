import { prisma } from '../prisma/generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'

const resolvers = {
  Query: {
    users (root, args, context, info) {
      return context.prisma.users()
    },
    user (root, args, context, info) {
      return context.prisma.user({ where: { id: args.id } })
    }
  },
  Mutation: {
    createUser (root, args, context, info) {
      return context.prisma.createUser({ ...args.data })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: {
    prisma
  }
})

server.start(options => console.log(`Server running on port ${options.port}`))
