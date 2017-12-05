import React from 'react';
import HeartButton from '../feed/heart_button';
import { Link } from 'react-router-dom';
import CommentsContainer from '../comments/comments_container';
import CommentFormContainer from '../comments/comment_form_container';
import Moment from 'react-moment';
import DeletePostDropdown from '../delete_post/delete_post_container';
import DeleteButton from '../delete_post/delete_button';

class ImageDetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleCancelDeletePostClick = this.handleCancelDeletePostClick.bind(this);
  }


  componentDidMount() {
    this.props.importPostDetail(this.props.match.params.postId);
  }

  handleModalClose() {
    this.props.closeModal();
    this.handleCancelDeletePostClick();
    this.props.history.push(`/users/${this.props.posts[this.props.match.params.postId].artistId}`);
  }

  handleCancelDeletePostClick() {
    this.props.closeDelete(this.props.posts[this.props.match.params.postId].id);
  }

  render() {
    if(this.props.modal) {

      const {
        posts,
        comments,
        currentUser,
        deletePost,
        openDelete,
        closeDelete
      } = this.props;

      const post = posts[this.props.match.params.postId];

      let zero = 0;
      let currBid = post.topBid ? parseFloat(post.topBid.bid).toFixed(2) : zero.toFixed(2);

      let deleteModalBacking;
      if (post.deleteDropdown === 'open') {
        deleteModalBacking = <div
                    className="backing"
                    onClick={this.handleCancelDeletePostClick}
                    >
                  </div>;
      }

      return (
        <div>

          <DeletePostDropdown
            deleteDropdown={post.deleteDropdown}
            deletePost={deletePost}
            postId={post.id}
            closeDelete={closeDelete}
            currentUserId={currentUser.id}
          />

          <div className="modal-back" onClick={this.handleModalClose} ></div>
          <div className="modal-main" >
            <div className="s-post">
              {deleteModalBacking}
              <div className="s-image-left-contain">
                <div className="s-post-image">
                  <img className="s-image" src={post.imageOrig}/>
                </div>
              </div>

              <div className="s-info-right-contain">
                <div className="s-artist-info" >
                  <div className="artist-left" >
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

                    <DeleteButton
                      currentUserId={currentUser.id}
                      artistId={post.artistId}
                      openDelete={openDelete}
                      postId={post.id}
                    />

              </div>

                <div className="s-cap-comment-index" >
                  <div className="s-post-caption" >
                    <span
                      className="s-author-name" >
                      {post.caption ? post.username : ""}
                    </span>
                    <span>{post.caption}</span>
                  </div>
                  <CommentsContainer commentIds={post.commentIds} artistId={post.artistId} />
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
                      <span>{post.likerIds.length}</span>
                      <span>{post.likerIds.length === 1 ? " like" : " likes"}</span>
                    </div>

                    <div className="feed-bid-info">
                      <span className="f-curr-bid">${currBid}</span>
                      <span
                        className="f-num-bids"
                        >{post.bidIds.length} {post.bidIds.length == 1 ? "bid" : "bids"}
                      </span>
                    </div>

                  </div>

                  <div className="s-time-contain">
                    <Moment
                      className="s-post-time"
                      fromNow>{post.createdAt}
                    </Moment>
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
