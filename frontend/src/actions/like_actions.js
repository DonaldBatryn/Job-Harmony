import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';



const receiveAllLikes = likes => {
    debugger
    return ({
        type: RECEIVE_ALL_LIKES,
        likes: likes.data
    })
}

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like: like.data
})




export const fetchLike = (id) => dispatch => (
    LikeAPIUtil.fetchLike(id).then(like => dispatch(receiveLike(like)))
)

export const createLike = like => dispatch => (
    LikeAPIUtil.createLike(like).then(like => dispatch(receiveLike(like)))

)

export const fetchLikes = () => dispatch => (
    LikeAPIUtil.fetchLikes().then(likes => dispatch(receiveAllLikes(likes)))
)