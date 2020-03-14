import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  timeout: 2000,
  headers: { Authorization: process.env.PEXELS_API_KEY }
});


const search = async (query,  page = 1, perPage = 15) =>{
  return instance.get(`/search?query=${query}&per_page=${perPage}&page=${page}`)
}

const popularPhotos = async (page = 1, perPage = 15) => {
  return instance.get(`/popular?per_page=${perPage}&page=${page}`)
}

export { search, popularPhotos }