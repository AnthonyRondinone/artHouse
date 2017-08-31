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

    let visibleDeleteButton;
    if (this.props.authorId === this.props.currentUserId || this.props.artistId === this.props.currentUserId) {
      visibleDeleteButton = <button onClick={this.handleDeleteComment} className="delete-comment" >x</button>;
    } else {
      visibleDeleteButton = <div></div>;
    }

    return (
      <div className="comment-contain">
        <Link className="author-name" to={`/users/${this.props.authorId}`}>{this.props.author} </Link>
        <span>{this.props.body}</span>
        {visibleDeleteButton}
      </div>
    );
  }

}



export default CommentIndexItem;
