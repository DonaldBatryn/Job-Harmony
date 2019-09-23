import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show'

const msp = state => {
    let resume;
    if (state.session.resume){
        resume = state.session.resume
    } else {
        resume = null
    }
    return {
        user: state.session.user,
        resume: resume
    }
}

const mdp = dispatch => {
    return {

    }
}

export default withRouter(connect(msp, mdp)(UserShow))