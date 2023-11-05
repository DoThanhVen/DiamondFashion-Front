export const dataLogin = (state = {}, action) => {
  switch (action.type) {
    case "GET_LOGIN_DATA":
      return action.payload;
    default:
      return state;
  }
};

export const isLogin = (state = false, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return action.payload;
    default:
      return state;
  }
};
