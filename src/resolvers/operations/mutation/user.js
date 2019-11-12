import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { ValidationError, ForbiddenError } from 'apollo-server-core'
import moment from 'moment'

import hashPassword from '../../../utils/security/hashPassword'
import { generateToken, renewAccessToken } from '../../../utils/security/token'
import mail from '../../../mail'
import errors, { getException } from '../../../errors'

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

  delete args.data.repeatPassword
  const user = await prisma.createUser({
    ...args.data,
    password
  })

  const welcomeEmailResult = await mail.welcome(user.name, user.email)
  if (welcomeEmailResult instanceof Error) {
    console.error(
      `There was an error trying to send the welcome email to ${user.email}`,
      welcomeEmailResult
    )
    return welcomeEmailResult // This being an instance of Error
  } else {
    console.info(
      `Welcome email successfully sent to ${user.email}`,
      welcomeEmailResult
    )
    const verifyEmailResult = await mail.verifyAccount(user.name, user.email)
    if (verifyEmailResult instanceof Error)
      console.error(
        `There was an error trying to send the verification email to ${user.email}`,
        verifyEmailResult
      )
    else
      console.info(
        `Verification email successfully sent to ${user.email}`,
        verifyEmailResult
      )
  }

  return generateToken(prisma, user.id)
}

const login = async (parent, args, { prisma }) => {
  const { email, password } = args.data

  const userExists = await prisma.$exists.user({ email })
  console.log('userExists', userExists)
  if (!userExists)
    throw getException(
      errors.validation,
      errors.validation.userNotFound,
      ValidationError
    )

  const user = await prisma.user({ email })
  const valid = await bcrypt.compare(password, user.password)
  console.log('The user', user)
  console.log('Is valid', valid)
  if (!user || !valid) {
    const {
      emailPasswordIncorrect: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    console.log('The freaking error', error)
    throw error
  }

  const isEmailVerified = await prisma.$exists.user({ email, verified: true })
  if (!isEmailVerified) {
    const {
      userEmailNotValidated: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    throw error
  }

  return generateToken(prisma, user.id)
}

const renewUserAccessToken = async (parent, { refreshToken }, { prisma }) => {
  return renewAccessToken(prisma, refreshToken)
}

const requestResetPassword = async (parent, { email }, { prisma }, info) => {
  const userExists = await prisma.$exists.user({ email, verified: true })
  if (!userExists) {
    const {
      userNotFound: { message, code }
    } = errors.validation
    const error = new ValidationError(`${message} or not validated`)
    error.extensions.code = code
    throw error
  }
  const user = await prisma.user({ email })
  // mail.resetPassword() sends the email to the user
  // so he/she can verify it was him/her self whom
  // requested the password reset.
  const { result, token, expires } = await mail.requestResetPassword(
    user.name,
    user.email
  )
  if (result instanceof Error) {
    console.error(
      `There was an error trying to send the reset password email to ${user.email}`,
      result
    )
    throw result // This being an instance of Error
  }
  const resetPasswordToken = await prisma.createResetPasswordToken({
    user: { connect: { id: user.id } },
    token,
    expiresIn: moment()
      .add(expires.split(' ')[0], expires.split(' ')[1])
      .valueOf()
      .toString()
  })
  console.info(
    `Reset Password email sent to ${user.email} successfully`,
    result
  )
  console.log(resetPasswordToken)

  return resetPasswordToken.token
}

const resetPassword = async (parent, { data }, { prisma }, info) => {
  const { token, email, oldPassword, newPassword, repeatNewPassword } = data
  const decoded = await jwt.verify(token, process.env.MAIL_JWT_SECRET)

  if (decoded.email !== email || newPassword !== repeatNewPassword) {
    const {
      emailPasswordIncorrect: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    console.log('The freaking error', error)
    throw error
  }

  const isRevoked =  prisma.$exists.resetPasswordToken({ token, revoke: false })
  if (isRevoked) {
    const { revokedResetPasswordTokenError: { message, code } } = errors.forbidden
    const error = new ForbiddenError(message)
    error.extensions.code = code
    throw error
  }  

  const user = await prisma.user({ email })
  const valid = await bcrypt.compare(oldPassword, user.password)

  if (!valid) {
    const {
      emailPasswordIncorrect: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    console.log('The freaking error', error)
    throw error
  }
  const password = await hashPassword(newPassword)
  await prisma.updateUser({
     data: { password } ,
     where: { email: user.email }  
  })
  await prisma.updateResetPasswordToken({
    data: { revoke: true },
    where: { token }
  })

  return 'Password successfully Reset!!'
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

export {
  createUser,
  login,
  renewUserAccessToken,
  requestResetPassword,
  resetPassword,
  updateUser,
  deleteUser
}
