import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';

const mdp = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(null, mdp)(Splash);