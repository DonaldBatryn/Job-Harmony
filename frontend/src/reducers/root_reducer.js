import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import {responsiveStateReducer} from 'redux-responsive';
import entities from './entities_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  ui,
  errors,
  browser: responsiveStateReducer
});

export default RootReducer;