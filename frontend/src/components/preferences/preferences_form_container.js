import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    fetchRelevantOnePages
} from '../../actions/onePage_actions'
import { fetchPreference, createPreference, updatePreference } from '../../actions/preferences_actions';
import PreferencesForm from './preferences_form';

const msp = state => {
    let preference;
    debugger
    if (state.session.user.preference !== "no"){
        
        preference = state.session.user.preference
    }else{
        debugger
        preference = "no preference"
    }
    let errors;
    if (state.errors.session) {
        errors = state.errors.session
    } else {
        errors= []
    }
    return ({
        user: state.session.user,
        preferences: {
            jobField: "",
            proximity: "",
            type: "",
            salaryRange: "",
            id: state.session.user.id
        },
        preference,
        formType: "Set Preferences",
        errors
    })
}

const mdp = (dispatch,ownProps) => {

    return({
            createPreference: (preference) => dispatch(createPreference(preference)), 
            updatePreference: (preference) => dispatch(updatePreference(preference)),
            fetchRelevantOnePages: () => dispatch(fetchRelevantOnePages())
    })
}

export default withRouter(connect(msp, mdp)(PreferencesForm));