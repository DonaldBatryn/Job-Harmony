import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';

export default function (state = {}, action){
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id]: action.user });
        default:
            return state;
    }
}