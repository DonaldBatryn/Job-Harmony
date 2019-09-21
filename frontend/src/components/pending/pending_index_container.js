import { connect } from 'react-redux';
import PendingIndex from './pending_index';
import { withRouter } from 'react-router-dom';

const msp = state => {
    let allLikes = Object.keys(state.entities.likes).map(id => {
        return Object.values(state.entities.onePages).filter(onePage => {
            return id === onePage._id
        })
    })
  
    return ({
        likedOnePages: allLikes,
        user: state.session.user
    })
}

const mdp = dispatch => {
    return ({

    })
}

export default withRouter(connect(msp, mdp)(PendingIndex));