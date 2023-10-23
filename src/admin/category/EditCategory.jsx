import React, { useState } from "react";
import style from "../../css/admin/category/editcategory.module.css";

const listCategory = [
  {
    idCategory: "category1",
    categoryName: "Phân Loại"
  },
  {
    idCategory: "category1",
    categoryName: "Phân Loại"
  },
  {
    idCategory: "category1",
    categoryName: "Phân Loại"
  },
  {
    idCategory: "category1",
    categoryName: "Phân Loại"
  },
  {
    idCategory: "category1",
    categoryName: "Phân Loại"
  },
  {
    idCategory: "category1",
    categoryName: "Phân Loại"
  }
];
function EditCategory() {
  //SELECT IMAGE
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file.size > 800 * 1024) {
      alert(
        "Kích thước ảnh quá lớn. Vui lòng chọn ảnh có kích thước nhỏ hơn 1MB."
      );
    } else {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <React.Fragment>
      <div className={style.header}>
        <div className={style.formSearch}>
          <i className={`bi bi-search ${style.icon}`}></i>
          <input
            className={style.input}
            type="text"
            placeholder="Tìm kiếm..."
          ></input>
        </div>
        <i className={`bi bi-person-circle ${style.iconUser}`}></i>
      </div>
      <div className={style.cardForm}>
        <div className={style.form}>
          <div className={style.column}>
            <label className={style.heading}>Loại sản phẩm</label>
            <div className={style.formImage}>
              {selectedImage !== null ? (
                <img
                  className={style.image}
                  src={selectedImage}
                  alt="Hình Ảnh"
                />
              ) : null}
              <div className={style.action}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="inputImage"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <label htmlFor="inputImage" className={style.button}>
                  TẢI ẢNH
                </label>
                <label className={style.title}>
                  Được phép JPG, GIF hoặc PNG. Kích thước tối đa 800KB
                </label>
              </div>
            </div>
            <input
              className={style.inputText}
              type="text"
              placeholder="Tên loại..."
            ></input>
            <div className={style.formButton}>
              <button className={style.button}>
                <i className="bi bi-plus-lg"></i> THÊM
              </button>
              <button className={style.button}>
                <i className="bi bi-pencil-square"></i> SỬA
              </button>
              <button className={style.button}>
                <i className="bi bi-x-lg"></i> XÓA
              </button>
              <button className={style.button}>
                <i className="bi bi-arrow-clockwise"></i> LÀM MỚI
              </button>
            </div>
          </div>
          <div className={style.column}>
            <label className={style.heading}>Phân loại sản phẩm</label>
            <select className={style.select}>
              <option value="">Lựa chọn</option>
              {listCategory.map((value, index) => (
                <option value={value.idCategory}>{value.categoryName}</option>
              ))}
            </select>
            <input
              className={style.inputText}
              type="text"
              placeholder="Tên phân loại..."
            ></input>
            <div className={style.formButton}>
              <button className={style.button}>
                <i className="bi bi-plus-lg"></i> THÊM
              </button>
              <button className={style.button}>
                <i className="bi bi-pencil-square"></i> SỬA
              </button>
              <button className={style.button}>
                <i className="bi bi-x-lg"></i> XÓA
              </button>
              <button className={style.button}>
                <i className="bi bi-arrow-clockwise"></i> LÀM MỚI
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditCategory;
