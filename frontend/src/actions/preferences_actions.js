import * as PreferenceAPIUtil from '../util/preferences_api_util';

export const RECEIVE_PREFERENCES = 'RECEIVE_PREFERENCES';
export const RECEIVE_PREFERENCES_ERRORS = 'RECEIVE_PREFERENCES_ERRORS';

const receivePreference = preference => ({
    type: RECEIVE_PREFERENCES,
    preference: preference.data
})

const receivePreferenceErrors = errors => ({
    type: RECEIVE_PREFERENCES_ERRORS,
    errors
})


export const createPreference = (preference) => dispatch => (
    PreferenceAPIUtil.createPreference(preference)
    .then(preference => dispatch(receivePreference(preference)))
    .catch(err => dispatch(receivePreferenceErrors(err.response.data)))
)

export const updatePreference = (preference) => dispatch => (
    PreferenceAPIUtil.updatePreference(preference)
    .then(preference => dispatch(receivePreference(preference)))
    .catch(err => dispatch(receivePreferenceErrors(err.response.data)))
)