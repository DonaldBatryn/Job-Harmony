import { connect } from 'react-redux';
import OnePageForm from './onepage_form';
import { createOnePage } from '../../actions/onePage_actions';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => ({
  onePage: {
    userId: state.session.user.id,
    jobField: "",
    jobSkills: "",
    companyName: "",
    jobTitle: "",
    description: "",
    benefits: "",
    startingPay: "",
    type: "Select type of work",
    remote: "Is this job remote?",
  },
  formType: 'Create OnePage'
})

const mapDispatchToProps = dispatch => ({
  action: OnePage => dispatch(createOnePage(OnePage))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OnePageForm));