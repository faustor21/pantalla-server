const user = async (parent, args, { prisma }, info) => {
  const user = await prisma.user({ id: args.userId })
  if (!user) throw new Error('User not found')
  return user
}

const users = async (parent, args, { prisma }, info) => {
  const users = await prisma.users()
  return users
}

export { user, users }
