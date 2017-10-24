export const RECEIVE_BID = "RECEIVE_BID";
import * as APIUtil from '../util/bid_api_util';

export const receiveBid = (bid) => {
  return {
    type: RECEIVE_BID,
    bid
  };
};

export const addBid = (bid) => (dispatch) => {
  return APIUtil.sendBid(bid)
  .then(
    (newBid) => dispatch(receiveBid(newBid))
  );
};
