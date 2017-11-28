import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = (props) => {


  function handleDeleteComment(e) {
    e.preventDefault();
    props.deleteComment(props.commentId);
  }


  let DeleteCommentButton;
  if (props.authorId === props.currentUserId || props.artistId === props.currentUserId) {
    DeleteCommentButton = <button onClick={handleDeleteComment.bind(this)} className="delete-comment" >x</button>;
  } else {
    DeleteCommentButton = <div></div>;
  }

  return (
    <div className="comment-contain">
      <Link className="author-name"
        to={`/users/${props.authorId}`}>{props.author}
      </Link>
      <span>{props.body}</span>
      {DeleteCommentButton}
    </div>
  );
};


export default CommentIndexItem;
