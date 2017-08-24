import { RECEIVE_SINGLE_USER, requestSingleUser } from '../actions/user_actions';
import { merge } from 'lodash';

export const postsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      newState = merge({}, state, action.posts);
      return newState;
    default:
    return state;
  }
};
