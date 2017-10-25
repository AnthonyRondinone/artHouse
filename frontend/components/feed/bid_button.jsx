import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BidButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <button className="bid-button" >Place Bid</button>
    );
  }

}

export default withRouter(BidButton);
