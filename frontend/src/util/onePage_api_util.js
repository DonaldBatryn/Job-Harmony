import axios from 'axios';
export const fetchOnePage = id => {
    return axios.get(`/api/onePages/${id}`)
}
export const createOnePage = onePage => {
    return axios.post('/api/onePages/new', onePage)
}
export const updateOnePage = onePage => {
    return axios.patch(`/api/onePages/${onePage._id}/edit`, onePage)
