// Mutations
import * as userMutationOperations from './mutation/user'
import * as favoriteWallpapersMutationOperations from './mutation/favoriteWallpaper'

// Queries
import * as userQueryOperations from './query/user'
import * as favoriteQueryWallpaperOperations from './query/favoriteWallpaper'

const queryOperations = {
  ...userQueryOperations,
  ...favoriteQueryWallpaperOperations
}

const mutationOperations = {
  ...userMutationOperations,
  ...favoriteWallpapersMutationOperations
}

export { queryOperations, mutationOperations }
