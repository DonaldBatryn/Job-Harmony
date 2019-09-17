import * as UserAPIUtil from '../util/user_api_util'

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'

const receiveUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users: users.data
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user: user.data
})

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const fetchUsers = () => dispatch => (
    UserAPIUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
        .catch(err => dispatch(receiveUserErrors(err.response.data)))
)

export const fetchUser = (id) => dispatch => (
    UserAPIUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => dispatch(receiveUserErrors(err.response.data)))
)

window.fetchUsers = fetchUsers;
window.fetchUser = fetchUser;