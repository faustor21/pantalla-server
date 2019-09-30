const favoriteWallpaper = async (parent, args, { userId, prisma }, info) => {
  const favoriteWallpaper = await prisma.favoriteWallpaper({
    id: args.favoriteWallpaperId
  })
  if (!favoriteWallpaper) throw new Error('Favorite Wallpaper Not Found')
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
