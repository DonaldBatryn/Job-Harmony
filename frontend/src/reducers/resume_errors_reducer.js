import { RECEIVE_RESUME_ERRORS } from "../actions/resume_actions";

export default function (state = [], action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESUME_ERRORS:
            return action.errors;
        default:
            return state;
    }
}