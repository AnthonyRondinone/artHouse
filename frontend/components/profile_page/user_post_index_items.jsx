import React from 'react';
import { Link } from 'react-router-dom';

const UserPostIndexItem = props => {

  if (props.post.likerIds) {
    return (
      <Link
        className="upPostContain"
        to={`/users/${props.userId}/${props.postId}`}>
        <div className="post-hover" >
          <div className="like-comment-contain" >

            <div className="count-contain">
              <div className="count-cover" >{props.post.commentCount}</div>
              <img src={images.commentWhite}/>
            </div>

            <div className="count-contain">
              <div className="count-cover" >{props.post.likerIds.length}</div>
              <img src={images.heartWhite}/>
            </div>

          </div>

          <div className="up-post-cover"></div>
        </div>

        <img className="upPostImg" src={props.imageThumb} />
      </Link>
    );
  } else {
    return null;
  }
};

export default UserPostIndexItem;
