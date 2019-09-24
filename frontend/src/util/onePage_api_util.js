import axios from 'axios';
export const fetchOnePage = id => {
    return axios.get(`/api/onePages/${id}`)
}
export const fetchAllOnePages = () => {
    return axios.get('/api/onePages/all')
}
export const fetchrm = () => {
    return axios.get('/api/matchers/')
}
export const createOnePage = onePage => {
    return axios.post('/api/onePages/new', onePage)
}
export const updateOnePage = onePage => {
    return axios.patch(`/api/onePages/${onePage._id}/edit`, onePage)
}

