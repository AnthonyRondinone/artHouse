// .then((data) => console.log(data))

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
