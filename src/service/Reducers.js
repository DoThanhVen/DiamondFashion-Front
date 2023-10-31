export const dataLogin = (state = {}, action) => {
    switch (action.type) {
      case "GET_LOGIN_DATA":
        return action.payload;
      default:
        return state;
    }
  };
  
  