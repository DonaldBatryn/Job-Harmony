import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  const demoUser = (role) => ({
    email: Math.floor(Math.random() * 100000).toString() + "@gmail.com",
    f_name: "Demo",
    l_name: "User",
    password: 'hunter12',
    password2: 'hunter12',
    zip_code: '12345',
    role: role,
  })
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    demoUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);