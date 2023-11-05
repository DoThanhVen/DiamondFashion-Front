import React, { useEffect, useRef, useState } from "react";
import style from "../../css/business/product.module.css";
import { callAPI } from "../../service/API";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function ModelEdit({ onReload, data, closeModal }) {
  const [product, setproduct] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [valueCategory, setValueCategory] = useState("");
  const [valueCategoryItem, setValueCategoryItem] = useState()
  const [categoryItemData, setcategoryItem] = useState([]);
  const [imagesave, setimagesave] = useState([]);
  const [productnew, setproductnew] = useState({});
  const [description, setdescription] = useState('')

  useEffect(() => {
    getdataproductbyid()
  }
    , []);

  const getdataproductbyid = async () => {
    const reponse = await callAPI(`/api/product/${data.id}`, "GET")
    setproduct(reponse)
    setValueCategoryItem(reponse.categoryItem_product.id)
  }

  function onChangeinput(e) {
    setproductnew({ ...product, [e.target.name]: e.target.value })
  }

  //SELECT IMAGE
  const handleImageChange = (e) => {
    const files = e.target.files;
    const filesave = e.target.files[0]
    const listsave = [...imagesave]
    listsave.push(filesave)
    setimagesave(listsave);
    const selectedImagesArray = Array.from(files)
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => URL.createObjectURL(file));
    if ((selectedImagesArray.length + product.image_product.length) > 9) {
      selectedImagesArray.splice(9);
    }
    //LIST LOCAL
    const list = [...selectedImages];
    list.push(selectedImagesArray);
    setSelectedImages(list);
  };

  const handleDeleteImageById = async (id) => {
    await callAPI(`/api/uploadImageProduct/${id}`, 'DELETE')
    getdataproductbyid()
  };
  const handleDeleteImage = (index) => {
    const deletedImage = [...selectedImages];
    deletedImage.splice(index, 1);
    setSelectedImages(deletedImage);
  };

  const getdataCategoryItem = async (id) => {
    const reponseItem = await callAPI(`/api/category/${id}`, "GET")
    setcategoryItem(reponseItem.listCategory)
  }

  const handleChangeCategory = (event) => {
    const selectedOptionValue = event.target.value;
    setValueCategory(selectedOptionValue);
    getdataCategoryItem(event.target.value)
  };

  const handleChangeCategoryItem = (event) => {
    const selectedOptionValue = event.target.value;
    setValueCategoryItem(selectedOptionValue);
  };

  const handleSubmit = async () => {

    const reponse = await callAPI(`/api/product/${product.id}`, "PUT", {
      product_name: productnew.product_name,
      price: productnew.price,
      description: description,
      status: 0,
      categoryItem_product: {
        id: valueCategoryItem
      }
    })
    if (reponse) {
      try {
        const formData = new FormData();
        imagesave.forEach((image, index) => {
          formData.append(`images`, image);
        });
        formData.append('idProduct', reponse.data.id);
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        };
        await callAPI(`/api/uploadImageProduct`, 'POST', formData
          , config);
      } catch (error) {
        console.error('Error for', error);
      }
    }
    closeModal()
    onReload()

  }

  return (
    <React.Fragment>
      <div className={`${style.formCardModel}`}>
        <div className={`${style.cardModel}`}>
          <div className={`${style.cardHeadingModel}`}>Cập nhật thông tin</div>
          <label className={`${style.heading}`}>
            Mã sản phẩm: <b>{product.id}</b>
          </label>
          <div className={`${style.addImage}`}>
            <label>Hình ảnh sản phẩm</label>
            <div className={`${style.infoImages}`}>
              <div>
                <span>* </span>
                <label> Hình ảnh tỷ lệ 1:1</label>
              </div>
              <div className={`${style.listImage}`}>
                {product?.image_product?.map((image, index) => (
                  <div key={index} className={`${style.selectedImages}`}>
                    <img src={`http://localhost:8080/api/uploadImageProduct/${image.url}`} alt={`Selected ${index}`} />
                    <label onClick={() => handleDeleteImageById(image.id)}>
                      <i className="bx bx-trash"></i>
                    </label>
                  </div>
                ))}
                {product?.image_product?.length < 9 ? (
                  selectedImages.map((image, index) => (
                    <div className={`${style.selectedImages}`} key={index}>
                      <img src={image} alt={`Selected ${index}`} />
                      <label onClick={() => handleDeleteImage(index)}>
                        <i className="bx bx-trash"></i>
                      </label>
                    </div>
                  ))
                ) : null}
                <input
                  id="selectedImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                {selectedImages?.length + product?.image_product?.length < 9 ? (
                  <label
                    htmlFor="selectedImage"
                    className={`${style.labelSelected}`}
                  >
                    <i class="bx bx-image-add"></i>
                    <span>Thêm hình ảnh ({selectedImages?.length + product?.image_product?.length}/9)</span>
                  </label>
                ) : null}
              </div>
            </div>
          </div>
          <div className={`${style.productName}`}>
            <label>Tên sản phẩm</label>
            <input type="text" defaultValue={product.product_name} onChange={onChangeinput} name="product_name"></input>
          </div>
          <div className={`${style.productName}`}>
            <label>Giá sản phẩm</label>
            <input type="text" value={product.price} onChange={onChangeinput} name="price"></input>
          </div>
          <div className={`${style.category}`}>
            <label>Ngành hàng</label>
            <select
              value={valueCategory}
              onChange={handleChangeCategory}
              className={`${style.optionSelectType}`}

            >
              <option value="">Loại Sản Phẩm...</option>
              {data.datacategory.map((value, index) => {
                return (
                  <option key={index} value={value.id}>{value.type_category}</option>)
              })}
            </select>
            {valueCategory !== "" ? (
              <select
                value={valueCategoryItem}
                onChange={handleChangeCategoryItem}
                className={`${style.optionSelectType}`}
                name="categoryItem_product"
              >
                <option value="">Phân Loại Sản Phẩm...</option>
                {categoryItemData.map((value, index) => {

                  return (
                    <option key={index} value={value.id}>
                      {value.type_category_item}
                    </option>)

                })}
              </select>
            ) : null}
          </div>
          <div className={`${style.description}`}>
            <label>Mô tả sản phẩm</label>
            <CKEditor
              editor={ClassicEditor}
              data={product.description}
              onChange={(event, editor) => {
                setdescription(editor.getData());

              }}

            />
          </div>
          <button className={`btn btn-primary mt-3`} onClick={handleSubmit}>LƯU THAY ĐỔI</button>
          <span onClick={closeModal} className={`${style.closeModal}`}>
            X
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}