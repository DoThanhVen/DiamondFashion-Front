import React, { useEffect, useRef, useState } from "react";
import style from "../../css/admin/category/listcategory.module.css";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "react-bootstrap/Nav";
import "react-datepicker/dist/react-datepicker.css";
import CategoryService from "../../service/CategoryService";
import { Link } from "react-router-dom";


function ListCategory() {
  const [listCategory, setListcategory] = useState([])

  const log = useRef(true)
  useEffect(() => {
    if (log.current) {
      log.current = false
      getdataCategory()
    }
  }, []);

  const getdataCategory = async () => {
    const reponse = await CategoryService.getAllCategory();
    setListcategory(reponse)
  }

  return (
    <React.Fragment>
      <div className={style.listCategory}>
        <div className={style.heading}>
          <div className={style.column}>
            <label className={style.title}>Danh sách phân loại sản phẩm</label>
          </div>
        </div>
        <div className={style.table}>
          <div className={style.tableHeading}>
            <label className={style.column}>ID</label>
            <label className={style.column}>Mã loại</label>
            <label className={style.column}>Hình ảnh</label>
            <label className={style.column}>Tên loại</label>
            <label className={style.column}>Danh sách loại</label>
            <label className={style.column}>Trạng thái</label>
            <label className={style.column}></label>
          </div>
          {listCategory.map((value, index) => (
            <div key={index} className={style.tableBody}>
              <label className={style.column}>
                {index}
              </label>
              <label className={style.column}>{value.id}</label>
              <label className={style.column}>
                <img
                  className={style.image}
                  src={`http://localhost:8080/api/uploadImageProduct/${value.image}`}
                  alt="Hình Ảnh"
                ></img>
              </label>
              <label className={style.column}>{value.type_category}</label>
              <div className={style.column}>
                {value.listCategory?.map((valueCategory, indexCategory) => (
                  <ul key={indexCategory} className={style.menu}>
                    <li className={style.menuItem}>
                      {valueCategory.type_category_item}
                      <a
                        className={style.buttonEditItem}
                        href={`#${valueCategory.id}`}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
              <label className={style.column}>
                <span
                  className={style.status}
                  style={{ backgroundColor: value.status ? "green" : "red" }}
                >
                  {value.status ? "Đang hoạt động" : "Dừng hoạt động"}
                </span>
              </label>
              <label className={style.column}>
                <a
                  className={style.buttonEditItem}
                  href={`http://localhost:3000/admin/categories?idCategory=${value.id}`}
                >
                  <i className="bi bi-pencil-square"></i>
                </a>
              </label>
            </div>
          ))}
        </div>

      </div>
    </React.Fragment>
  );
}

export default ListCategory;
