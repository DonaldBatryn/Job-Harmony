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
  return ({
    loggedIn: state.session.isAuthenticated,
    resume: resume

  })
};

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);