import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="comment-contain">
        <Link className="author-name" to={`/users/${this.props.authorId}`}>{this.props.author} </Link>
        <span>{this.props.body}</span>
      </div>
    );
  }

}



export default CommentIndexItem;
