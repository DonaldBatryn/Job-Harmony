import { connect } from 'react-redux';
import OnePageForm from './onepage_form';
import { createOnePage } from '../../actions/onePage_actions';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => ({
  onePage: {
    userId: state.session.user.id,
    company_name: "",
    jobTitle: "",
    description: "",
    type: "Select type of work",
    remote: "Is this job remote?",
    benefits: "",
    startingPay: "",
  },
  formType: 'Create OnePage'
})

const mapDispatchToProps = dispatch => ({
  action: OnePage => dispatch(createOnePage(OnePage))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OnePageForm));