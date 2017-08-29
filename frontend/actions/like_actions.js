import * as APIUtil from '../util/like_api_util';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';


export const recieveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};



export const addNewLike = (like) => (dispatch) => {
  return APIUtil.addLike(like)
  .then(
    (newLike) => dispatch(recieveLike(newLike))
  );
};


export const deleteLike = (like) => {
  return {
    type: DELETE_LIKE,
    like
  };
};

export const unLike = (likeIds) => (dispatch) => {
  return APIUtil.removeLike(likeIds)
  .then(
    (oldLike) => dispatch(deleteLike(oldLike))
  );
};
