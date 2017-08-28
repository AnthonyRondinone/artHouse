export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';

export const receiveNewPost = (post) => {
  return {
    type: 'RECEIVE_NEW_POST',
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
    (post) => dispatch(receiveNewPost(post))
  );
};

export const receiveFeedPosts = (posts) => {
  return {
    type: 'RECEIVE_FEED_POSTS',
    posts
  };
};

export const importFeedPosts = (posts) => (dispatch) => {
  return fetchAllFolloweePosts()
  .then(
    (posts) => dispatch(receiveFeedPosts(posts))
  );
};
