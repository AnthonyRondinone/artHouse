import { RECEIVE_BID_MESSAGE, CLEAR_BID_MESSAGE } from '../actions/bid_actions';
import { merge } from 'lodash';


export const MessageReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BID_MESSAGE:
      return ["Thank you for your bid"];
    case CLEAR_BID_MESSAGE:
      return [];
    default:
      return state;
  }
};
