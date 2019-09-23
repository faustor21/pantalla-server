const createUser = async (parent, args, { prisma }, info) => {
  const newUser = await prisma.createUser(args.data)
  return newUser
}

const updateUser = async (parent, args, { prisma }, info) => {
  const { data, userId } = args
  const user = await prisma.updateUser({
    data,
    where: {
      id: userId
    }
  })
  return user
}

const deleteUser = async (parent, args, { prisma }, info) => {
  const user = await prisma.deleteUser({
    id: args.userId
  })
  return user
}

export { createUser, updateUser, deleteUser }
