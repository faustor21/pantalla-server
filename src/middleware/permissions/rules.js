import { rule } from 'graphql-shield'

const isAdmin = rule()(async (parent, args, { userId, prisma }) => {
  const user = await prisma.user({ id: userId })
  return user.role === 'ADMIN'
})

const isWallpaperOwner = rule()(
  async (parent, { wallpaperId }, { userId, prisma }) => {
    let user
    try {
      user = await prisma.wallpaper({ id: wallpaperId }).user()
    } catch (error) {
      console.error(error)
    }

    return userId === user.id
  }
)

/**
 * Check if the resource (Ex: updateUser(), deleteUser()) in the DB belongs
 * to the user making the request
 */
const imTheOwner = rule()(async (parent, args, { userId, prisma }, info) => {
  const user = await prisma.user({ id: userId })

  return user.id === args.userId
})

export { isAdmin, isWallpaperOwner, imTheOwner }
