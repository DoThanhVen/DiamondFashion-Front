import React, { useState } from "react";
import style from "../../css/business/storge.module.css";

export default function AddStorge() {
  //DANH SÁCH SẢN PHẨM
  const listProduct = [
    {
      idProduct: "product",
      image: "instagram.jpg",
      productName: "Áo Sơ Mi Nam Cực Quyến Rũ",
      typeCategory: "Áo",
      typeCategoryItem: "Áo Sơ Mi",
      price: 123000,
      isActive: true
    }
  ];
  const [valueProduct, setValueProduct] = React.useState("");
  const handleChangeProduct = event => {
    const selectedOptionValue = event.target.value;
    setValueProduct(selectedOptionValue);
  };
  return (
    <React.Fragment>
      <div className={style.header}>
        <div className={style.formSearch}>
          <i className={`bi bi-search ${style.icon}`} />
          <input
            className={style.input}
            type="text"
            placeholder="Tìm kiếm..."
          />
        </div>
        <i className={`bi bi-person-circle ${style.iconUser}`} />
      </div>
      <div id={`${style.addProduct}`}>
        <div className={`${style.heading}`}>
          <label>Thêm số lượng sản phẩm</label>
        </div>
        <div className={`${style.product}`}>
          <label className={style.label}>Sản phẩm</label>
          <select
            value={valueProduct}
            onChange={handleChangeProduct}
            className={`${style.optionSelect} ${style.input}`}
          >
            <option value="">Sản Phẩm...</option>
            {listProduct.map((value, index) =>
              <option key={index} value={value.idProduct}>
                <img className={style.image} src={`/images/${value.image}`} alt="Hình Ảnh"/>
                {value.productName}
              </option>
            )}
          </select>
        </div>
        <div className={`${style.quantity}`}>
          <label className={style.label}>Số lượng</label>
          <input type="number" className={style.input} />
        </div>
        <div className={style.formButton}>
          <button className={style.button}>
            <i className="bi bi-plus-lg"></i> THÊM
          </button>
          <button className={style.button}>
            <i className="bi bi-pencil-square"></i> SỬA
          </button>
          <button className={style.button}>
            <i className="bi bi-arrow-clockwise"></i> LÀM MỚI
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
