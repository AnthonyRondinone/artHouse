import { RECEIVE_USER_BIDS } from '../actions/bid_actions';
import { merge } from 'lodash';

export const bidsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_USER_BIDS:
      newState = action.bids;
      return newState;
    default:
      return state;
  }
};
