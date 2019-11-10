const errors = {
  authentication: {
    tokenExpiredError: {
      message: 'Token Has Expired',
      code: 'TokenExpiredError'
    }
  },
  forbidden: {
    invalidRefreshTokenError: {
      message: 'Invalid or revoked refresh token',
      code: 'InvalidRefreshToken'
    }
  },
  validation: {
    inputError: {
      code: 'InputError'
    },
    wallpaperExists: {
      message: 'Already Rated Wallpaper',
      code: 'WallpaperExists'
    },
    wallpaperNotFound: {
      message: 'Wallpaper Not Found',
      code: 'WallpaperNotFound'
    },
    userEmailExists: {
      message: 'E-mail already exists in our records',
      code: 'UserEmailExists'
    },
    userEmailNotValidated: {
      message:
        "This user's email/account has not been validated, please proceed to do so",
      code: 'EmailAccountNotValidated'
    },
    emailPasswordIncorrect: {
      message: 'E-mail or password incorrect',
      code: 'EmailOrPasswordIncorrect'
    },
    userNotFound: {
      message: 'User not found',
      code: 'UserNotFound'
    }
  }
}

const getException = (type, name, ClassName) => {
  const { message, code } = errors[type][name]
  const error = new ClassName(message)
  error.extensions.code = code
  return error
}

export { getException, errors as default }
