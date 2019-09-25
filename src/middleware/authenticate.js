import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-core'

export default async (resolve, parent, args, context, info) => {
  const { headers } = context.request.request
  try {
    const [, token] = headers.authorization.split(' ')
    jwt.verify(token, process.env.JWT_SECRET)
  } catch (e) {
    return new AuthenticationError('Not authorized')
  }
  const result = await resolve(parent, args, context, info)
  return result
}
