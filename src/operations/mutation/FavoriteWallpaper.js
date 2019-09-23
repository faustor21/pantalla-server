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
  const deletedFavoriteWallpaper = await prisma.deleteFavoriteWallpaper({
    id: args.wallpaperId
  })
  return deletedFavoriteWallpaper
}

export { createFavoriteWallpaper, deleteFavoriteWallpaper }
