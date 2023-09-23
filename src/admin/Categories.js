import React, { useState } from "react";
import "../css/admin/category.css";

function Categories() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const openSearchForm = () => {
    setIsOpenSearch(true);
  };
  const closeSearchForm = () => {
    setIsOpenSearch(false);
  };
  /*CHỌN ẢNH CATEGORY*/
  const [selectedImageCategory, setSelectedImageCategory] = useState(null);

  const handleImageCategoryChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataURL = event.target.result;
        setSelectedImageCategory(imageDataURL);
      };
      reader.readAsDataURL(file);
    }
  };
  /*CHỌN ẢNH CATEGORYITEM*/
  const [selectedImageCategoryItem, setSelectedImageCategoryItem] =
    useState(null);

  const handleImageCategoryItemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataURL = event.target.result;
        setSelectedImageCategoryItem(imageDataURL);
      };
      reader.readAsDataURL(file);
    }
  };

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

  const setTypeCategory = (value) => {
    for (const valueCategory of categories) {
      if (valueCategory.idCategory === value) {
        return valueCategory.type;
      }
    }
    return "Không tìm thấy";
  };

  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <React.Fragment>
      <div id="category">
        <div className={`path`}>ADMIN / Loại Sản Phẩm</div>
        <div className={`form-edit`}>
          <div className={`category`}>
            <div className={`edit`}>
              <form className={`mb-3`}>
                <div className={`mb-3`}>
                  <div className={`heading`}>LOẠI SẢN PHẨM</div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageCategoryChange}
                    style={{ display: "none" }}
                    id="selectedImageCategory"
                  />
                  <label
                    htmlFor="selectedImageCategory"
                    className="label-selected"
                  >
                    <i class="bx bxs-camera me-1"></i>Chọn Ảnh
                  </label>
                  {selectedImageCategory && (
                    <div className={`form-selected`}>
                      <img
                        src={selectedImageCategory}
                        alt="Hình Ảnh"
                        className="selected-image"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Loại Sản Phẩm
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <button type="submit" class="btn btn-success">
                  SAVE
                </button>
                <button type="submit" class="btn btn-primary ms-2">
                  EDIT
                </button>
              </form>
            </div>
            <div className={`content mt-3`}>
              <div className={"heading"}>
                <label>DANH SÁCH LOẠI SẢN PHẨM</label>
              </div>
              <div className={`search`}>
                <i className={`bx bx-search`} onClick={openSearchForm} />
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Hình Ảnh</th>
                    <th>Loại Sản Phẩm</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((value, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>
                        <img
                          src={"/images/" + value.imageCategory}
                          alt="Hình Ảnh"
                        />
                      </td>
                      <td>{value.type}</td>
                      <td>
                        <span className={`edit me-2`}>
                          <a href={`#edit${value.idCategory}`}>
                            <i class="bx bx-pencil"></i>
                          </a>
                        </span>
                        <span className={`delete`}>
                          <a href={`#delete${value.idCategory}`}>
                            <i class="bx bx-x"></i>
                          </a>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <form className={`search-form ${isOpenSearch ? "active" : ""}`}>
                <input type="text" placeholder="Tìm kiếm..." />
                <i
                  className="bi bi-x-lg"
                  style={{ color: "black" }}
                  onClick={closeSearchForm}
                />
              </form>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`edit`}>
              <form className={`mb-3`}>
                <div className={`mb-3`}>
                  <div className={`heading`}>PHÂN LOẠI SẢN PHẨM</div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageCategoryItemChange}
                    style={{ display: "none" }}
                    id="selectedImageCategoryItem"
                  />
                  <label
                    htmlFor="selectedImageCategoryItem"
                    className="label-selected"
                  >
                    <i class="bx bxs-camera me-1"></i>Chọn Ảnh
                  </label>
                  {selectedImageCategoryItem && (
                    <div className={`form-selected`}>
                      <img
                        src={selectedImageCategoryItem}
                        alt="Hình Ảnh"
                        className="selected-image"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Loại Sản Phẩm
                  </label>
                  <select  className="form-control" value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Loại sản phẩm...</option>
                    {categories.map((option, index) => (
                      <option key={option.idCategory} value={option.idCategory}>
                        {option.type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="categoryItem" className="form-label">
                    Phân Loại Sản Phẩm
                  </label>
                  <input type="text" className="form-control" id="categoryItem" />
                </div>
                <button type="submit" class="btn btn-success">
                  SAVE
                </button>
                <button type="submit" class="btn btn-primary ms-2">
                  EDIT
                </button>
              </form>
            </div>
            <div className={`content mt-3`}>
              <div className={"heading"}>
                <label>DANH SÁCH PHÂN LOẠI SẢN PHẨM</label>
              </div>
              <div className={`search`}>
                <i className={`bx bx-search`} onClick={openSearchForm} />
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Loại Sản Phẩm</th>
                    <th>Phân Loại Sản Phẩm</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {categoryItem.map((value, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{setTypeCategory(value.idCategory)}</td>
                      <td>{value.type}</td>
                      <td>
                        <span className={`edit me-2`}>
                          <a href="#editAccount">
                            <i class="bx bx-pencil"></i>
                          </a>
                        </span>
                        <span className={`delete`}>
                          <a href="#deleteAccount">
                            <i class="bx bx-x"></i>
                          </a>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <form className={`search-form ${isOpenSearch ? "active" : ""}`}>
                <input type="text" placeholder="Tìm kiếm..." />
                <i
                  className="bi bi-x-lg"
                  style={{ color: "black" }}
                  onClick={closeSearchForm}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Categories;
