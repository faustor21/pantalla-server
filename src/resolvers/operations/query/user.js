import { ValidationError } from 'apollo-server-core'

import errors from '../../../errors'

const user = async (parent, { userId }, { prisma }, info) => {
  const userExists = await prisma.$exists.user({ id: userId })
  if (!userExists) {
    const {
      userNotFound: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    throw error
  }
  const user = await prisma.user({ id: userId })

  return user
}

const users = async (parent, args, { prisma }, info) => {
  const users = await prisma.users()
  return users
}

export { user, users }
