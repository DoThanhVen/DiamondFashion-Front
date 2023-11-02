export const getDataLogin = (data) => {
  return {
    type: "GET_LOGIN_DATA",
    payload: data
  };
}
export const getIdcategoryUpdate = (id) => {
  return {
    type: "GET_IDCATEGORY_UPDATE",
    payload: id
  };
}
export const getIdcategoryItemUpdate = (id) => {
  return {
    type: "GET_IDCATEGORYITEM_UPDATE",
    payload: id
  };
}
export const getAllCategory = (data) => {
  return {
    type: "GET_ALL_CATEGORY",
    payload: data
  };
}
