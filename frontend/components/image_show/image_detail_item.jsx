import React from 'react';
import HeartButton from '../feed/heart_button';
import { Link } from 'react-router-dom';
import CommentsContainer from '../comments/comments_container';
import CommentFormContainer from '../comments/comment_form_container';
import Moment from 'react-moment';
import { closeModal } from '../../actions/modal_actions';

class ImageDetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  componentDidMount() {
    this.props.importPostDetail(this.props.match.params.postId);
  }

  handleModalClose() {
    dispatch(closeModal()).then(() => this.props.history.push(`/users/${this.props.match.params.userId}`));
  }

  render() {
    // debugger

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


      let artistName = post.caption ? username : "";
      let dateTime = post.createdAt;

      return (
        <div className="modal-back" onClick={this.handleModalClose} >

          <div className="s-post" onClick={(e) => e.stopPropagation()}>

            <div className="s-artist-info" >

              <div className="s-avatar-contain">
                <Link to={`/users/${post.artistId}`}><img className="s-artist-avatar" src={post.avatar} /></Link>
              </div>

              <Link className='s-artist-name' to={`/users/${post.artistId}`}>{post.username}</Link>
            </div>

            <div className="s-post-image">
              <img className="s-image" src={post.image_url}/>
            </div>

            <div className="s-under-image" >
              <div className="s-button-contain" >
                <HeartButton className="s-heart"
                  addNewLike={this.props.addNewLike}
                  likerIds={post.likerIds}
                  postId={post.id}
                  currentUserId={currentUser.id}
                  unLike={this.props.unLike}
                  />
                <button className="s-comment-button" ><i className="fa s-fa-comment-o fa-2x" aria-hidden="true"></i></button>
              </div>

              <div className="s-likes" >
                <span>{likeCount}</span>
                <span>{like}</span>
              </div>

              <div className="s-post-caption" >
                <span className="s-author-name" >{post.username} </span>
                <span>{post.caption}</span>
              </div>

              <CommentsContainer commentIds={post.commentIds} />

              <div className="s-time-contain">
                <Moment className="s-post-time" fromNow>{dateTime}</Moment>
              </div>

              <CommentFormContainer postId={post.id} />
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
