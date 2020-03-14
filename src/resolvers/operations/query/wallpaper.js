import { ValidationError } from 'apollo-server-core'

import errors from '../../../errors'

// 3rd parties API imports
import * as pexels from  '../../../api/pexels'
import * as pexelsUtils from '../../../utils/api/pexels'

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

// 3rd Party APIs calls

const searchForWallpapers = async (parent, { data }) => {
  const { query, page, perPage } = data
  const result = await pexels.search(query, page, perPage)
  const wallpapers = pexelsUtils.convertResults(result.data.photos)

  return wallpapers
}

const getPopularWallpapers = async (parent, { data }) => { 
  const page = data ? data.page : 1
  const perPage = data ? data.perPage : 15
  const result = await pexels.popularPhotos(page, perPage)
  const wallpapers = pexelsUtils.convertResults(result.data.photos)
  
  return wallpapers
}

export { wallpaper, getAllUserWallpapers, getAllWallpapers, searchForWallpapers, getPopularWallpapers }
