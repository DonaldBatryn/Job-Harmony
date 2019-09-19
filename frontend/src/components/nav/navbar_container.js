import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
  let resume;
  if (state.session.resume) {
    resume = state.session.resume
  } else {
    resume = null
  }
  let onePage;
  if (state.session.onePage){
    onePage = state.session.onePage
  } else {
    onePage = null
  }
  return ({
    loggedIn: state.session.isAuthenticated,
    resume: resume,
    onePage: onePage,
    user: state.session.user

  })
};

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);