const Wallpaper = {
  user(parent, args, { prisma }) {    
    return prisma.wallpaper({ id: parent.id }).user()        
  }
}

export default Wallpaper
