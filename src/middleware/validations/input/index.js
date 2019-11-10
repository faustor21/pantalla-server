import userSchemas from './userSchemas'

const mutations = { ...userSchemas }
const queries = {} // In case you want to add queries schemas for user

const operations = { ...mutations, ...queries }

export default async (resolve, parent, args, context, info) => {
  const { fieldName } = info

  const hasField = Object.keys(operations).some(key => key === fieldName)
  if (hasField) {
    const { error } = mutations[fieldName].validate(args.data)
    if (error) throw error
  }
  const result = await resolve(parent, args, context, info)
  return result
}
