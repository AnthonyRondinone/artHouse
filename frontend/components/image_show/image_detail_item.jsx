import React from 'react';
import HeartButton from '../feed/heart_button';
import { Link } from 'react-router-dom';
import CommentsContainer from '../comments/comments_container';
import CommentFormContainer from '../comments/comment_form_container';
import Moment from 'react-moment';

class ImageDetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalClose = this.handleModalClose.bind(this);
  }


  componentDidMount() {
    this.props.importPostDetail(this.props.match.params.postId);
  }

  handleModalClose() {
    this.props.closeModal();
    this.props.history.push(`/users/${this.props.posts[this.props.match.params.postId].artistId}`);
  }

  render() {

    if(this.props.modal) {


      const { posts, comments, currentUser } = this.props;

      const post = posts[this.props.match.params.postId];


      let like;
      let likeCount;
      if (post.likerIds === undefined) {
        likeCount = 0;
        like = " likes";
      } else {
        likeCount = post.likerIds.length;
        like = post.likerIds.length === 1 ? " like" : " likes";
      }

      let zero = 0;
      let currBid = post.topBid ? parseFloat(post.topBid.bid).toFixed(2) : zero.toFixed(2);

      let bidText = post.bidIds.length == 1 ? "bid" : "bids";


      let artistName = post.caption ? post.username : "";
      let dateTime = post.createdAt;

      return (

        <div>

          <div className="modal-back" onClick={this.handleModalClose} ></div>

          <div className="modal-main" >
            <div className="s-post">

              <div className="s-image-left-contain">
                <div className="s-post-image">
                  <img className="s-image" src={post.imageOrig}/>
                </div>
              </div>

              <div className="s-info-right-contain">
                <div className="s-artist-info" >
                  <div className="s-avatar-contain">
                    <Link to={`/users/${post.artistId}`}>
                      <img className="s-artist-avatar" src={post.avatarThumb} />
                    </Link>
                  </div>

                  <Link
                    className='s-artist-name'
                    to={`/users/${post.artistId}`}>{post.username}
                  </Link>
                </div>

                <div className="s-cap-comment-index" >
                  <div className="s-post-caption" >
                    <span className="s-author-name" >{artistName} </span>
                    <span>{post.caption}</span>
                  </div>
                  <CommentsContainer commentIds={post.commentIds} />
                </div>

                <div className="s-under-image" >
                  <div className="s-button-contain" >

                    <div className="f-like-comment-contain">
                      <HeartButton className="s-heart"
                        addNewLike={this.props.addNewLike}
                        likerIds={post.likerIds}
                        postId={post.id}
                        currentUserId={currentUser.id}
                        unLike={this.props.unLike}
                      />
                      <button
                        onClick={() => {document.getElementById(`${post.id}`).focus();}}
                        className="s-comment-button" >
                        <i className="fa fa-comment-o fa-2x" aria-hidden="true"></i>
                      </button>
                    </div>

                    <Link
                      to={`/bid/${post.artistId}/${post.id}`}>
                      <button className="feed-bid-button" >Place bid</button>
                    </Link>

                  </div>

                  <div className="likes-bids">

                    <div className="s-likes" >
                      <span>{likeCount}</span>
                      <span>{like}</span>
                    </div>

                    <div className="feed-bid-info">
                      <span className="f-curr-bid">${currBid}</span>
                      <span className="f-num-bids">{post.bidIds.length} {bidText}</span>
                    </div>

                  </div>

                  <div className="s-time-contain">
                    <Moment className="s-post-time" fromNow>{dateTime}</Moment>
                  </div>

                  <div className="s-comment-form" >
                    <CommentFormContainer postId={post.id} />
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>

      );

    } else {
      return (
        <div></div>
      );
    }

  }


}

export default ImageDetailItem;
