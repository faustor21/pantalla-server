import * as userOperations from '../operations/mutation/User'
import * as favoriteWallpapersOperations from '../operations/mutation/FavoriteWallpaper'

const Mutation = {
  ...userOperations,
  ...favoriteWallpapersOperations
}

export default Mutation
