export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
import * as APIUtil from '../util/comment_api_util';


export const receiveComment = (comment) =>  {
  return {
    type: "RECEIVE_COMMENT",
    comment
  };
};


export const addComment = (comment) => (dispatch) => {
  return APIUtil.sendComment(comment)
  .then(
    (newComment) => dispatch(receiveComment(newComment))
  );
};

export const receiveDeleteComment = (commentId) => {
  return {
    type: RECEIVE_DELETE_COMMENT,
    comment
  };
};


export const deleteComment = (commentId) => (dispatch) => {
  return APIUtil.sendComment(commentId)
  .then(
    (oldComment) => dispatch(receiveComment(oldComment))
  );
};
