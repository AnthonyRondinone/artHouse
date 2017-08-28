import { RECEIVE_FEED_POSTS, receiveFeedPosts, importFeedPosts } from '../actions/post_actions';
import { merge } from 'lodash';

export const commentsReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_FEED_POSTS:
      return action.posts.comments;
    default:
      return state;
  }
};
