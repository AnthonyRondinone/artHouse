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

    return (
      <div className="ub-index">
        { userBidIndexItems }
      </div>
    );
  }
}

export default UserBidIndex;
