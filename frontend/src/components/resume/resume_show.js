import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import ResumeShow from './resume_show'
import { updateResume, fetchResume } from '../../actions/resume_actions'
const msp = (state, ownProps) => {
    // let resume = Object.values(state.entities.resumes)
    //     .find(resume => resume.user_id === ownProps.match.params.userId);
    let resume = state.entities.resumes[ownProps.match.params.resumeId]
    return ({
        currentUser: state.session.user,
        resume: resume
    })
}
const mdp = dispatch => {
    return ({
        fetchResume: (id) => dispatch(fetchResume(id)),
        updateResume: (resume) => dispatch(updateResume(resume))
    })
}
export default withRouter(connect(msp, mdp)(ResumeShow));