import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserBidIndex from './user_bid_index';
import {importUserBids} from '../../actions/bid_actions';
import { selectUserBids } from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps ) => {
  return {
    bids: selectUserBids(state),
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = dispatch => {
  return {
    importUserBids: () => dispatch(importUserBids())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserBidIndex));
