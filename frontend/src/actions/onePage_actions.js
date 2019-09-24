import * as onePageAPIUtil from '../util/onePage_api_util';

export const RECEIVE_ONEPAGE = 'RECEIVE_ONEPAGE';
export const RECEIVE_ALL_ONEPAGES = 'RECEIVE_ALL_ONEPAGES';
export const RECEIVE_ONEPAGE_ERRORS = 'RECEIVE_ONEPAGE_ERRORS';

const receiveOnePage = onePage => ({
    type: RECEIVE_ONEPAGE,
    onePage: onePage.data
})
const receiveAllOnePages = onePages => ({
    type: RECEIVE_ALL_ONEPAGES,
    onePages: onePages.data
})

const receiveOnePageErrors = errors => ({
    type: RECEIVE_ONEPAGE_ERRORS,
    errors
})

export const fetchOnePage = id => dispatch => (
    onePageAPIUtil.fetchOnePage(id)
        .then(onePage => dispatch(receiveOnePage(onePage)))
        .catch(err => dispatch(receiveOnePageErrors(err.response.data)))
)

export const fetchAllOnePages = () => dispatch => (
    onePageAPIUtil.fetchAllOnePages()
        .then(onePages => dispatch(receiveAllOnePages(onePages)))
)
export const fetchrm = () => dispatch => (
    onePageAPIUtil.fetchrm()
        .then(onePages => dispatch(receiveAllOnePages(onePages)))
)

export const createOnePage = onePage => dispatch => (
    onePageAPIUtil.createOnePage(onePage)
        .then(onePage => dispatch(receiveOnePage(onePage)))
        .catch(err => dispatch(receiveOnePageErrors(err.response.data)))
)

export const updateOnePage = onePage => dispatch => {
    debugger
    // onepage has alot of errors and i think it is becaue reseeding needa to be done rfq
    return (
        onePageAPIUtil.updateOnePage(onePage)
        .then(onePage => dispatch(receiveOnePage(onePage)))
        .catch(err => dispatch(receiveOnePageErrors(err.response.data)))
    )
}

window.fetchOnePage = fetchOnePage;
window.createOnePage = createOnePage;
window.updateOnePage = updateOnePage;