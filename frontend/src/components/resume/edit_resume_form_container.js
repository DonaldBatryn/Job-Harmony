import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import React from 'react';
import ResumeForm from './resume_form'
import { updateResume, fetchResume } from '../../actions/resume_actions'
const msp = (state, ownProps) => {
    let resume = state.entities.resumes[ownProps.match.params.resumeId];
    return ({
        resume: resume,
        formType: 'Update Resume',
        currentUser: state.session.user
    })
}
const mdp = dispatch => ({
    action: resume => dispatch(updateResume(resume)),
    fetchResume: (id) => dispatch(fetchResume(id))
})
class EditResumeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.resume
    }

    componentDidMount() {
        this.props.fetchResume(this.props.match.params.resumeId)
    }
    render() {
        let { action, resume, formType } = this.props;
        return (
            <ResumeForm
                action={action}
                formType={formType}
                resume={resume}
            />
        )
    }
}
export default withRouter(connect(msp, mdp)(EditResumeForm));