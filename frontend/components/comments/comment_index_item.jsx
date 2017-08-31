import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.commentId);
  }

  render() {
    return (
      <div className="comment-contain">
        <Link className="author-name" to={`/users/${this.props.authorId}`}>{this.props.author} </Link>
        <span>{this.props.body}</span>
        <button onClick={this.handleDeleteComment} className="delete-comment" >x</button>
      </div>
    );
  }

}



export default CommentIndexItem;
