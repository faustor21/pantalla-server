// Mutations
import * as userMutationOperations from './mutation/user'
import * as wallpapersMutationOperations from './mutation/wallpaper'

// Queries
import * as queryUserOperations from './query/user'
import * as queryWallpaperOperations from './query/wallpaper'

const queryOperations = {
  ...queryUserOperations,
  ...queryWallpaperOperations
}

const mutationOperations = {
  ...userMutationOperations,
  ...wallpapersMutationOperations
}

export { queryOperations, mutationOperations }
