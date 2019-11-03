import { RECEIVE_PREFERENCES } from "../actions/preferences_actions";
import { RECEIVE_CURRENT_USER,RECEIVE_USER_LOGOUT } from '../actions/session_actions';

export default function (state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PREFERENCES:
      return Object.assign({}, action.preference);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, action.currentUser.preference);
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}
