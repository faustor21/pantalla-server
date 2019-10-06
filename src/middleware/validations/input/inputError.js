import { ValidationError } from 'apollo-server-core'

import errors from '../../../errors'

const { code } = errors.validation.inputError

export default msg => {
  const error = new ValidationError(msg)
  error.extensions.code = code
  return error
}
