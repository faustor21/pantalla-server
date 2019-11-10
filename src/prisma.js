import { Prisma } from './generated/prisma-client'

const prisma = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET
})

export default prisma
