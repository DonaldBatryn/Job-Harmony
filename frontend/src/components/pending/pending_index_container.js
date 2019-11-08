import { connect } from 'react-redux';
import PendingIndex from './pending_index';
import { withRouter } from 'react-router-dom';
import {fetchOnePage} from '../../actions/onePage_actions';
import {
  receiveNewMain
} from '../../actions/onePage_actions';

const msp = (state, ownProps) => {
    // let allLikes = Object.keys(state.entities.likes).map(id => {
    //     return Object.values(state.entities.onePages).filter(onePage => {
    //         return id === onePage._id
    //     })
    // })
    let allLikes = Object.values(state.entities.likes)
    // const onePage = Object.values(state.entities.onePages).filter(onePage => {
    //   return onePage._id
    // })
  
    return ({
        // onePage,
        likedOnePages: allLikes,
        user: state.session.user
    })
}

const mdp = dispatch => {
    return ({
          fetchOnePage: (id) => dispatch(fetchOnePage(id)),
          receiveNewMain: (main) => dispatch(receiveNewMain(main))
})
}

export default withRouter(connect(msp, mdp)(PendingIndex));