import axios from 'axios';


export const createPreference = pref => {
  debugger
  return axios.post('/api/preferences/new', pref)
}

export const updatePreference = pref => {
  debugger
  return axios.patch('/api/preferences/', pref)
}