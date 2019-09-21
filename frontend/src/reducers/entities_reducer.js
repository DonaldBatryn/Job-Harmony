import { combineReducers } from 'redux';
import users from './users_reducer';
import onePages from './onePages_reducer';
import resumes from './resumes_reducer';
import likes from './likes_reducer'
// import matches from './matches_reducer';

export default combineReducers({
  users,
  resumes,
  onePages,
  likes,
  // matches
});