import React, { useEffect, useRef, useState } from "react";
import style from "../../css/admin/category/editcategory.module.css";
import CategoryService from "../../service/CategoryService";
import { useDispatch, useSelector } from "react-redux";
import { getIdcategoryItemUpdate, getIdcategoryUpdate, reloadPage } from "../../service/Actions";
import { getreloadPage } from "../../service/Reducers";


function EditCategory() {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [type_category, setTypeCate] = useState('')
  const [type_categoryItem, setTypeCateItem] = useState('')
  const [valueCategory, setValueCategory] = useState()
  const [category, setcategory] = useState({})
  const [categoryItem, setcategoryItem] = useState({})
  const [image, setimage] = useState(null)
  const [listCategory, setListcategory] = useState([])
  const [reload, setreload] = useState(0)
  //GET DATA REDUX
  const data = useSelector((state) => state.allDataCategory);
  const idCategory = useSelector((state) => state.idCategoryUpdate);
  const idCategoryItem = useSelector((state) => state.idCategoryItemUpdate);
  const reloadold = useSelector((state) => state.getreloadPage);

  useEffect(() => {
    if (Array.isArray(data)) {
      console.log(data)
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
  }, [reload, data,idCategory,idCategoryItem]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 800 * 1024) {
      alert(
        "Kích thước ảnh quá lớn. Vui lòng chọn ảnh có kích thước nhỏ hơn 1MB."
      );
    } else {
      setimage(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //Category
  const handleAddCategory = async () => {
    if (type_category === '' || image === null && idCategory === 0) {
      alert('Please fill in all value')
    } else {
      const reponse = await CategoryService.addCategory(type_category, image);
      dispatch(reloadPage(reloadold + 1));
    }
  }

  const getCategoryId = async () => {
      const data = await CategoryService.getAllCategoryById(idCategory);
      console.log('data', data)
      if (data.id !== 0) {
        setcategory(data)
      }
  }

  const handleUpdateCategory = async () => {
    const result = await CategoryService.updateCategory(category.id, type_category, image);
    if (result.status === 'SUCCESS') {
      alert('Update successfully');
      dispatch(reloadPage(reloadold + 1));
    }
  }

  const handleDeleteCategory = async () => {
    const reponse = await CategoryService.deleteCategory(idCategory)
    if (reponse.status === "SUCCESS") {
      alert('Delete successfully')
      dispatch(getIdcategoryUpdate(0));
      setcategory({});
      dispatch(reloadPage(reloadold + 1));
    } else {
      alert('Delete error')
    }
  }

  //CategoryItem
  const handleAddCategoryItem = async () => {
    if (valueCategory === '' || type_categoryItem === '' && idCategoryItem === 0) {
      alert('Please fill in all value')
    } else {
      const reponse = await CategoryService.addCategoryItem(valueCategory, type_categoryItem)
      dispatch(reloadPage(reloadold + 1));
    }
  }

  const getCategoryItemId = async () => {
    if (idCategoryItem !== 0) {
      const data = await CategoryService.getAllCategoryItemById(idCategoryItem);
      const matchingCategory = listCategory.find((category) =>
        category.listCategory.some((listItem) => listItem.id === data.id)
      )
      if (matchingCategory) {
        setValueCategory(matchingCategory.id);
        setcategoryItem(data);
      } else {
        setreload(reload + 1)
      }
    }
  }

  const handleUpdateCategoryItem = async () => {
    const result = await CategoryService.updateCategoryItem(categoryItem.id, valueCategory, type_categoryItem);
    console.log('re',result)
    if (result.status==='SUCCESS') {
      alert('Update successfully');
      dispatch(reloadPage(reloadold + 1));
    }
  }


  const handleDeleteCategoryItem = async () => {
      const reponse = await CategoryService.deleteCategoryItem(idCategoryItem)
      if (reponse.status === "SUCCESS") {
        alert('Delete successfully')
        dispatch(getIdcategoryItemUpdate(0));
        dispatch(reloadPage(reloadold + 1));
      } else {
        alert('Delete error')
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
              {
                selectedImage !== null ? (
                  <img
                    className={style.image}
                    src={selectedImage}
                    alt="Hình Ảnh"
                  />
                ) : category !== null ? (
                  <img
                    className={style.image}
                    src={`http://localhost:8080/api/uploadImageProduct/${category.image}`}
                    alt="Hình Ảnh"
                  />
                ) : null
              }
              <div className={style.action}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="inputImage"
                  accept="image/*"
                  defaultValue={category.image}
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
              placeholder="Tên loại..."
              defaultValue={category.type_category}
              onChange={(e) => { setTypeCate(e.target.value) }}
            ></input>
            <div className={style.formButton}>
              <button className={style.button} onClick={() => {
                handleAddCategory()
              }}>
                <i className="bi bi-plus-lg"></i> THÊM
              </button>
              <button className={style.button} onClick={handleUpdateCategory} >
                <i className="bi bi-pencil-square"></i> SỬA
              </button>
              <button className={style.button} onClick={handleDeleteCategory}>
                <i className="bi bi-x-lg"></i> XÓA
              </button>
              <button className={style.button}>
                <i className="bi bi-arrow-clockwise"></i> LÀM MỚI
              </button>
            </div>
          </div>
          <div className={style.column}>
            <label className={style.heading}>Phân loại sản phẩm</label>
            <select
              className={style.select}
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
              defaultValue={categoryItem.type_category_item}
              onChange={(e) => { setTypeCateItem(e.target.value) }}
            ></input>
            <div className={style.formButton}>
              <button className={style.button} onClick={() => handleAddCategoryItem()}>
                <i className="bi bi-plus-lg"></i> THÊM
              </button>
              <button className={style.button} onClick={handleUpdateCategoryItem}>
                <i className="bi bi-pencil-square" ></i> SỬA
              </button>
              <button className={style.button} onClick={handleDeleteCategoryItem}>
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
