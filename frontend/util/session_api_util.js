
export const requestSignUp = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user},
  });
};

export const requestLogin = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: {user},
  });
};

export const requestLogout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
};
