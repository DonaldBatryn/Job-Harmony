import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Buttons from './buttons';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {
    // let user = 
    return ({
        user: state.session.user
    })
}

const mdp = (dispatch) => {
    
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default withRouter(connect(msp, mdp)(Buttons));