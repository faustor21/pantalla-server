import { ValidationError } from 'apollo-server-core'

import errors from '../../errors'

const favoriteWallpaper = async (
  parent,
  { favoriteWallpaperId },
  { userId, prisma },
  info
) => {
  const favWallpaperFound = await prisma.$exists.favoriteWallpaper({
    id: favoriteWallpaperId
  })
  if (!favWallpaperFound) {
    const {
      favoriteWallpaperNotFound: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    throw error
  }

  const favoriteWallpaper = await prisma.favoriteWallpaper({
    id: favoriteWallpaperId
  })

  return favoriteWallpaper
}

const favoriteWallpapers = async (parent, args, { userId, prisma }, info) => {
  const favoriteWallpapers = await prisma.favoriteWallpapers({
    where: { user: { id: userId } }
  })
  return favoriteWallpapers
}

const getAllFavoriteWallpapers = async (parent, args, { prisma }) => {
  const favoriteWallpapers = await prisma.favoriteWallpapers()
  return favoriteWallpapers
}

export { favoriteWallpaper, favoriteWallpapers, getAllFavoriteWallpapers }
