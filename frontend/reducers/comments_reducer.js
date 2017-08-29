import { RECEIVE_FEED_POSTS, importFeedPosts } from '../actions/post_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

export const commentsReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_FEED_POSTS:
    if(action.posts.posts === undefined) {
      return {};
    } else {
      return action.posts.comments;
    }
    case RECEIVE_COMMENT:
      newState = merge({}, state, {[action.comment.id]: action.comment});
      return newState;
    default:
      return state;
  }
};
