import { RECEIVE_NEW_MAIN } from '../actions/onePage_actions';
const currentMain = {currentMain: null}
export default function (state = currentMain, action) {
  Object.freeze(state);
      debugger
      debugger
      debugger
      debugger
      debugger
  switch (action.type) {
    
    case RECEIVE_NEW_MAIN:
      return Object.assign({}, state, {currentMain: action.onePage});
    default:
      return state;
  }
}