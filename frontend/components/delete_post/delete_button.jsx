import React from 'react';

const DeleteButton = (props) => {

  const {
    currentUserId,
    artistId,
    openDelete,
    postId
  } = props;

  function handleDeleteClick() {
    openDelete(postId);
  }

  if (currentUserId === artistId) {
    return (
      <i
        className="fa fa-ellipsis-v post-delete-button"
        aria-hidden="true"
        onClick={handleDeleteClick.bind(this)}
        >
      </i>
    );
  } else {
    return null;
  }
};

export default DeleteButton;
