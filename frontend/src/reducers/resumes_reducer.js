import { RECEIVE_RESUME } from "../actions/resume_actions";

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESUME:
      return Object.assign({}, state, { [action.resume._id]: action.resume } );
    default:
      return state;
  }
}