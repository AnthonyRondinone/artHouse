import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addBid } from '../../actions/bid_actions';
import { importPostDetail } from '../../actions/post_actions';
import PlaceBidForm from './place_bid_form';


const mapStateToProps = ( state, ownProps ) => {
  return {
    post: state.entities.posts,
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = dispatch => {
  return {
    importPostDetail: (postId) => dispatch(importPostDetail(postId)),
    addBid: (bid) => dispatch(addBid(bid))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaceBidForm));
