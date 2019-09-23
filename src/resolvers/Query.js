import * as userOperations from '../operations/query/User'
import * as favoriteWallpaperOperations from '../operations/query/FavoriteWallpaper'

const Query = {
  ...userOperations,
  ...favoriteWallpaperOperations
}

export default Query
