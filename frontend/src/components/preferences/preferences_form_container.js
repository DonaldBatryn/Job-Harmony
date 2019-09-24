import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPreference, createPreference, updatePreference } from '../../actions/preferences_actions';
import PreferencesForm from './preferences_form';


const msp = state => {
    let preference;
    if (state.session.user.preferences.length){
        
        preference = state.session.user.preferences[0]
    }else{
        preference = "no preference"
    }
    return ({
        user: state.session.user,
        preferences: {
            jobField: "",
            proximity: "",
            type: "",
            salaryRange: ""
        },
        preference,
        formType: "Set Preferences",
        errors: state.errors.session
    })
}

const mdp = (dispatch,ownProps) => {

    return({
            createPreference: (preference) => dispatch(createPreference(preference)), 
            updatePreference: (preference) => dispatch(updatePreference(preference))
    })
}

export default withRouter(connect(msp, mdp)(PreferencesForm));