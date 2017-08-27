import * as APIUtil from '../util/follow_api_util';
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";

export const receiveFollow = (follow) => {
  debugger
  return {
    type: "RECEIVE_FOLLOW",
    follow
  };
};


export const addNewFollow = (follow) => (dispatch) => {
  debugger
  return APIUtil.addFollow(follow)
  .then(
    (newfollow) => {
      debugger
      dispatch(receiveFollow(newfollow));
    }
  );
};
