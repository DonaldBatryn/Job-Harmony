import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllOnePages } from '../../actions/onePage_actions';
import UserShow from './user_show'

const msp = state => {
    let resume;
    if (state.session.resume){
        resume = state.session.resume
    } else {
        resume = null
    }
    let onePagesArray = Array.from(Object.values(state.entities.onePages))
    return {
        user: state.session.user,
        resume: resume,
        likes: Object.keys(state.entities.likes).map(onePageId => {
            return onePagesArray.filter(onepage => onepage._id === onePageId)
        })
    }
}

const mdp = dispatch => {
    return {
        fetchAllOnePages: () => dispatch(fetchAllOnePages())
    }
}

export default withRouter(connect(msp, mdp)(UserShow))