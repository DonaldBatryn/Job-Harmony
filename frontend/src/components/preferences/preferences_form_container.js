import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PreferencesForm from './preferences_form';


const msp = state => {
    return ({
        user: state.session.user,
        preferences: {
            jobField: "",
            proximity: "",
            type: "",
            salaryRange: ""
        },
        formType: "Set Preferences"
    })
}

const mdp = dispatch => {
    return({

    })
}

export default withRouter(connect(msp, mdp)(PreferencesForm));