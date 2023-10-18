import { callAPI } from "../service/API";
import style from "../css/business/product.module.css";
import React, { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function AddProduct() {
    const [datacategory, setcategorydata] = useState([]);
    const [categoryItemData, setcategoryItem] = useState([]);
    const [valueCategory, setValueCategory] = useState("");
    const [valueCategoryItem, setValueCategoryItem] = useState("");
    const [quantityValue, setQuantityValue] = useState("");
    const [selectedImages, setSelectedImages] = useState([]);
    const [imagesave, setimagesave] = useState([]);
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [reload, setreload] = useState(false)


    useEffect(() => {
        getdataCategory()
    }, [reload]);

    const getdataCategory = async () => {
        const reponse = await callAPI(`/api/category`, "GET");
        setcategorydata(reponse)
    }

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


    const handleImageChange = (e) => {
        const files = e.target.files;
        const filesave = e.target.files[0]
        const listsave = [...imagesave]
        listsave.push(filesave)
        setimagesave(listsave);
        const selectedImagesArray = Array.from(files)
            .filter((file) => file.type.startsWith("image/"))
            .map((file) => URL.createObjectURL(file));
        if (selectedImagesArray.length > 9) {
            selectedImagesArray.splice(9);
        }
        const list = [...selectedImages];
        list.push(selectedImagesArray);
        setSelectedImages(list);
    };

    const handleDeleteImage = (index) => {
        const deletedImage = [...selectedImages];
        deletedImage.splice(index, 1);
        setSelectedImages(deletedImage);
    };


    const handleSubmit = async () => {
        const reponse = await callAPI(`/api/product/shop/1`, "POST", {
            product_name: name,
            price: price,
            description: description,
            status: true,
            quantity: quantityValue,
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
        setreload(true);
    }


    return (
        <React.Fragment>
            <div className={`${style.cardHeading}`}>Thông tin cơ bản</div>
            <div className={`${style.listImage}`}>
                {selectedImages.slice(0, 9).map((image, index) => (
                    <div className={`${style.selectedImages}`} key={index}>
                        <img src={image} alt={`Selected ${index}`} />
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
            <div className={`${style.productName}`}>
                <label>Tên sản phẩm</label>
                <input type="text" placeholder="Tên sản phẩm..." onChange={(e) => { setname(e.target.value) }}></input>
            </div>
            <div className={`${style.price}`}>
                <label>Giá sản phẩm</label>
                <input type="text" placeholder="Giá sản phẩm..." onChange={(e) => { setprice(e.target.value) }}></input>
            </div>
            <div className={`${style.category}`}>
                <label>Ngành hàng</label>
                <select
                    value={valueCategory}
                    onChange={handleChangeCategory}
                    className={`${style.optionSelectType}`}
                >
                    <option value="">Loại Sản Phẩm...</option>
                    {datacategory.map((value, index) => {
                        return (
                            <option key={index} value={value.id}>{value.type_category}</option>)
                    })}
                </select>
                {valueCategory !== "" ? (
                    <select
                        value={valueCategoryItem}
                        onChange={handleChangeCategoryItem}
                        className={`${style.optionSelectType}`}
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
            <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={(event, editor) => {
                    setdescription(editor.getData());

                }}

            />
            <button className={`${style.buttonCreateProduct}`} onClick={handleSubmit}>LƯU SẢN PHẨM</button>
        </React.Fragment >
    );
}
export default AddProduct;