import * as APIUtil from '../util/follow_api_util';
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const DELETE_FOLLOW = 'DELETE_FOLLOW';



export const receiveFollow = (follow) => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
};


export const addNewFollow = (follow) => (dispatch) => {
  return APIUtil.addFollow(follow)
  .then(
    (newFollow) => dispatch(receiveFollow(newFollow))
  );
};


export const deleteFollow = (follow) => {
  return {
    type: DELETE_FOLLOW,
    follow
  };
};

export const unFollow = (followId) => (dispatch) => {
  return APIUtil.removeFollow(followId)
  .then(
    (oldFollow) => dispatch(deleteFollow(oldFollow))
  );
};
