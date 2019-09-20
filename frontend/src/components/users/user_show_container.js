import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show'

const msp = state => {
    return {
        user: state.session.user,
        resume: state.session.user.resume
    }
}

const mdp = dispatch => {
    return {

    }
}

export default withRouter(connect(msp, mdp)(UserShow))