import React from 'react';
import UserBidIndexItem from './user_bid_index_item';

class UserBidIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.importUserBids();
  }

  render() {

    const { bids, currentUser } = this.props;

    const userBidIndexItems = bids.map((bid) => <UserBidIndexItem
    bid={bid}
    key={bid.id}
    currentUser={currentUser}
    />);

    if (bids.length > 0) {
      return (
        <div className="ub-index">
          { userBidIndexItems }
        </div>
      );
    } else {
      return (
        <div className="ub-index">
          <h2 className="no-bids">You are not bidding on any items</h2>
        </div>
      );
    }
  }
}

export default UserBidIndex;
