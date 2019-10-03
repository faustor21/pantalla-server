import jwt from 'jsonwebtoken'
import uuid from 'uuid/v4'
import moment from 'moment'
import { ForbiddenError } from 'apollo-server-core'

const errors = {
  invalidRefreshTokenError: {
    message: 'Invalid or revoked refresh token',
    code: 'InvalidRefreshToken'
  }
}

/**
 * Verify and decodes a given JWT token
 *
 * @param {string} token - JWT Token
 * @returns {string} - User's id
 */
const verifyDecodeJWTToken = token => {
  jwt.verify(token, process.env.JWT_SECRET)
  return jwt.decode(token).userId
}

/**
 * Generate a NEW accessToken and refreshToken
 * to be handle back to the user
 *
 * @param {object} prisma - Prisma client
 * @param {string} userId - The user's id
 * @returns {object} - Object with accessToken and refreshToken
 */
const generateToken = (prisma, userId) => {
  const accessToken = generateAccessToken(userId)
  return {
    accessToken,
    refreshToken: generateRefreshToken(prisma, accessToken, userId)
  }
}

/**
 * Renew the Access Token that's expired
 *
 * @param {object} prisma - Prisma client
 * @param {string} refreshToken - The refreshToken object received from the client
 * @returns {object} - Object with { accessToken, refreshToken }
 */
const renewAccessToken = async (prisma, refreshToken) => {
  const validRefreshToken = await isRefreshTokenValid(prisma, refreshToken)
  if (!validRefreshToken) {
    const refreshTokenInvalidError = new ForbiddenError()
    refreshTokenInvalidError.message = errors.invalidRefreshTokenError.message
    refreshTokenInvalidError.extensions.code =
      errors.invalidRefreshTokenError.code
    throw refreshTokenInvalidError
  }

  const tokenOwner = await prisma
    .refreshToken({ id: validRefreshToken.id })
    .user()
  const accessToken = generateAccessToken(tokenOwner.id)
  await updateRefreshToken(prisma, { accessToken }, refreshToken)

  return {
    accessToken,
    refreshToken
  }
}

/**
 * Generate a new Access Token
 *
 * @param {string} userId
 */
const generateAccessToken = userId => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '5 minutes'
  })
}

/**
 * This will create a New Refresh Token
 *
 * @param {object} prisma - Prisma client
 * @param {string} refreshToken - String refresh token
 */
const generateRefreshToken = async (prisma, accessToken, userId) => {
  const { refreshToken } = await prisma.createRefreshToken({
    user: { connect: { id: userId } },
    refreshToken: uuid(),
    expiresIn: moment()
      .add(30, 'days')
      .valueOf()
      .toString(), // Expires in 30 days in milliseconds
    accessToken
  })

  return refreshToken
}

/**
 * Verifies that the refresh token is valid.
 *
 * Checks if it has not being revoke and it's has not expired
 *
 * @param {object} prisma - Prisma client
 * @param {string} refreshToken - String refresh token
 * @returns {object|undefined} - If valid returns refresh token or undefined
 */
const isRefreshTokenValid = async (prisma, refreshToken) => {
  console.log('isRefreshTokenValid: refreshToken', refreshToken)
  const [validRefreshToken] = await prisma.refreshTokens({
    first: 1,
    where: {
      refreshToken,
      revoke: false
    }
  })
  let withinRange
  if (validRefreshToken) {
    const now = moment()
    withinRange = now.isBefore(parseInt(validRefreshToken.expiresIn))
    if (!withinRange) revokeToken(refreshToken)
  }

  if (!validRefreshToken || !withinRange) return

  return validRefreshToken
}

/**
 * Update the refresh token in the DB with the new access token.
 *
 * @param {object} prisma - Prisma client
 * @param {object} data - Object with { accessToken, revoke }
 * @param {string} refreshToken - String refresh token to be updated
 */
const updateRefreshToken = async (
  prisma,
  { accessToken, revoke },
  refreshToken
) => {
  // const data = accessToken ? { accessToken, revoke } : { revoke }
  const updatedRefreshToken = await prisma.updateRefreshToken({
    data: { accessToken, revoke },
    where: {
      refreshToken
    }
  })
  console.log('updateRefreshToken', updateRefreshToken)
  return updatedRefreshToken
}

/**
 * Revoke provided refresh token
 *
 * @param {object} prisma - Prisma Client
 * @param {string} refreshToken - String refresh token
 */
const revokeToken = async (prisma, refreshToken) => {
  const updatedRefreshToken = updateRefreshToken(
    prisma,
    { revoke: true },
    refreshToken
  )
  return updatedRefreshToken
}

export { generateToken, verifyDecodeJWTToken, renewAccessToken, revokeToken }
