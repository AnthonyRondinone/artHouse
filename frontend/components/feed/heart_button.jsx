import React from 'react';
import { Link } from 'react-router-dom';


const HeartButton = (props) => {


  function handleLike(e) {
    e.preventDefault();
    props.addNewLike({post_id: props.postId});
  }

  function handleUnLike(e) {
    e.preventDefault();
    props.unLike(props.postId);
  }

  let liked = props.likerIds === undefined ?
    false :
    props.likerIds.includes(props.currentUserId);

  if(liked === true) {
      return (
        <button
          className="heart-button"
          onClick={ handleUnLike }>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      );
  } else {
    return (
      <button
        className="heart-button"
        onClick={ handleLike }>
        <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
      </button>
    );
  }
};

export default HeartButton;
