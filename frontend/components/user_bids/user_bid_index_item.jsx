import React from 'react';
import { Link } from 'react-router-dom';

class UserBidIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { bid, currentUser } = this.props;


    let zero = 0;
    let currBid = bid.topBid ? parseFloat(bid.topBid.bid).toFixed(2) : zero.toFixed(2);
    let minBid = bid.topBid ? (parseFloat(bid.topBid.bid) + 1.00).toFixed(2) : (zero + 1.00).toFixed(2);

    let CurrUserHighBid = "";
    let button;

    if (bid.topBid !== null){
      CurrUserHighBid = bid.topBid.user_id == currentUser.id ? "You have the current high bid!" : "";
    }

    button = bid.topBid.user_id == currentUser.id ? <button className="ub-disablebid-button" >New bid</button> : <Link to={`/bid/${bid.artistId}/${bid.postId}`}><button className="feed-bid-button" >New bid</button></Link>;

    return (
      <div>
        <div className="ub-main">

          <Link className="ub-post-contain" to={`/users/${bid.artistId}/${bid.postId}`}>
            <div className="post-hover" >
              <div className="up-post-cover"></div>
            </div>
            <img className="upPostImg" src={bid.imageThumb} />
          </Link>



          <div className="ub-bid-info">

            <div className="ub-artist-info" >
              <div className="b-name-contain">
                <div className="s-avatar-contain">
                  <Link to={`/users/${bid.artistId}`}>
                    <img className="s-artist-avatar" src={bid.avatarThumb} />
                  </Link>
                </div>
                <Link className='s-artist-name' to={`/users/${bid.artistId}`}>{bid.username}</Link>

              </div>

              <div className="curr-user-high-bid">
                <span className="curr-user-high-bid"> { CurrUserHighBid } </span>
              </div>


              <div className="bid-info">
                <div className="current-bid-contain">
                  <span className="current-bid-text">Current bid: </span>
                  <span className="current-bid">US ${currBid}</span>
                </div>

              </div>
              <div className="ub-button-contain">
                {button}
              </div>

            </div>

          </div>



        </div>
      </div>
    );
  }

}

export default UserBidIndexItem;
