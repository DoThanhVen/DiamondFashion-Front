import React, { useState } from "react";
import style from "../../css/business/product.module.css";

export default function AddProduct() {
    //SELECT IMAGE
    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageChange = (e) => {
      const files = e.target.files;
      const selectedImagesArray = Array.from(files)
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => URL.createObjectURL(file));
  
      if (selectedImagesArray.length > 9) {
        selectedImagesArray.splice(9);
      }
      setSelectedImages(selectedImagesArray);
    };
  
    const handleDeleteImage = (index) => {
      const deletedImage = [...selectedImages];
      deletedImage.splice(index, 1);
      setSelectedImages(deletedImage);
    };
  
    //LOẠI SẢN PHẨM
    const categories = [
      {
        idCategory: "category1",
        imageCategory: "tiktok.jpg",
        type: "Áo"
      },
      {
        idCategory: "category2",
        imageCategory: "facebook.jpg",
        type: "Quần"
      },
      {
        idCategory: "category3",
        imageCategory: "banner-left.jpg",
        type: "Giày"
      },
      {
        idCategory: "category4",
        imageCategory: "banner-right-1.jpg",
        type: "Điện Thoại"
      }
    ];
  
    const [valueCategory, setValueCategory] = React.useState("");
    const handleChangeCategory = (event) => {
      const selectedOptionValue = event.target.value;
      setValueCategory(selectedOptionValue);
    };
    //PHÂN LOẠI SẢN PHẨM
    const categoryItem = [
      {
        idCategoryItem: "categoryItem1",
        idCategory: "category1",
        type: "Áo Thun"
      },
      {
        idCategoryItem: "categoryItem2",
        idCategory: "category1",
        type: "Áo Sơ Mi"
      },
      {
        idCategoryItem: "categoryItem3",
        idCategory: "category1",
        type: "Áo Hoddie"
      },
      {
        idCategoryItem: "categoryItem4",
        idCategory: "category1",
        type: "Áo Khoác Dù"
      },
      {
        idCategoryItem: "categoryItem5",
        idCategory: "category2",
        type: "Quần Thun Co Dãn"
      }
    ];
  
    const [valueCategoryItem, setValueCategoryItem] = React.useState("");
    const handleChangeCategoryItem = (event) => {
      const selectedOptionValue = event.target.value;
      setValueCategoryItem(selectedOptionValue);
    };
  
    //THÊM FORM INPUT
    const [formTexts, setFormTexts] = useState([]);
    const [colorValue, setColorValue] = useState("");
    const [sizeValue, setSizeValue] = useState("");
    const [quantityValue, setQuantityValue] = useState("");
  
    const addValue = () => {
      const detailProduct = {
        color: colorValue,
        size: sizeValue,
        quantity: quantityValue
      };
      setColorValue("");
      setSizeValue("");
      setQuantityValue("");
      setFormTexts([...formTexts, detailProduct]);
    };
  
    const removeFormText = (indexRemove) => {
      const updatedFormTexts = [...formTexts];
      updatedFormTexts.splice(indexRemove, 1);
      setFormTexts(updatedFormTexts);
    };
  
    return (
      <React.Fragment>
        <div className={`${style.cardHeading}`}>Thông tin cơ bản</div>
        <div className={`${style.addImage}`}>
          <label>Hình ảnh sản phẩm</label>
          <div className={`${style.infoImages}`}>
            <div>
              <span>* </span>
              <label> Hình ảnh tỷ lệ 1:1</label>
            </div>
            <div className={`${style.listImage}`}>
              {selectedImages.slice(0, 9).map((image, index) => (
                <div className={`${style.selectedImages}`}>
                  <img key={index} src={image} alt={`Selected ${index}`} />
                  <label onClick={() => handleDeleteImage(index)}>
                    <i className="bx bx-trash"></i>
                  </label>
                </div>
              ))}
              <input
                id="selectedImage"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              {selectedImages.length < 9 ? (
                <label
                  htmlFor="selectedImage"
                  className={`${style.labelSelected}`}
                >
                  <i class="bx bx-image-add"></i>
                  <span>Thêm hình ảnh ({selectedImages.length}/9)</span>
                </label>
              ) : null}
            </div>
          </div>
        </div>
        <div className={`${style.productName}`}>
          <label>Tên sản phẩm</label>
          <input type="text" placeholder="Tên sản phẩm..."></input>
        </div>
        <div className={`${style.price}`}>
          <label>Giá sản phẩm</label>
          <input type="text" placeholder="Giá sản phẩm..."></input>
        </div>
        <div className={`${style.category}`}>
          <label>Ngành hàng</label>
          <select
            value={valueCategory}
            onChange={handleChangeCategory}
            className={`${style.optionSelectType}`}
          >
            <option value="">Loại Sản Phẩm...</option>
            {categories.map((value, index) => (
              <option key={index} value={value.idCategory}>
                {value.type}
              </option>
            ))}
          </select>
          {valueCategory !== "" ? (
            <select
              value={valueCategoryItem}
              onChange={handleChangeCategoryItem}
              className={`${style.optionSelectType}`}
            >
              <option value="">Phân Loại Sản Phẩm...</option>
              {categoryItem.map((value, index) =>
                valueCategory === value.idCategory ? (
                  <option key={index} value={value.idCategoryItem}>
                    {value.type}
                  </option>
                ) : null
              )}
            </select>
          ) : null}
        </div>
        <div className={`${style.quantity}`}>
          <label>Số lượng</label>
          <input
            type="number"
            placeholder="Số lượng..."
            onChange={(e) => {
              setQuantityValue(e.target.value);
            }}
          />
        </div>
        <div className={`${style.description}`}>
          <label>Mô tả sản phẩm</label>
          <textarea placeholder="Mô tả..." />
        </div>
        <button className={`${style.buttonCreateProduct}`}>LƯU SẢN PHẨM</button>
      </React.Fragment>
    );
  }