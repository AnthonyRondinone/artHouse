import React from 'react';

const DeletePostDropdownItem = (props) => {

  const {
    deleteDropdown,
    deletePost,
    postId,
    closeDelete,
    currentUserId
  } = props;

  function handleDeletePostClick() {
    if (props.match.path === "/users/:userId/:postId") {
      props.history.push(`/users/${currentUserId}`);
    }
    props.deletePost(postId);
  }

  let handleDeletePostClickBound = handleDeletePostClick.bind(this);

  function handleCancelDeletePostClick() {
    closeDelete(postId);
  }

  let handleCancelDeletePostClickBound = handleCancelDeletePostClick.bind(this);

  if (deleteDropdown === 'open') {
    return (
      <div className="delete-main">
        <div
          className="delete-modal"
          onClick={handleCancelDeletePostClickBound} >
        </div>
        <div className="delete-dropdown" >
          <div
            className="delete-dropdown-button dropdown-delete"
            onClick={handleDeletePostClickBound}>
            <div>Delete Post</div>
          </div>
          <div
            className="delete-dropdown-button"
            onClick={handleCancelDeletePostClickBound}>
            <div>Cancel</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }

};

export default DeletePostDropdownItem;
