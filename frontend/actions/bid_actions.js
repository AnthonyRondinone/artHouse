export const RECEIVE_BID = "RECEIVE_BID";
export const RECEIVE_BID_ERRORS = "RECEIVE_BID_ERRORS";
export const CLEAR_BID_ERRORS = "CLEAR_BID_ERRORS";
import * as APIUtil from '../util/bid_api_util';


export const clearBidErrors = (errors) => {
  return {
    type: CLEAR_BID_ERRORS,
  };
};


export const receiveBidErrors = (errors) => {
  return {
    type: RECEIVE_BID_ERRORS,
    errors
  };
};


export const receiveBid = (bid) => {
  return {
    type: RECEIVE_BID,
    bid
  };
};

export const addBid = (bid) => (dispatch) => {
  return APIUtil.sendBid(bid)
  .then(
    (newBid) => dispatch(receiveBid(newBid)),
    (errors) => dispatch(receiveBidErrors(errors))
  );
};
