// .then((data) => console.log(data))

export const addLike = (like) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: like
  });
};

export const removeLike = (postId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${postId}`
  });
};
