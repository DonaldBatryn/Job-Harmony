import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BrowseWindow from './browse_window'
import {
    // fetchAllOnePages,
    fetchRelevantOnePages
} from '../../actions/onePage_actions'
import { createLike,fetchLikes } from '../../actions/like_actions'


const msp = state => ({
  onePages: Object.keys(state.entities.onePages).map(id => {
      return state.entities.onePages[id]
  }),
  user: state.session.user,
  currentMain: state.ui.currentMain
})

const mdp = dispatch => {
    return {
        // fetchAllOnePages: () => dispatch(fetchAllOnePages()),
        fetchRelevantOnePages: () => dispatch(fetchRelevantOnePages()),
        createLike: like => dispatch(createLike(like)),
        fetchLikes: () => dispatch(fetchLikes())
    }
}

export default withRouter(connect(msp, mdp)(BrowseWindow))