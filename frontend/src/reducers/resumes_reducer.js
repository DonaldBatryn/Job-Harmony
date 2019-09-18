import { RECEIVE_RESUME } from "../actions/resume_actions";

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESUME:
      debugger
      return Object.assign({}, { [action.resume._id]: action.resume } );
    default:
      return state;
  }
}