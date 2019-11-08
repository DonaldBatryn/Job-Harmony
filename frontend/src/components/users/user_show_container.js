import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllOnePages } from '../../actions/onePage_actions';
import UserShow from './user_show'

const msp = state => {
    debugger
    let resume;
    if (state.session.resume){
        resume = state.session.resume
    } else {
        resume = null
    }
    let likesArray = Array.from(Object.values(state.entities.likes))
    return {
        user: state.session.user,
        resume: resume,
        likes: likesArray
    }
}

const mdp = dispatch => {
    return {
        fetchAllOnePages: () => dispatch(fetchAllOnePages())
    }
}

export default withRouter(connect(msp, mdp)(UserShow))