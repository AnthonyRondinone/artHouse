import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

const CommentIndex = (props) => {

  const {
    comments,
    currentUser,
    artistId,
    deleteComment
  } = props;

  let postCommentIndexItems = comments.map((comment) => <CommentIndexItem
    commentId={comment.id}
    key={comment.id}
    body={comment.body}
    author={comment.author}
    authorId={comment.authorId}
    deleteComment={deleteComment}
    currentUserId={currentUser.id}
    artistId={artistId}
    />);

  return (
    <div>
      { postCommentIndexItems }
    </div>
  );
};


export default CommentIndex;
