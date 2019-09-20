import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import React from 'react';
import OnePageForm from './onepage_form'
import { updateOnePage, fetchOnePage } from '../../actions/onePage_actions'

const msp = (state, ownProps) => {
    let onePage = state.entities.onePages[ownProps.match.params.onePageId];
    return ({
        onePage: onePage,
        formType: 'Update OnePage',
        currentUser: state.session.user
    })
}
const mdp = dispatch => ({
    action: onePage => dispatch(updateOnePage(onePage)),
    fetchOnePage: (id) => dispatch(fetchOnePage(id))
})
class EditOnePageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.onePage
    }

    componentDidMount() {
        this.props.fetchOnePage(this.props.match.params.onePageId)
    }
    render() {
        let { action, onePage, formType } = this.props;
        return (
            <OnePageForm
                action={action}
                formType={formType}
                onePage={onePage}
            />
        )
    }
}
export default withRouter(connect(msp, mdp)(EditOnePageForm));