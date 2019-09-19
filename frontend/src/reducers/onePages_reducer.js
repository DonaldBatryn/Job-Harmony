import { RECEIVE_ONEPAGE } from "../actions/onePage_actions";

export default function (state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ONEPAGE:
            return Object.assign({}, { [action.onePage._id]: action.onePage });
        default:
            return state;
    }
}