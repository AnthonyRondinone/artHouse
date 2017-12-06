import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = (props) => {

  const {
    authorId,
    artistId,
    author,
    body,
    commentId,
    currentUserId
  } = props;


  function handleDeleteComment(e) {
    e.preventDefault();
    props.deleteComment(commentId);
  }

  let DeleteCommentButton;
  if ( authorId === currentUserId || artistId === currentUserId) {
    DeleteCommentButton = <button
                            onClick={ handleDeleteComment.bind(this) }
                            className="delete-comment"
                            >x
                          </button>;
  }

  return (
    <div className="comment-contain">
      <Link
        className="author-name"
        to={`/users/${authorId}`}>{author}
      </Link>
      <span>{ body }</span>
      { DeleteCommentButton }
    </div>
  );
};


export default CommentIndexItem;
