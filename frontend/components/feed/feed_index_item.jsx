import React from 'react';
import { Link } from 'react-router-dom';
import HeartButton from './heart_button';
import CommentsContainer from '../comments/comments_container';
import CommentFormContainer from '../comments/comment_form_container';
import Moment from 'react-moment';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { id, currentUserId, artistId, avatarThumb, username, imageOrig, createdAt, likerIds, liked, commentIds, caption} = this.props;

    let like;
    let likeCount;
    if (likerIds === undefined) {
      likeCount = 0;
      like = " likes";
    } else {
      likeCount = likerIds.length;
      like = likerIds.length === 1 ? " like" : " likes";
    }


    let artistName = caption ? username : "";
    let dateTime = createdAt;

    return (
      <div>

        <div className="post" >

          <div className="artist-info" >

            <div className="avatar-contain">
            <Link to={`/users/${artistId}`}><img className="artist-avatar" src={avatarThumb} /></Link>
            </div>

            <Link className='artist-name' to={`/users/${artistId}`}>{username}</Link>
          </div>

          <div className="post-image">
            <img className="image" src={this.props.imageOrig}/>
          </div>

          <div className="under-image" >
            <div className="button-contain" >
              <HeartButton className="heart"
                addNewLike={this.props.addNewLike}
                likerIds={likerIds}
                postId={id}
                currentUserId={currentUserId}
                unLike={this.props.unLike}
              />

              <button onClick={() => {document.getElementById(`${id}`).focus();}}
                className="comment-button" ><i className="fa fa-comment-o fa-2x" aria-hidden="true"></i>
              </button>

            </div>

            <div className="likes" >
              <span>{likeCount}</span>
              <span>{like}</span>
            </div>

            <div className="post-caption" >
              <span className="author-name" >{artistName} </span>
              <span>{caption}</span>
            </div>

            <CommentsContainer commentIds={commentIds} />

            <div className="time-contain">
              <Moment className="post-time" fromNow>{dateTime}</Moment>
            </div>

            <CommentFormContainer artistId={artistId} postId={id} />
          </div>


        </div>

      </div>
    );
  }


}


export default FeedIndexItem;
