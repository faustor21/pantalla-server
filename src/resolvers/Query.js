const Query = {
  user (parent, args, { prisma }, info) {
    return prisma.user({
      where: { id: args.userId }
    })
  },
  users (parent, args, { prisma }, info) {
    return prisma.users()
  }
}

export default Query
