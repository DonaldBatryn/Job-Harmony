import { connect } from 'react-redux';
import OnePageForm from './onepage_form';
import { createOnePage } from '../../actions/onePage_actions';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => ({
  onePage: {
    user_id: state.session.user.id,
    company_name: "",
    job_title: "",
    description: "",
    type: "Select type of work",
    remote: "Is this job remote?",
    benefits: "",
    starting_pay: 0,
  },
  formType: 'Create OnePage'
})

const mapDispatchToProps = dispatch => ({
  action: OnePage => dispatch(createOnePage(OnePage))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OnePageForm));