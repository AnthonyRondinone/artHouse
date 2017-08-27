import { RECEIVE_SINGLE_USER, requestSingleUser } from '../actions/user_actions';
import { RECEIVE_FOLLOW, addNewFollow } from '../actions/follow_actions';
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
    debugger
      newState = merge({}, state);
      newState[action.follow.followee_id].followerIds.push(action.follow.follower_id);
      return newState;
    default:
    return state;
  }
};
