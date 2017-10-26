import { RECEIVE_BID_ERRORS, CLEAR_BID_ERRORS } from '../actions/bid_actions';
import { merge } from 'lodash';


export const ErrorReducer = ( state = [], action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BID_ERRORS:
      return action.errors;
    case CLEAR_BID_ERRORS:
      return [];
    default:
      return state;
  }
};
