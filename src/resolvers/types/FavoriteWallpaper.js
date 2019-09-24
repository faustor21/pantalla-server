const FavoriteWallpaper = {
  user(parent, _, { prisma }) {
    return prisma.favoriteWallpaper({ id: parent.id }).user()
  }
}

export default FavoriteWallpaper
