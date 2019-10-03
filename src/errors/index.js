export default {
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
    favoriteWallpaperExists: {
      message: 'Already added as a Favorite Wallpaper',
      code: 'FavoriteWallpaperExists'
    },
    favoriteWallpaperNotFound: {
      message: 'Favorite Wallpaper Not Found',
      code: 'FavoriteWallpaperNotFound'
    },
    userEmailExists: {
      message: 'E-mail already exists in our records',
      code: 'UserEmailExists'
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
