import * as onePageAPIUtil from '../util/onePage_api_util';
export const RECEIVE_NEW_MAIN = "RECEIVE_NEW_MAIN";
export const RECEIVE_ONEPAGE = 'RECEIVE_ONEPAGE';
export const RECEIVE_ALL_ONEPAGES = 'RECEIVE_ALL_ONEPAGES';
export const RECEIVE_ONEPAGE_ERRORS = 'RECEIVE_ONEPAGE_ERRORS';

export const receiveNewMain = onePage => ({
  type: RECEIVE_NEW_MAIN,
  onePage: onePage
})

const receiveOnePage = onePage => ({
    type: RECEIVE_ONEPAGE,
    onePage: onePage.data
})
const receiveAllOnePages = onePages => {
    return ({
        type: RECEIVE_ALL_ONEPAGES,
        onePages: onePages.data
    })
}

const receiveOnePageErrors = errors => ({
    type: RECEIVE_ONEPAGE_ERRORS,
    errors
})

export const fetchOnePage = id => dispatch => (
    onePageAPIUtil.fetchOnePage(id)
        .then(onePage => dispatch(receiveOnePage(onePage)))
        // .catch(err => dispatch(receiveOnePageErrors(err.response.data)))
)

export const fetchAllOnePages = () => dispatch => (
    onePageAPIUtil.fetchAllOnePages()
        .then(onePages => dispatch(receiveAllOnePages(onePages)))
)
export const fetchRelevantOnePages = () => dispatch => (
    onePageAPIUtil.fetchRelevantOnePages()
        .then(onePages => dispatch(receiveAllOnePages(onePages)))
)

export const createOnePage = onePage => dispatch => (
    onePageAPIUtil.createOnePage(onePage)
        .then(onePage => dispatch(receiveOnePage(onePage)))
        .catch(err => dispatch(receiveOnePageErrors(err.response.data)))
)
 
export const updateOnePage = onePage => dispatch => {
    // onepage has alot of errors and i think it is becaue reseeding needa to be done rfq
    return (
        onePageAPIUtil.updateOnePage(onePage)
        .then(onePage => dispatch(receiveOnePage(onePage)))
        .catch(err => dispatch(receiveOnePageErrors(err.response.data)))
    )
}
