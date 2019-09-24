import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PreferencesForm from './preferences_form';
import { createPreference, updatePreference } from '../../actions/preference_actions'

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

const mdp = dispatch => ({
    action: pref => dispatch(createPreference(pref)),
    updatePref: pref => dispatch(updatePreference(pref))
})

export default withRouter(connect(msp, mdp)(PreferencesForm));