// .then((data) => console.log(data))

export const sendNewPost = (post) => {
    return $.ajax({
      method: 'POST',
      url: `/api/posts`,
      data: { post }
    });
};
