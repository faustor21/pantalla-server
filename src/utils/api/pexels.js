/**
 * Convert the raw photos array to an array of objects with a
 * recognizable form of the GraphQL for "WallpaperPayload"
 * 
 * @param {Object[]} photos - An array of photos
 */
const convertResults = (photos) => {
  return photos.map(photo => {    
    const wallpaper = {
      wallpaperId: photo.id, 
      source: 'PEXELS',      
      src: {
        original: photo.src.original,
        large2x: photo.src.large2x,
        large: photo.src.large,
        medium: photo.src.medium,
      }
    }
    return wallpaper
  })
}

export { convertResults }