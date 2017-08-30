import React from 'react';
import HeartButton from '../feed/heart_button';
import { Link } from 'react-router-dom';
import CommentsContainer from '../comments/comments_container';
import CommentFormContainer from '../comments/comment_form_container';
import Moment from 'react-moment';

class ImageDetailItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.importPostDetail(this.props.match.params.postId);
  }

  render() {
    debugger
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
      <div >

        <div className="post" >

          <div className="artist-info" >

            <div className="avatar-contain">
            <Link to={`/users/${post.artistId}`}><img className="artist-avatar" src={post.avatar} /></Link>
            </div>

            <Link className='artist-name' to={`/users/${post.artistId}`}>{post.username}</Link>
          </div>

          <div className="post-image">
            <img className="image" src={post.image_url}/>
          </div>

          <div className="under-image" >
            <div className="button-contain" >
              <HeartButton className="heart"
                addNewLike={this.props.addNewLike}
                likerIds={post.likerIds}
                postId={post.id}
                currentUserId={currentUser.id}
                unLike={this.props.unLike}
              />
              <button className="comment-button" ><i className="fa fa-comment-o fa-2x" aria-hidden="true"></i></button>
            </div>

            <div className="likes" >
              <span>{likeCount}</span>
              <span>{like}</span>
            </div>

            <div className="post-caption" >
              <span className="author-name" >{post.username} </span>
              <span>{post.caption}</span>
            </div>

            <CommentsContainer commentIds={post.commentIds} />

            <div className="time-contain">
              <Moment className="post-time" fromNow>{dateTime}</Moment>
            </div>

            <CommentFormContainer postId={post.id} />
          </div>


        </div>

      </div>
    );
  }


}

export default ImageDetailItem;
