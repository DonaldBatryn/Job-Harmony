import { RECEIVE_ONEPAGE, RECEIVE_ALL_ONEPAGES } from "../actions/onePage_actions";

export default function (state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_ONEPAGES:
            return Object.assign({}, action.onePages);
        case RECEIVE_ONEPAGE:
            return Object.assign({}, { [action.onePage._id]: action.onePage });
        default:
            return state;
    }
}