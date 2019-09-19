import { RECEIVE_ONEPAGE_ERRORS } from "../actions/onePage_actions";
export default function (state = [], action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ONEPAGE_ERRORS:
            return action.errors;
        default:
            return state;
    }
