import React from 'react';
import { Link } from 'react-router-dom';


const HeartButton = (props) => {


  function handleLike(e) {
    e.preventDefault();
    props.addNewLike({like: {post_id: props.postId}});
  }

  function handleUnLike(e) {
    e.preventDefault();
    props.unLike(props.postId);
  }

    let liked;
    if (props.likerIds === undefined) {
      liked = false;
    } else {
      liked = props.likerIds.includes(props.currentUserId);
    }

    if(liked === true) {
        return (
          <button className="heart-button" onClick={handleUnLike.bind(this)}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </button>
        );
    } else {
      return (
        <button className="heart-button" onClick={handleLike.bind(this)}>
          <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
        </button>
      );
    }
  };

export default HeartButton;
