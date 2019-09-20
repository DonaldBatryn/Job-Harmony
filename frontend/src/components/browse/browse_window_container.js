import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BrowseWindow from './browse_window'
import { fetchAllOnePages } from '../../actions/onePage_actions'


const msp = state => ({
  onePages: Object.keys(state.entities.onePages).map(id => {
      return state.entities.onePages[id]
  }),
  user: state.session.user
})

const mdp = dispatch => {
    return {
        fetchAllOnePages: () => dispatch(fetchAllOnePages())
    }
}

export default withRouter(connect(msp, mdp)(BrowseWindow))