// .then((data) => console.log(data))

export const fetchSingleUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
  });
};
