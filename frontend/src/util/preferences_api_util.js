import axios from 'axios';

export const fetchPreference = id => {
    return axios.get(`/api/preferences/${id}`)

}
export const createPreference = preference => {
    return axios.post('/api/preferences/new', preference)
}
export const updatePreference = preference => {

    return axios.patch(`/api/preferences/`, preference)

}
