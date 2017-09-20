

export const fetchSingleUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
  });
};

export const fetchSuggestedUsers = () => {

  return $.ajax({
    method: "GET",
    url: 'api/users'
  });
};

export const updateUserInfo = (info, userId) => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    contentType: false,
    processData: false,
    data: info
  });
};
