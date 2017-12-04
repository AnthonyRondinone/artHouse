import { RECEIVE_SINGLE_USER, RECEIVE_SUGGESTED_USERS, RECEIVE_UPDATED_USER_AVATAR, RECEIVE_UPDATED_USER } from '../actions/user_actions';
import { RECEIVE_FOLLOW, DELETE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_DELETED_POST } from '../actions/post_actions';
import { merge } from 'lodash';

export const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      newState = {[action.user.id]: action.user};
      return newState;
    case RECEIVE_FOLLOW:
      newState = merge({}, state);
      newState[action.follow.followee_id].followerIds.push(action.follow.follower_id);
      return newState;
    case DELETE_FOLLOW:
      newState = merge({}, state);
      let index = newState[action.follow.followee_id].followerIds.indexOf(action.follow.follower_id);
      newState[action.follow.followee_id].followerIds.splice(index, 1);
      return newState;
    case RECEIVE_SUGGESTED_USERS:
      newState = action.payload.user;
      return newState;
    case RECEIVE_UPDATED_USER_AVATAR:
      newState = merge({}, state);
      newState[action.user.id].avatarOrig = action.user.avatarOrig;
      return newState;
    case RECEIVE_UPDATED_USER:
      newState = merge({}, state);
      newState = {[action.user.id]: action.user};
      return newState;
    case RECEIVE_DELETED_POST:
      newState = merge({}, state);
      if(newState[action.post.post.artistId]) {
        let postIndex = newState[action.post.post.artistId].postIds.indexOf(action.post.post.id);
        newState[action.post.post.artistId].postIds.splice(postIndex, 1);
      }
      return newState;
    default:
      return state;
  }
};
