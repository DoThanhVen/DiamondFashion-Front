import React, { useEffect, useRef, useState } from "react";
import style from "../../css/admin/category/editcategory.module.css";
import CategoryService from "../../service/CategoryService";
import { useNavigate } from "react-router";


function EditCategory() {
  //SELECT IMAGE
  const [selectedImage, setSelectedImage] = useState(null);
  const [listCategory, setListcategory] = useState([])
  const [type_category, setTypeCate] = useState('')
  const [type_categoryItem, setTypeCateItem] = useState('')
  const [valueCategory, setValueCategory] = useState('')
  const [category, setcategory] = useState({})
  const [image, setimage] = useState()
  const navigate=useNavigate();

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
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setimage(file);
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
  window.addEventListener("load", function () {
    let params = new URLSearchParams(window.location.search);
    var paramID = params.get("idCategory");
    console.log('param',paramID)
    if (paramID != null) {
      const data=CategoryService.getAllCategoryById(paramID);
      data.then(result=>{
        setcategory(result)
        setSelectedImage(`http://localhost:8080/api/uploadImageProduct/${result.image}`)
      })
    }
  })
  console.log(category)
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
              defaultValue={category.type_category}
              placeholder="Tên loại..."
              onChange={(e) => { setTypeCate(e.target.value) }}
            ></input>
            <div className={style.formButton}>
              <button className={style.button} onClick={() => { CategoryService.addCategory(type_category, image) }}>
                <i className="bi bi-plus-lg"></i> THÊM
              </button>
              <button className={style.button} onClick={() => {CategoryService.updateCategory(category.id,type_category, image);navigate('/admin/categories');alert('Update succesfully'); window.location.reload();}}>
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
            <select className={style.select}
              value={valueCategory}
              onChange={(e) => { setValueCategory(e.target.value) }}
            >
              <option value="">Lựa chọn</option>
              {listCategory.map((value, index) => (
                <option value={value.id}>{value.type_category}</option>
              ))}
            </select>
            <input
              className={style.inputText}
              type="text"
              placeholder="Tên phân loại..."
              onChange={(e) => { setTypeCateItem(e.target.value) }}
            ></input>
            <div className={style.formButton}>
              <button className={style.button} onClick={() => { CategoryService.addCategoryItem(valueCategory, type_categoryItem) }}>
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
