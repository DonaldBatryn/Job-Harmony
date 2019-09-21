import { RECEIVE_LIKE } from '../actions/like_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_ALL_LIKES:
    //   return action.likes;
    case RECEIVE_LIKE:
      return Object.assign({}, state, { [action.like.onePageId]: action.like });
    default:
      return state;
  }
}