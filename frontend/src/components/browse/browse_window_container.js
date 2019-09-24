import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BrowseWindow from './browse_window'
import {
    fetchAllOnePages,
    fetchrm
} from '../../actions/onePage_actions'
import { createLike } from '../../actions/like_actions'


const msp = state => ({
  onePages: Object.keys(state.entities.onePages).map(id => {
      return state.entities.onePages[id]
  }),
  user: state.session.user,
  currentMain: state.ui.currentMain
})

const mdp = dispatch => {
    return {
        fetchAllOnePages: () => dispatch(fetchAllOnePages()),
        fetchrm: () => dispatch(fetchrm()),
        createLike: like => dispatch(createLike(like))
    }
}

export default withRouter(connect(msp, mdp)(BrowseWindow))