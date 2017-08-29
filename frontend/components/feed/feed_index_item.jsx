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
    const { id, artistId, avatar, username, image, createdAt, likeIds, liked, commentIds, caption} = this.props;

    let like = likeIds.length === 1 ? " like" : " likes";

    let artistName = caption ? username : "";
    let dateTime = createdAt;

    return (
      <div >

        <div className="post" >

          <div className="artist-info" >

            <div className="avatar-contain">
            <Link to={`/users/${artistId}`}><img className="artist-avatar" src={avatar} /></Link>
            </div>

            <Link className='artist-name' to={`/users/${artistId}`}>{username}</Link>
          </div>

          <div className="post-image">
            <img className="image" src={this.props.image}/>
          </div>

          <div className="under-image" >
            <div className="button-contain" >
              <HeartButton className="heart" liked={liked} />
              <button className="comment-button" ><img src={images.comment} /></button>
            </div>

            <div className="likes" >
              <span>{likeIds.length}</span>
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

            <CommentFormContainer postId={id} />
          </div>


        </div>

      </div>
    );
  }


}


export default FeedIndexItem;
