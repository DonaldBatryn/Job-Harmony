import { RECEIVE_PREFERENCE } from "../actions/preference_actions";

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PREFERENCE:
      return Object.assign({}, action.preference);
    default:
      return state;
  }
}