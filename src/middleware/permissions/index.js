import { shield, or } from 'graphql-shield'

import * as rules from './rules'

export default shield({
  Query: {
    wallpaper: or(rules.isAdmin, rules.isWallpaperOwner),
    getAllWallpapers: rules.isAdmin,
    user: or(rules.isAdmin, rules.imTheOwner),
    users: rules.isAdmin
  },
  Mutation: {
    deleteWallpaper: or(rules.isAdmin, rules.isWallpaperOwner),
    deleteUser: or(rules.isAdmin, rules.imTheOwner),
    updateUser: or(rules.isAdmin, rules.imTheOwner)
  }
})
