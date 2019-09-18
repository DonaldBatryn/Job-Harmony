import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import React from 'react';
import ResumeForm from './resume_form'
import { updateResume, fetchResume } from '../../actions/resume_actions'

const msp = (state, ownProps) => {
    let resume = Object.values(state.entities.resumes)
        .find(resume => resume.user_id === ownProps.match.params.userId);
    return ({
        resume: resume,
        formType: 'Update resume',
        currentUser: state.session.user
    })
}

const mdp = dispatch => ({
    action: resume => dispatch(updateResume(resume)),
    fetchResume: (userId) => dispatch(fetchResume(userId)) 
})


class EditResumeForm extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        this.props.fetchResume(this.props.match.params.userId)
    }

    render(){
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