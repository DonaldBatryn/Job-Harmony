import * as ResumeAPIUtil from '../util/resume_api_util';

export const RECEIVE_RESUME = 'RECEIVE_RESUME';
export const RECEIVE_RESUME_ERRORS = 'RECEIVE_RESUME_ERRORS';

const receiveResume = resume => ({
  type: RECEIVE_RESUME,
  resume: resume.data
})

const receiveResumeErrors = errors => ({
  type: RECEIVE_RESUME_ERRORS,
  errors
})

export const fetchResume = (userId) => dispatch => (
  ResumeAPIUtil.fetchResume(userId)
    .then(resume => dispatch(receiveResume(resume)))
    .catch(err => dispatch(receiveResumeErrors(err.response.data)))
)

export const createResume = (resume) => dispatch => (
  ResumeAPIUtil.createResume(resume)
    .then(resume => dispatch(receiveResume(resume)))
    .catch(err => dispatch(receiveResumeErrors(err.response.data)))
)

export const updateResume = (resume) => dispatch => (
  ResumeAPIUtil.updateResume(resume)
    .then(resume => dispatch(receiveResume(resume)))
    .catch(err => dispatch(receiveResumeErrors(err.response.data)))
)
