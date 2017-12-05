import React from 'react';
import { Link } from 'react-router-dom';
import HeartButton from './heart_button';
import DeleteButton from '../delete_post/delete_button';
import CommentsContainer from '../comments/comments_container';
import DeletePostDropdown from '../delete_post/delete_post_container';
import CommentFormContainer from '../comments/comment_form_container';
import Moment from 'react-moment';
import PlaceBidButton from '../bid_page/place_bid_button';

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
      bidIds,
      openDelete,
      deleteDropdown,
      deletePost,
      closeDelete
    } = props;

    let zero = 0;
    let currBid = topBid ? parseFloat(topBid.bid).toFixed(2) : zero.toFixed(2);

    return (
      <div>
        <DeletePostDropdown
          deleteDropdown={deleteDropdown}
          deletePost={deletePost}
          postId={id}
          closeDelete={closeDelete}
          currentUserId={currentUserId}
        />

        <div className="post" >

          <div className="artist-info" >
            <div className="artist-left" >
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

            <DeleteButton
              currentUserId={currentUserId}
              artistId={artistId}
              openDelete={openDelete}
              postId={id}
            />

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

              <PlaceBidButton
                topBid={topBid}
                currentUserId={currentUserId}
                artistId={artistId}
                postId={id}
              />

            </div>

          <div className="likes-bids">
            <div className="likes" >
              <span>{ likerIds.length}</span>
              <span>{likerIds.length === 1 ? " like" : " likes"}</span>
            </div>

            <div className="feed-bid-info">
              <span className="f-curr-bid">${currBid}</span>
              <span
                className="f-num-bids"
                >{bidIds.length} {bidIds.length == 1 ? "bid" : "bids"}
              </span>
            </div>
          </div>

          <div className="post-caption" >
            <span className="author-name" >{caption ? username : ""} </span>
            <span>{caption}</span>
          </div>

          <CommentsContainer commentIds={commentIds} artistId={artistId} />

          <div className="time-contain">
            <Moment
              className="post-time"
              fromNow>{createdAt}
            </Moment>
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
