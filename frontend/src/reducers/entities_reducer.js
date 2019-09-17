import { combineReducers } from 'redux';
import users from './users_reducer';
import onePages from './onePages_reducer';
import resumes from './resumes_reducer';
import matches from './matches_reducer';

export default combineReducers({
  users
  // resumes,
  // onePages,
  // matches
});