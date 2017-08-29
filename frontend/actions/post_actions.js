export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const RECEIVE_FEED_POSTS = 'RECEIVE_FEED_POSTS';
import * as APIUtil from '../util/post_api_util';

export const receiveNewPost = (post) => {
  return {
    type: 'RECEIVE_NEW_POST',
    post
  };
};

export const receivePostErrors = (errors) => {
  return {
    type: RECEIVE_POST_ERRORS,
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
    type: RECEIVE_FEED_POSTS,
    posts
  };
};

export const importFeedPosts = (payload) => (dispatch) => {
  return APIUtil.fetchAllFolloweePosts()
  .then(
    (payload) => dispatch(receiveFeedPosts(payload))
  );
};
