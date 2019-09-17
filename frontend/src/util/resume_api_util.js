import axios from 'axios';

export const fetchResume = userId => {
    return axios.get(`/api/users/${userId}/resume`)
}

export const createResume = resume => {
    return axios.post('/api/resumes/new', resume)
}

export const updateResume = resume => {
    return axios.patch(`/api/users/${resume.user_id}/resume/edit`, resume)
}

