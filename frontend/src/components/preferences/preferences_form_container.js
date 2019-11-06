import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRelevantOnePages } from '../../actions/onePage_actions'
import { fetchPreference, createPreference, updatePreference } from '../../actions/preferences_actions';
import PreferencesForm from './preferences_form';

const msp = state => {

    let preference;
    // if (state.session.user.preference !== "no"){
    if (state.entities.preferences) {
        let pref = state.entities.preferences;
        preference = {
            id: pref._id,
            userId: pref.userId,
            jobField: pref.jobField,
            proximity: pref.proximity,
            type: pref.type,
            salaryRangeHigh: pref.salaryRangeHigh,
            salaryRangeLow: pref.salaryRangeLow,
            salaryRange: `${pref.salaryRangeLow}-${pref.salaryRangeHigh}`
        }
        
    }else{

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
        preference,
        formType: "Set Preferences",
        errors
    })
}

const mdp = (dispatch,ownProps) => {

    return({
            createPreference: (preference) => dispatch(createPreference(preference)), 
            updatePreference: (preference) => dispatch(updatePreference(preference)),
            fetchRelevantOnePages: () => dispatch(fetchRelevantOnePages()),
            fetchPreference: (id) => dispatch(fetchPreference(id))
    })
}

export default withRouter(connect(msp, mdp)(PreferencesForm));