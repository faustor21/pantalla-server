const User = {
  favoriteWallpapers(parent, _, { prisma }) {
    return prisma.user({ id: parent.id }).favoriteWallpapers()
  }
}

export default User
