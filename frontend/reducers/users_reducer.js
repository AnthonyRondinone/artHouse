import { RECEIVE_SINGLE_USER, requestSingleUser } from '../actions/user_actions';
import { merge } from 'lodash';

export const usersReducer = ( state = {}, action ) => {
  debugger
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      debugger
      return state;
    default:
    return state;
  }
};
