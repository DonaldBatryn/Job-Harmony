import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import OnePageShow from './onepage_show'
import { updateOnePage, fetchOnePage } from '../../actions/onePage_actions'

const msp = (state, ownProps) => {

    let onePage = state.entities.onePages[ownProps.match.params.onePageId]
    return ({
        currentUser: state.session.user,
        onePage: onePage
    })
}
const mdp = dispatch => {
    return ({
        fetchOnePage: (id) => dispatch(fetchOnePage(id)),
        updateOnePage: (onePage) => dispatch(updateOnePage(onePage))
    })
}
export default withRouter(connect(msp, mdp)(OnePageShow));