const createFavoriteWallpaper = async (
  parent,
  { data: { source, wallpaperId } },
  { userId, prisma },
  info
) => {
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

const deleteFavoriteWallpaper = async (parent, args, { prisma }, info) => {
  let deletedFavoriteWallpaper
  try {
    deletedFavoriteWallpaper = await prisma.deleteFavoriteWallpaper({
      id: args.favoriteWallpaperId
      // This is being handle by the permissions
      // where: {
      //   user: {
      //     id: userId
      //   }
      // }
    })
  } catch (error) {
    throw new Error('Favorite Wallpaper Not Found')
  }
  return deletedFavoriteWallpaper
}

export { createFavoriteWallpaper, deleteFavoriteWallpaper }
