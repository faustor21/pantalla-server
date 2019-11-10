import { ValidationError } from 'apollo-server-core'

import errors from '../../../errors'

const wallpaper = async ( parent, { wallpaperId }, { userId, prisma }, info) => {
  const wallpaperFound = await prisma.$exists.wallpaper({
    id: wallpaperId
  })
  if (!wallpaperFound) {
    const {
      wallpaperNotFound: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    throw error
  }

  const wallpaper = await prisma.wallpaper({
    id: wallpaperId
  })

  return wallpaper
}

// Get all wallpapers liked or rated by the logged user 
const getAllUserWallpapers = async (parent, args, { userId, prisma }, info) => {
  const wallpapers = await prisma.wallpapers({
    where: { user: { id: userId } }
  })
  return wallpapers
}

const getAllWallpapers = async (parent, args, { prisma }) => {
  const wallpapers = await prisma.wallpapers()
  return wallpapers
}

export { wallpaper, getAllUserWallpapers, getAllWallpapers }
