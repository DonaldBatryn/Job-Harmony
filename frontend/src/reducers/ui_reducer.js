import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import currentMainReducer from './current_main_reducer';

export default combineReducers({
  modal: modalReducer,
  currentMain: currentMainReducer
});