import { RECEIVE_SINGLE_USER, RECEIVE_SUGGESTED_USERS } from '../actions/user_actions';
import { RECEIVE_FOLLOW, addNewFollow, DELETE_FOLLOW, unFollow } from '../actions/follow_actions';
import { merge } from 'lodash';

export const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  // debugger
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
    default:
    return state;
  }
};
