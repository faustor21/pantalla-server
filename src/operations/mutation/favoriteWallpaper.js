import { ValidationError } from 'apollo-server-core'

import errors from '../../errors'

const createFavoriteWallpaper = async (
  _,
  { data: { source, wallpaperId } },
  { userId, prisma }
) => {
  const favWallpaperExist = await prisma.$exists.favoriteWallpaper({
    AND: [
      {
        source
      },
      {
        wallpaperId
      },
      {
        user: {
          id: userId
        }
      }
    ]
  })
  if (favWallpaperExist) {
    const {
      favoriteWallpaperExists: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    throw error
  }
  const favoriteWallpaper = await prisma.createFavoriteWallpaper({
    source,
    wallpaperId,
    user: {
      connect: {
        id: userId
      }
    }
  })

  return favoriteWallpaper
}

const deleteFavoriteWallpaper = async (
  _,
  { favoriteWallpaperId },
  { prisma }
) => {
  const favWallpaperFound = await prisma.$exists.favoriteWallpaper({
    id: favoriteWallpaperId
  })
  if (!favWallpaperFound) {
    const {
      favoriteWallpaperNotFound: { message, code }
    } = errors.validation
    const error = ValidationError(message)
    error.extensions.code = code
    throw error
  }

  const deletedFavoriteWallpaper = await prisma.deleteFavoriteWallpaper({
    id: favoriteWallpaperId
  })
  return deletedFavoriteWallpaper
}

export { createFavoriteWallpaper, deleteFavoriteWallpaper }
