import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { openModal } from '../../actions/modal_actions';


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
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);