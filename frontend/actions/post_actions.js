export const SEND_NEW_POST = 'CREATE_NEW_POST';

export const sendNewPost = (post) => {
  return {
    type: 'CREATE_NEW_POST',
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
    (post) => dispatch(sendNewPost(post)),
    (errors) => dispatch(receivePostErrors(errors))
  );
};
