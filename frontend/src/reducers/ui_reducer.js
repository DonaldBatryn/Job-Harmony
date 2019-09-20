import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';


export default combineReducers({
  modals: modalsReducer
});