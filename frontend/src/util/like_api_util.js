import axios from 'axios';

export const fetchLike = onePageId => {
  return axios.get(`/api/likes/${onePageId}`)
}

export const createLike = like => {
  return axios.post(`/api/likes/${like.OnepageId}`)
}

export const fetchLikes = () => {
  return axios.patch(`/api/likes/all/`)
}