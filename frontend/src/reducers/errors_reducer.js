import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import resumes from './resume_errors_reducer';
import onePages from './onePage_errors_reducer';
export default combineReducers({
  session: SessionErrorsReducer,
  resumes,
  onePages
});