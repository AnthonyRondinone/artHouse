import React from 'react';
import { Link } from 'react-router-dom';
import HeartButton from './heart_button';
import CommentsContainer from '../comments/comments_container';
import CommentFormContainer from '../comments/comment_form_container';
import Moment from 'react-moment';

const FeedIndexItem = props => {

  if (props.imageOrig) {

    const {
      id,
      currentUserId,
      artistId,
      avatarThumb,
      username,
      imageOrig,
      createdAt,
      likerIds,
      liked,
      commentIds,
      caption,
      topBid,
      bidIds
    } = props;

    let like;
    let likeCount;
    if (likerIds === undefined) {
      likeCount = 0;
      like = " likes";
    } else {
      likeCount = likerIds.length;
      like = likerIds.length === 1 ? " like" : " likes";
    }

    let zero = 0;
    let currBid = topBid ? parseFloat(topBid.bid).toFixed(2) : zero.toFixed(2);

    let bidText = bidIds.length == 1 ? "bid" : "bids";

    let artistName = caption ? username : "";
    let dateTime = createdAt;

    return (
      <div>
        <div className="post" >
          <div className="artist-info" >
            <div className="avatar-contain">
              <Link
                to={`/users/${artistId}`}>
                <img className="artist-avatar" src={avatarThumb} />
              </Link>
            </div>
            <Link
              className='artist-name'
              to={`/users/${artistId}`}>{username}
            </Link>
          </div>

          <div className="post-image">
            <img className="image" src={props.imageOrig}/>
          </div>

          <div className="under-image" >
            <div className="f-button-contain" >

              <div className="f-like-comment-contain">
                <HeartButton className="heart"
                  addNewLike={props.addNewLike}
                  likerIds={likerIds}
                  postId={id}
                  currentUserId={currentUserId}
                  unLike={props.unLike}
                  />
                <button
                  onClick={() => {document.getElementById(`${id}`).focus();}}
                  className="comment-button" >
                  <i className="fa fa-comment-o fa-2x" aria-hidden="true"></i>
                </button>
              </div>

              <Link
                to={`/bid/${artistId}/${id}`}>
                <button
                className="feed-bid-button" >Place bid
                </button>
              </Link>
            </div>

          <div className="likes-bids">
            <div className="likes" >
              <span>{likeCount}</span>
              <span>{like}</span>
            </div>

            <div className="feed-bid-info">
              <span className="f-curr-bid">${currBid}</span>
              <span className="f-num-bids">{bidIds.length} {bidText}</span>
            </div>
          </div>

          <div className="post-caption" >
            <span className="author-name" >{artistName} </span>
            <span>{caption}</span>
          </div>

          <CommentsContainer commentIds={commentIds} artistId={artistId} />

          <div className="time-contain">
            <Moment className="post-time" fromNow>{dateTime}</Moment>
          </div>

          <CommentFormContainer artistId={artistId} postId={id} />
          </div>

        </div>

      </div>
    );
  } else {
    return (
      <div></div>
    );
  }


};


export default FeedIndexItem;
