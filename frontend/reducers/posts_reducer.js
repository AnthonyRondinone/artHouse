import { RECEIVE_SINGLE_USER, requestSingleUser } from '../actions/user_actions';
import { RECEIVE_NEW_POST, RECEIVE_FEED_POSTS, createNewPost, receiveNewPost, receiveFeedPosts, importFeedPosts } from '../actions/post_actions';
import { merge } from 'lodash';

export const postsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      newState = merge({}, state, action.posts);
      return newState;
    case RECEIVE_NEW_POST:
      newState = merge({}, state, {[action.post.id]: action.post});
      return newState;
    case RECEIVE_FEED_POSTS:
      return action.posts.posts;
    default:
    return state;
  }
};
