import * as preferenceAPIUtil from '../util/preference_api_util';

export const RECEIVE_PREFERENCE = 'RECEIVE_PREFERENCE';

const receivePreference = pref => ({
  type: RECEIVE_PREFERENCE,
  preference: pref.data
})

export const createPreference = pref => dispatch => (
  preferenceAPIUtil.createPreference(pref)
    .then(pref => dispatch(receivePreference(pref)))
)

export const updatePreference = pref => dispatch => {
  return (
    preferenceAPIUtil.updatePreference(pref)
      .then(pref => dispatch(receivePreference(pref)))
  )
}
