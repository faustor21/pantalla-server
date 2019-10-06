import Joi from '@hapi/joi'

import inputError from './inputError'

// User's input validations for mutations and queries goes here

const email = Joi.string()
  .email({ minDomainSegments: 2 })
  .error(errors => inputError('Must be a valid email'))
  .required()
const password = Joi.string()
  .pattern(/^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_]{8,}$/)
  .error(errors =>
    inputError('Password must be valid and at least 8 characters long')
  )
  .required()

// Schemas
const createUser = Joi.object({
  email,
  password,

  repeatPassword: Joi.ref('password'),

  birthYear: Joi.number()
    .integer()
    .min(1900)
    .max(2013)
    .required()
})
  .with('username', 'birthYear')
  .with('password', 'repeatPassword')

const login = Joi.object({
  email,
  password
})

export default { createUser, login }
