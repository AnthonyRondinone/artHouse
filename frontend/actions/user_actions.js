export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_SUGGESTED_USERS = 'RECEIVE_SUGGESTED_USERS'
import * as APIUtil from '../util/user_api_util';


export const receiveSingleUser = ({user, posts}) => {
  return {
    type: 'RECEIVE_SINGLE_USER',
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

export const receiveSuggestedUsers = (users) => {
  return {
    type: RECEIVE_SUGGESTED_USERS,
    users
  }
}

export const suggestedUser = (users) => (dispatch) => {
  return APIUtil.fetchSuggestedUsers()
  .then(
    (users) => dispatch(receiveSuggestedUsers(users))
  );
};
