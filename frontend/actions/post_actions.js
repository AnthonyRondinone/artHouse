export const NEW_POST = 'NEW_POST';

export const addNewPost = (post) => {
  return {
    type: 'NEW_POST',
    post
  };
};

export const receivePostErrors = (errors) => {
  return {
    type: 'RECEIVE_POST_ERRORS',
    errors
  };
};

export const createNewPost = ( post ) => (dispatch) => {
  return sendNewPost(post)
  .then(
    (post) => dispatch(addNewPost(post))
  );
};
