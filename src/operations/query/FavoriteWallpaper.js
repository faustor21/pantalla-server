const favoriteWallpaper =  (parent, args, { prisma }, info) => {
  return prisma.favoriteWallpaper({
    where: {
      id: args.favoriteWallpaperId
    }
  })
}

const favoriteWallpapers =  (parent, args, { prisma }, info) => {
  return prisma.favoriteWallpapers()
}

export { favoriteWallpaper, favoriteWallpapers }
