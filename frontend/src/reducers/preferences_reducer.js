// import { RECEIVE_PREFERENCE } from "../actions/preference_actions";

import { RECEIVE_PREFERENCES } from "../actions/preferences_actions";
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_PREFERENCES:
      return Object.assign({}, action.preference);
    case RECEIVE_CURRENT_USER:
      // debugger
      return Object.assign({}, action.currentUser.preference);
    default:
      return state;
  }
}
