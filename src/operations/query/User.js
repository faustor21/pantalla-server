const user = (parent, args, { prisma }, info) => {
  return prisma.user({
    where: { id: args.userId }
  })
}

const users = (parent, args, { prisma }, info) => {
  return prisma.users()
}

export { user, users }