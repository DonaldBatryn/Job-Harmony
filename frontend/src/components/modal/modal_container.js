import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
//Do we need a modal?
const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
