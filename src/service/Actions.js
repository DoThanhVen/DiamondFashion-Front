export const getDataLogin = (data) => {
  return {
    type: "GET_LOGIN_DATA",
    payload: data
  };
};

export const setIsLogin = (data) => {
  return {
    type: "SET_LOGIN",
    payload: data
  };
};
