const createFavoriteWallpaper = async (parent, { data }, { prisma }, info) => {
  const { user: userId } = data
  const favoriteWallpaper = await prisma.createFavoriteWallpaper({
    source: data.source,
    wallpaperId: data.wallpaperId,
    user: {
      connect: {
        id: userId
      }
    }
  })

  return favoriteWallpaper
}

const deleteFavoriteWallpaper = async (parent, args, { prisma }, info) => {
  let deletedFavoriteWallpaper
  try {
    deletedFavoriteWallpaper = await prisma.deleteFavoriteWallpaper({
      id: args.wallpaperId
    })
  } catch (error) {
    throw new Error('Favorite Wallpaper Not Found')
  }
  return deletedFavoriteWallpaper
}

export { createFavoriteWallpaper, deleteFavoriteWallpaper }
