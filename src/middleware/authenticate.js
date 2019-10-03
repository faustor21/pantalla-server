import { AuthenticationError } from 'apollo-server-core'

import { verifyDecodeJWTToken } from '../utils/security/token'

export default async (resolve, parent, args, context, info) => {
  const { headers } = context.request.request
  try {
    const [, token] = headers.authorization.split(' ')
    // Add the user's id so it can be access everywhere
    context.userId = verifyDecodeJWTToken(token)
  } catch (e) {
    if (e.name === 'TokenExpiredError') {
      const authError = new AuthenticationError('Token Has Expired')
      authError.extensions.code = 'TokenExpiredError'
      return authError
    }
    return new AuthenticationError('Not authorized')
  }
  const result = await resolve(parent, args, context, info)
  return result
}
