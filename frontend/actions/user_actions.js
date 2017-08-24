export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const receiveSingleUser = (user) => {
  return {
    type: 'RECEIVE_SINGLE_USER',
    user
  };
};

export const requestSingleUser = (user) => (dispatch) => {
  return fetchSingleUser(user)
  .then(
    (payload) => dispatch(receiveSingleUser(payload.user))
  );
};
