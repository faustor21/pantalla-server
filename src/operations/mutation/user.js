import bcrypt from 'bcryptjs'

import hashPassword from '../../utils/security/hashPassword'
import generateToken from '../../utils/security/generateToken'

const createUser = async (parent, args, { prisma }, info) => {
  const { password: passwordRaw } = args.data
  const password = await hashPassword(passwordRaw)
  const isEmailTaken = await prisma.user({
    email: args.data.email
  })
  if (isEmailTaken) throw new Error('E-mail is already taken')

  const user = await prisma.createUser({
    ...args.data,
    password
  })
  return {
    user,
    token: generateToken(user.id)
  }
}

const login = async (parent, args, { prisma }) => {
  const { email, password } = args.data
  const errorMsg = 'E-mail or password incorrect'
  const user = await prisma.user({ email })
  if (!user) throw new Error(errorMsg)
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error(errorMsg)
  return {
    user,
    token: generateToken(user.id)
  }
}

const updateUser = async (parent, args, { prisma }, info) => {
  const { data, userId } = args
  const user = await prisma.updateUser({
    data,
    where: {
      id: userId
    }
  })
  return user
}

const deleteUser = async (parent, args, { prisma }, info) => {
  let user
  try {
    user = await prisma.deleteUser({ id: args.userId })
  } catch (e) {
    throw new Error('User not found')
  }
  return user
}

export { createUser, login, updateUser, deleteUser }
