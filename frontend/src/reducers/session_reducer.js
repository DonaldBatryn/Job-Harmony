import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';
import { RECEIVE_RESUME } from '../actions/resume_actions'
import { RECEIVE_ONEPAGE } from '../actions/onePage_actions'

const initialState = {
  isAuthenticated: false,
  user: {}
};
export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      }
    case RECEIVE_RESUME:
      return Object.assign({}, state, { resume: action.resume })
    case RECEIVE_ONEPAGE:
      return Object.assign({}, state, { onePage: action.onePage })
    default:
      return state;
  }
}