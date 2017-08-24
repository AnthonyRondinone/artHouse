export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const receiveSingleUser = ({user, posts}) => {
  return {
    type: 'RECEIVE_SINGLE_USER',
    user,
    posts
  };
};

export const requestSingleUser = (user) => (dispatch) => {
  return fetchSingleUser(user)
  .then(
    (payload) => dispatch(receiveSingleUser(payload))
  );
};
