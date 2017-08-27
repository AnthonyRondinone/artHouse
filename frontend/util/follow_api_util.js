

export const addFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: follow
  }).then((data) => console.log(data));
};

export const removeFollow = (followee_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows/${followee_id}`
  }).then((data) => console.log(data));
};
