import axios from 'axios';

export const fetchPreference = id => {
    return axios.get(`/api/preferences/${id}`)

}
export const createPreference = performance => {
    return axios.post('/api/preferences/new', performance)
}
export const updatePreference = performance => {

    return axios.patch(`/api/preferences/${performance._id}/edit`, performance)

}
