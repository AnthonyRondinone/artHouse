

export const addFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: follow
  });
};

export const removeFollow = (followee_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows/${followee_id}`
  });
};
