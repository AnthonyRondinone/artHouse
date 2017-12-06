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

  function handleCancelDeletePostClick() {
    closeDelete(postId);
  }

  if (deleteDropdown === 'open') {
    return (
      <div className="delete-main">
        <div
          className="delete-modal"
          onClick={ handleCancelDeletePostClick.bind(this) } >
        </div>
        <div className="delete-dropdown" >
          <div
            className="delete-dropdown-button dropdown-delete"
            onClick={ handleDeletePostClick.bind(this) }>
            <div>Delete Post</div>
          </div>
          <div
            className="delete-dropdown-button"
            onClick={ handleCancelDeletePostClick.bind(this) }>
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
