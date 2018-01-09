export const RECEIVE_BID = "RECEIVE_BID";
export const RECEIVE_BID_ERRORS = "RECEIVE_BID_ERRORS";
export const RECEIVE_BID_MESSAGE = "RECEIVE_BID_MESSAGE";
export const CLEAR_BID_MESSAGE = "CLEAR_BID_MESSAGE";
export const CLEAR_BID_ERRORS = "CLEAR_BID_ERRORS";
export const RECEIVE_USER_BIDS = "RECEIVE_USER_BIDS";
import * as APIUtil from '../util/bid_api_util';
import actionAndActionTypeCreator from './actionCreator';


export const { actions, actionTypes } = actionAndActionTypeCreator([
  "RECEIVE_BID_MESSAGE",
  "CLEAR_BID_MESSAGE",
  "CLEAR_BID_ERRORS",
  "RECEIVE_BID_ERRORS",
  "RECEIVE_BID",
  "RECEIVE_USER_BIDS"
]);

// export const receiveBidMessage = (message) => {
//   return {
//     type: RECEIVE_BID_MESSAGE
//   };
// };

// export const clearBidMessage = (message) => {
//   return {
//     type: CLEAR_BID_MESSAGE
//   };
// };


// export const clearBidErrors = (errors) => {
//   return {
//     type: CLEAR_BID_ERRORS,
//   };
// };


// export const receiveBidErrors = (errors) => {
//   return {
//     type: RECEIVE_BID_ERRORS,
//     errors
//   };
// };

// export const receiveBid = (bid) => {
//   return {
//     type: RECEIVE_BID,
//     bid
//   };
// };

export const addBid = (bid) => (dispatch) => {
  return APIUtil.sendBid(bid)
  .then(
    (newBid) => dispatch(actions.RECEIVE_BID(newBid)),
    (errors) => dispatch(actions.RECEIVE_BID_ERRORS(errors))
  );
};


// export const receiveUserBids = (bids) => {
//   return {
//     type: RECEIVE_USER_BIDS,
//     bids
//   };
// };

export const importUserBids = () => (dispatch) => {
  return APIUtil.fetchUserBids()
  .then(
    (bids) => dispatch(actions.RECEIVE_USER_BIDS(bids))
  );
};
