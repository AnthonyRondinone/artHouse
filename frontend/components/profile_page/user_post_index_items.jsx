import React from 'react';
import { Link } from 'react-router-dom';

class UserPostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Link className="upPostContain" to={`/post/${this.props.postId}`}>
          <div className="post-hover" >
            <div className="like-comment-contain" >
              <div className="count-contain">
                <div className="count-cover" >{this.props.post.commentIds.length}</div>
                <img src={images.commentWhite}/>
              </div>
              <div className="count-contain">
                <div className="count-cover" >{this.props.post.likerIds.length}</div>
                <img src={images.heartWhite}/>
              </div>

            </div>
            <div className="up-post-cover"></div>
          </div>
          <img className="upPostImg" src={this.props.imageThumb} />
        </Link>

    );
  }

}



export default UserPostIndexItem;
