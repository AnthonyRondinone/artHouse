export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_SUGGESTED_USERS = 'RECEIVE_SUGGESTED_USERS';
export const RECEIVE_UPDATED_USER_AVATAR = 'RECEIVE_UPDATED_USER_AVATAR';
import * as APIUtil from '../util/user_api_util';


export const receiveSingleUser = ({user, posts}) => {
  return {
    type: RECEIVE_SINGLE_USER,
    user,
    posts
  };
};

export const requestSingleUser = (user) => (dispatch) => {
  return APIUtil.fetchSingleUser(user)
  .then(
    (payload) => dispatch(receiveSingleUser(payload))
  );
};

export const receiveSuggestedUsers = (payload) => {
  return {
    type: RECEIVE_SUGGESTED_USERS,
    payload
  }
}

export const suggestedUser = (users) => (dispatch) => {
  return APIUtil.fetchSuggestedUsers()
  .then(
    (payload) => dispatch(receiveSuggestedUsers(payload))
  );
};

export const receiveUpdatedUserAvatar = ( { user, posts } ) => {
  return {
    type: RECEIVE_UPDATED_USER_AVATAR,
    user,
    posts
  };
};

export const updateUserAvatar = ( userInfo, userId ) => ( dispatch ) => {
  return APIUtil.updateUserInfo( userInfo, userId )
  .then(
    (user) => dispatch(receiveUpdatedUserAvatar(user))
  );
};
