import { RECEIVE_LIKE,RECEIVE_ALL_LIKES } from '../actions/like_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      return Object.assign({}, state, { [action.like.onePageId]: action.like.onePage });
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}