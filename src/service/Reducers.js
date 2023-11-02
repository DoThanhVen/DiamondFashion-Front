export const allData = (state = {}, action) => {
  switch (action.type) {
    case "GET_LOGIN_DATA":
      return action.payload;
    default:
      return state;
  }
};
export const idCategoryUpdate = (state = 0, action) => {
  switch (action.type) {
    case "GET_IDCATEGORY_UPDATE":
      return action.payload;
    default:
      return state;
  }
};
export const idCategoryItemUpdate = (state = 0, action) => {
  switch (action.type) {
    case "GET_IDCATEGORYITEM_UPDATE":
      return action.payload;
    default:
      return state;
  }
};
export const allDataCategory = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};