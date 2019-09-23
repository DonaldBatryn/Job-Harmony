import { connect } from 'react-redux';
import ResumeForm from './resume_form';
import { createResume } from '../../actions/resume_actions';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => ({
  resume: {
    userId: state.session.user.id,
    jobHistory: "jobHistory",
    jobField: "jobField",
    jobSkills: "jobSkills",
  },
  formType: 'Create Resume',
  user: state.session.user
})

const mapDispatchToProps = dispatch => ({
  action: resume => dispatch(createResume(resume))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResumeForm));