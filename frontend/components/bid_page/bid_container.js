import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addBid, clearBidErrors, clearBidMessage } from '../../actions/bid_actions';
import { actions } from '../../actions/bid_actions';
import { importPostDetail } from '../../actions/post_actions';
import PlaceBidForm from './place_bid_form';

const bidActions = actions;

const mapStateToProps = ( state, ownProps ) => {
  return {
    post: state.entities.posts,
    currentUser: state.session.currentUser,
    errors: state.errors,
    messages: state.messages
  };
};


const mapDispatchToProps = dispatch => {
  return {
    importPostDetail: (postId) => dispatch(importPostDetail(postId)),
    addBid: (bid) => dispatch(addBid(bid)),
    clearBidErrors: () => dispatch(bidActions.CLEAR_BID_ERRORS()),
    receiveBidMessage: () => dispatch(bidActions.RECEIVE_BID_MESSAGE()),
    clearBidMessage: () => dispatch(bidActions.CLEAR_BID_MESSAGE())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaceBidForm));
