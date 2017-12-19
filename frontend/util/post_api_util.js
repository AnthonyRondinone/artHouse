

export const sendNewPost = (post) => {
    return $.ajax({
      method: 'POST',
      url: `/api/posts`,
      contentType: false,
      processData: false,
      data: post
    });
};

export const fetchAllFolloweePosts = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/posts'
  });
};

export const fetchSinglePost = (postId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  });
};


export const removePost = (postId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  });
};
