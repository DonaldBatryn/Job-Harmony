// import { RECEIVE_PREFERENCE } from "../actions/preference_actions";

import { RECEIVE_PREFERENCES } from "../actions/preferences_actions";

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PREFERENCES:
      return Object.assign({}, action.preference);
    default:
      return state;
  }
}
