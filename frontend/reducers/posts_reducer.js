import { RECEIVE_SINGLE_USER, RECEIVE_SUGGESTED_USERS } from '../actions/user_actions';
import { CLOSE_DELETE, OPEN_DELETE, RECEIVE_DELETED_POST, RECEIVE_NEW_POST, RECEIVE_FEED_POSTS, RECEIVE_POST_DETAIL } from '../actions/post_actions';
import { RECEIVE_COMMENT, RECEIVE_DELETE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, DELETE_LIKE } from '../actions/like_actions';
import { RECEIVE_BID } from '../actions/bid_actions';
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
    case RECEIVE_POST_DETAIL:
        newState = merge({}, state, {[action.post.post.id]: action.post.post});
        return newState;
    case RECEIVE_BID:
      newState = merge({}, state);
      newState[action.payload.post_id].bidIds.push(action.payload.bidId);
      newState[action.payload.post_id].topBid = action.payload;
      return newState;
    case RECEIVE_FEED_POSTS:
      if(action.posts.posts === undefined) return {};
      else return action.posts.posts;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.postId].commentIds.push(action.comment.id);
      return newState;
    case RECEIVE_DELETE_COMMENT:
      newState = merge( {}, state );
      let commentIndex = newState[action.comment.postId].commentIds.indexOf(action.comment.id);
      newState[action.comment.postId].commentIds.splice(commentIndex, 1);
      return newState;
    case RECEIVE_LIKE:
      newState = merge({}, state);
      newState[action.like.post_id].likerIds.push(action.like.user_id);
      return newState;
    case DELETE_LIKE:
      newState = merge({}, state);
      let index = newState[action.like.post_id].likerIds.indexOf(action.like.user_id);
      newState[action.like.post_id].likerIds.splice(index, 1);
    return newState;
    case RECEIVE_SUGGESTED_USERS:
      newState = action.payload.posts;
      return newState;
    case RECEIVE_DELETED_POST:
      newState = merge({}, state);
      delete newState[action.post.post.id];
      return newState;
    case OPEN_DELETE:
      newState = merge({}, state);
      newState[action.postId].deleteDropdown = 'open';
      return newState;
    case CLOSE_DELETE:
      newState = merge({}, state);
      newState[action.postId].deleteDropdown = 'closed';
      return newState;
    default:
    return state;
  }
};
