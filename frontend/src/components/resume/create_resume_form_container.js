import { connect } from 'react-redux';
import ResumeForm from './resume_form';
import { createResume } from '../../actions/resume_actions';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => ({
  resume: {
    user_id: state.session.user.id,
    job_history: "",
    job_field: "",
    job_skills: "",
  },
  formType: 'Create Resume'
})

const mapDispatchToProps = dispatch => ({
  action: resume => dispatch(createResume(resume))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResumeForm));