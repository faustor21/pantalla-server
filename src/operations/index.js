// Mutations
import * as userMutationOperations from './mutation/User'
import * as favoriteWallpapersMutationOperations from './mutation/FavoriteWallpaper'

// Queries
import * as userQueryOperations from './query/User'
import * as favoriteQueryWallpaperOperations from './query/FavoriteWallpaper'

const queryOperations = {
  ...userQueryOperations,
  ...favoriteQueryWallpaperOperations
}

const mutationOperations = {
  ...userMutationOperations,
  ...favoriteWallpapersMutationOperations
}

export { queryOperations, mutationOperations }
