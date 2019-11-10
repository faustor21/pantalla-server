import { ValidationError } from 'apollo-server-core'

import errors from '../../../errors'

const createWallpaper = async (
  parent,
  { data: { source, wallpaperId } },
  { userId, prisma }
) => {
  const wallpaperExist = await prisma.$exists.wallpaper({
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
  if (wallpaperExist) {
    const {
      wallpaperExists: { message, code }
    } = errors.validation
    const error = new ValidationError(message)
    error.extensions.code = code
    throw error
  }
  const wallpaper = await prisma.createWallpaper({
    source,
    wallpaperId,
    user: {
      connect: {
        id: userId
      }
    }
  })
  return wallpaper
}

const deleteWallpaper = async (parent,{ wallpaperId },{ prisma }, info) => {
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

  const deletedWallpaper = await prisma.deleteWallpaper({
    id: wallpaperId
  })
  console.log(deletedWallpaper)
  return deletedWallpaper
}

export { createWallpaper, deleteWallpaper }
