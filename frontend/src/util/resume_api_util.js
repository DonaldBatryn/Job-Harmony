import axios from 'axios';

export const fetchResume = id => {
    return axios.get(`/api/resumes/${id}`)

}
export const createResume = resume => {
  return axios.post('/api/resumes/new', resume)
}
export const updateResume = resume => {

    return axios.patch(`/api/resumes/${resume._id}/edit`, resume)

}
