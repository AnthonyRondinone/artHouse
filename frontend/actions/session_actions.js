export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

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
  return requestLogin(user)
  .then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const logout = () => (dispatch) => {
  return requestLogout()
  .then(
    () => dispatch(receiveCurrentUser(null))
  );
};

export const signup = (user) => (dispatch) => {
  return requestSignUp(user)
  .then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  );
};
