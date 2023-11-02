import React, { useEffect, useRef, useState } from "react";
import ListCategory from "./ListCategory";
import EditCategory from "./EditCategory";
import CategoryService from "../../service/CategoryService";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../service/Actions";
function Category() {
  const dispatch = useDispatch();
  const idCategory = useSelector((state) => state.idCategoryUpdate);
  const idCategoryItem = useSelector((state) => state.idCategoryItemUpdate);
  useEffect(() => {
    getdataCategory()
  }, [idCategory,idCategoryItem]);

  const getdataCategory = async () => {
    const reponse = await CategoryService.getAllCategory();
    dispatch(getAllCategory(reponse))
  }
  return (
    <React.Fragment>
      <EditCategory />
      <ListCategory />
    </React.Fragment>
  );
}

export default Category;
