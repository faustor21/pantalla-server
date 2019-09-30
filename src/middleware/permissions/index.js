import { shield, or } from 'graphql-shield'

import * as rules from './rules'

export default shield({
  Query: {
    favoriteWallpaper: or(rules.isAdmin, rules.isFavoriteWallpaperOwner),
    getAllFavoriteWallpapers: rules.isAdmin,
    user: or(rules.isAdmin, rules.imTheOwner),
    users: rules.isAdmin
  },
  Mutation: {
    deleteFavoriteWallpaper: or(rules.isAdmin, rules.isFavoriteWallpaperOwner),
    deleteUser: or(rules.isAdmin, rules.imTheOwner),
    updateUser: or(rules.isAdmin, rules.imTheOwner)
  }
})
