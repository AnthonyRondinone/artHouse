export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: 'RECEIVE_CURRENT_USER',
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: 'RECEIVE_ERRORS',
    errors
  };
};

export const clearErrors = (errors) => {
  return {
    type: 'CLEAR_ERRORS',
  };
};



export const login = (user) => (dispatch) => {
  return APIUtil.requestLogin(user)
  .then(
    (payload) => dispatch(receiveCurrentUser(payload.user)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.requestLogout()
  .then(
    () => dispatch(receiveCurrentUser(null))
  );
};

export const signup = (user) => (dispatch) => {
  return APIUtil.requestSignUp(user)
  .then(
    (payload) => dispatch(receiveCurrentUser(payload.user)),
    (errors) => dispatch(receiveErrors(errors))
  );
};
