import bcrypt from 'bcryptjs'
import { ValidationError } from 'apollo-server-core'

import hashPassword from '../../utils/security/hashPassword'
import { generateToken, renewAccessToken } from '../../utils/security/token'
import errors from '../../errors'

const createUser = async (parent, args, { prisma }, info) => {
  const { password: passwordRaw } = args.data
  const password = await hashPassword(passwordRaw)
  const isEmailTaken = await prisma.$exists.user({
    email: args.data.email
  })
  if (isEmailTaken) {
    const {
      userEmailExists: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    throw error
  }

  const user = await prisma.createUser({
    ...args.data,
    password
  })

  return generateToken(prisma, user.id)
}

const login = async (parent, args, { prisma }) => {
  const { email, password } = args.data
  const user = await prisma.user({ email })

  const {
    emailPasswordIncorrect: { message, code }
  } = errors.validation
  const error = new ValidationError(message)
  error.extensions.code = code

  if (!user) throw error
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw error

  return generateToken(prisma, user.id)
}

const renewUserAccessToken = async (parent, { refreshToken }, { prisma }) => {
  return renewAccessToken(prisma, refreshToken)
}

const updateUser = async (parent, { data, userId }, { prisma }, info) => {
  const userExists = await prisma.$exists.user({ id: userId })
  if (!userExists) {
    const {
      userNotFound: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    throw error
  }
  const user = await prisma.updateUser({
    data,
    where: {
      id: userId
    }
  })
  return user
}

const deleteUser = async (parent, { userId }, { prisma }, info) => {
  const userExists = await prisma.$exists.user({ id: userId })
  if (!userExists) {
    const {
      userNotFound: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    throw error
  }
  const user = await prisma.deleteUser({ id: userId })

  return user
}

export { createUser, login, renewUserAccessToken, updateUser, deleteUser }
