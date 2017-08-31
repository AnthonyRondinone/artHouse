import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {comments, currentUser} = this.props;
    let postCommentIndexItems = comments.map((comment) => <CommentIndexItem
    commentId={comment.id}
    key={comment.id}
    body={comment.body}
    author={comment.author}
    authorId={comment.authorId}
    deleteComment={this.props.deleteComment}
    currentUserId={currentUser.id}
    artistId={this.props.artistId}
    />);
    return (
      <div>
        { postCommentIndexItems }
      </div>
    );
  }

}

export default CommentIndex;
