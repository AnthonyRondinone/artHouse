
export const sendComment = (comment) => {
  return $.ajax({
      method: 'POST',
      url: '/api/comments',
      data: {comment}
  });
};
