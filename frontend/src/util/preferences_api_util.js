import axios from 'axios';

export const fetchPreference = id => {
    // debugger
    return axios.get(`/api/preferences/${id}`)
}
export const createPreference = preference => {
        // debugger
    return axios.post('/api/preferences/new', preference)
}
export const updatePreference = preference => {
    // debugger
    return axios.patch(`/api/preferences/${preference.id}`, preference)

}
