import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPreference, createPreference, updatePreference } from '../../actions/preferences_actions';
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

const mdp = (dispatch,ownProps) => {

    return({
            fetchPreference: (id) => dispatch(fetchPreference(id)),
            createPreference: (preference) => dispatch(createPreference(preference)), 
            updatePreference: (preference) => dispatch(updatePreference(preference))
    })
}

export default withRouter(connect(msp, mdp)(PreferencesForm));