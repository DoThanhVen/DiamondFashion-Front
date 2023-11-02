import React, { useEffect, useRef, useState } from "react";
import style from "../../css/admin/category/editcategory.module.css";
import CategoryService from "../../service/CategoryService";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getIdcategoryItemUpdate, getIdcategoryUpdate } from "../../service/Actions";


function EditCategory() {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [type_category, setTypeCate] = useState('')
  const [type_categoryItem, setTypeCateItem] = useState('')
  const [valueCategory, setValueCategory] = useState()
  const [category, setcategory] = useState({})
  const [categoryItem, setcategoryItem] = useState({})
  const [image, setimage] = useState()
  const navigate = useNavigate();
  const [listCategory, setListcategory] = useState([])
  const [reload, setreload] = useState(false)
  //GET DATA REDUX
  const data = useSelector((state) => state.allDataCategory);
  const idCategory = useSelector((state) => state.idCategoryUpdate);
  const idCategoryItem = useSelector((state) => state.idCategoryItemUpdate);
  useEffect(() => {
    if (Array.isArray(data)) {
      setListcategory(data);
      if (listCategory !== null && idCategory !== 0 && idCategoryItem === 0) {
        getCategoryId();
      } else if (listCategory !== null && idCategory === 0 && idCategoryItem !== 0) {
        getCategoryItemId();
      } else if (idCategory !== 0 && idCategoryItem !== 0 && listCategory !== null) {
        getCategoryId();
        getCategoryItemId();
      }
    }
  }, [idCategory, idCategoryItem, reload]);

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

  const handleUpdateCategory = async () => {
    const result = await CategoryService.updateCategory(category.id, type_category, image);
    if (result) {
      alert('Update successfully');
      document.getElementById('idInputcategory').value = '';
      setSelectedImage(null);
      setcategory({});
      dispatch(getIdcategoryUpdate(0));
      navigate('/admin/categories');
    }
  }

  const handleUpdateCategoryItem = async () => {
    const result = await CategoryService.updateCategoryItem(categoryItem.id, valueCategory, type_categoryItem);
    if (result) {
      alert('Update successfully');
      document.getElementById('idInputcategoryItem').value = '';
      dispatch(getIdcategoryItemUpdate(0));
      navigate('/admin/categories');
    }
  }
  const getCategoryId = () => {
    if (idCategory !== 0) {
      const data = CategoryService.getAllCategoryById(idCategory);
      data.then(result => {
        document.getElementById('idInputcategory').value = result.type_category;
        setcategory(result)
        setSelectedImage(`http://localhost:8080/api/uploadImageProduct/${result.image}`)
      })
    }
  }

  const getCategoryItemId = async () => {
    const data = await CategoryService.getAllCategoryItemById(idCategoryItem);
    const matchingCategory = listCategory.find((category) =>
      category.listCategory.some((listItem) => listItem.id === data.id)
    )
    if (matchingCategory) {
      setValueCategory(matchingCategory.id);
      document.getElementById('idInputcategoryItem').value = data.type_category_item;
      setcategoryItem(data);
    } else {
      setreload(true)
    }
  }

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
              id="idInputcategory"
              defaultValue={category.type_category}
              placeholder="Tên loại..."
              onChange={(e) => { setTypeCate(e.target.value) }}
            ></input>
            <div className={style.formButton}>
              <button className={style.button} onClick={() => {
                const reponse = CategoryService.addCategory(type_category, image);
                if (reponse) {
                  reponse.then(e => {
                    dispatch(getIdcategoryUpdate(e.data.id))
                  })
                }

              }}>
                <i className="bi bi-plus-lg"></i> THÊM
              </button>
              <button className={style.button} onClick={handleUpdateCategory}>
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
              id="idInputcategoryItem"
              placeholder="Tên phân loại..."
              onChange={(e) => { setTypeCateItem(e.target.value) }}
            ></input>
            <div className={style.formButton}>
              <button className={style.button} onClick={() => {
                const reponse = CategoryService.addCategoryItem(valueCategory, type_categoryItem)
                if (reponse) {
                  reponse.then(e => {
                    dispatch(getIdcategoryItemUpdate(e.data.id))
                  })
                }
              }}>
                <i className="bi bi-plus-lg"></i> THÊM
              </button>
              <button className={style.button} onClick={handleUpdateCategoryItem}>
                <i className="bi bi-pencil-square" ></i> SỬA
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
