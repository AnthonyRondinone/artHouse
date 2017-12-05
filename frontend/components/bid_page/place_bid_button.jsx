import React from 'react';
import { Link } from 'react-router-dom';


const PlaceBidButton = props => {

  const {
    topBid,
    currentUserId,
    artistId,
    postId
    } = props;


  if (topBid !== null && topBid.user_id == currentUserId){
    return (
      <button
        className="feed-bid-button disablebid" >Thank you
      </button>
    );
  } else {
    return (
      <Link
        to={`/bid/${artistId}/${postId}`}>
        <button
        className="feed-bid-button" >Place bid
        </button>
      </Link>
    );

  }
};

export default PlaceBidButton;
