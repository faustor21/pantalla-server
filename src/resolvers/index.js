import Query from './Query'
import Mutation from './Mutation'
import typeResolvers from './types'

const resolvers = {
  Query,
  Mutation,
  ...typeResolvers // Our Custom Types
}

export { resolvers }
