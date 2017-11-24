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

    let DeleteCommentButton;
    if (this.props.authorId === this.props.currentUserId || this.props.artistId === this.props.currentUserId) {
      DeleteCommentButton = <button onClick={this.handleDeleteComment} className="delete-comment" >x</button>;
    } else {
      DeleteCommentButton = <div></div>;
    }

    return (
      <div className="comment-contain">
        <Link className="author-name"
          to={`/users/${this.props.authorId}`}>{this.props.author}
        </Link>
        <span>{this.props.body}</span>
        {DeleteCommentButton}
      </div>
    );
  }

}



export default CommentIndexItem;
