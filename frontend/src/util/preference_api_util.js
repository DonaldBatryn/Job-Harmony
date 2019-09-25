import axios from 'axios';


export const createPreference = pref => {
  return axios.post('/api/preferences/new', pref)
}

export const updatePreference = pref => {
  return axios.patch('/api/preferences/', pref)
}