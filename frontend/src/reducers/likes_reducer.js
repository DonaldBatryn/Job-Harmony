import { RECEIVE_LIKE } from '../actions/like_actions';
import { RECEIVE_CURRENT_USER,RECEIVE_USER_LOGOUT } from '../actions/session_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_ALL_LIKES:
    //   return action.likes;
    case RECEIVE_LIKE:
      debugger
      return Object.assign({}, state, { [action.like.onePageId]: action.like.onePage });
    // case RECEIVE_CURRENT_USER:
    //   let allOnePageIds = {};
    //    action.currentUser.pendingOnePages.forEach(onePage => {
    //     allOnePageIds[onePage._id] = onePage
    //     debugger
    //   }); 
    //   return allOnePageIds
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}