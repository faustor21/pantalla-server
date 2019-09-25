/**
 * This function applies the middleware to every resolver that is not exclude explicitly.
 *
 * @param {array} resolvers - Application resolvers.
 * @param {function} middleware - The middleware that it's going to be apply
 * @param {array} excludeResolvers - The resolvers that the middleware are not going to be applied to.
 * @returns The object with the applied middleware
 */
export default (resolvers, middleware, excludeResolvers) => {
  const appliedTo = {}
  for (const [key, value] of Object.entries(resolvers)) {
    appliedTo[key] = Object.keys(value).reduce((obj, v) => {
      if (!excludeResolvers.includes(v)) obj[v] = middleware
      return obj
    }, {})
  }
  return appliedTo
}
