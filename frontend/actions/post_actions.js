export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const RECEIVE_FEED_POSTS = 'RECEIVE_FEED_POSTS';
export const RECEIVE_POST_DETAIL = 'RECEIVE_POST_DETAIL';
export const RECEIVE_DELETED_POST = 'RECEIVE_DELETED_POST';
export const OPEN_DELETE = 'OPEN_DELETE';
export const CLOSE_DELETE = 'CLOSE_DELETE';
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
  return APIUtil.sendNewPost(post)
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

export const importFeedPosts = () => (dispatch) => {
  return APIUtil.fetchAllFolloweePosts()
  .then(
    (payload) => dispatch(receiveFeedPosts(payload))
  );
};

export const receivePostDetail = (post) => {
  return {
    type: RECEIVE_POST_DETAIL,
    post
  };
};

export const importPostDetail = ( postId ) => (dispatch) => {
  return APIUtil.fetchSinglePost(postId)
  .then(
    (postDetail) => dispatch(receivePostDetail(postDetail))
  );
};

export const receiveDeletedPost = (post) => {
  return {
    type: RECEIVE_DELETED_POST,
    post
  };
};

export const deletePost = (postId) => (dispatch) => {
  return APIUtil.removePost(postId)
  .then(
    (oldPost) => dispatch(receiveDeletedPost(oldPost))
  );
};

export const openDelete = (postId) => {
  return {
    type: OPEN_DELETE,
    postId
  };
};

export const closeDelete = (postId) => {
  return {
    type: CLOSE_DELETE,
    postId
  };
};
