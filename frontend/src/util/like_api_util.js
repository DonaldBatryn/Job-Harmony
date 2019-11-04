import axios from 'axios';

export const fetchLike = onePageId => {
  return axios.get(`/api/likes/${onePageId}`)
}
// export const fetchAllLikes = () => {
//   return axios.get(`/api/likes/`)
// }
export const createLike = like => {
  debugger
  return axios.post(`/api/likes/${like.OnepageId}`)
}

