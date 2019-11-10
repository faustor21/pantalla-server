const User = {
   wallpapers(parent, _, { prisma }) {
    return prisma.user({ id: parent.id }).wallpapers()  
  }
}

export default User
