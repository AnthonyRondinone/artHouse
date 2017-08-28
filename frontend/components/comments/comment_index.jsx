import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {comments} = this.props;

    let postCommentIndexItems = comments.map((comment) => <CommentIndexItem
    key={comment.id}
    body={comment.body}
    author={comment.author}
    authorId={comment.authorId}
    />);
    return (
      <div>
        { postCommentIndexItems }
      </div>
    );
  }

}

export default CommentIndex;
