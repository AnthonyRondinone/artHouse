
export const sendComment = (comment) => {
  return $.ajax({
      method: 'POST',
      url: '/api/comments',
      data: {comment}
  });
};

export const removeComment = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`,
  });
};
