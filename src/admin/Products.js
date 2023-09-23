import React, { useState, useEffect, useRef } from "react";
import ProductService from "../service/ProductService";
import "../css/admin/product.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  /*XỬ LÝ THANH TÌM KIẾM*/
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const openSearchForm = () => {
    setIsOpenSearch(true);
  };
  const closeSearchForm = () => {
    setIsOpenSearch(false);
  };
  /*XỬ LÝ HÌNH ẢNH */
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setSelectedFiles(selectedFiles);
  };
  //CHUYỂN ĐỔI TIỀN TỆ
  function formatCurrency(price, promotion) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0
    });
    return formatter.format(price - price * (promotion / 100));
  }

  //DANH SÁCH LOẠI SẢN PHẨM
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
  //DANH SÁCH PHÂN LOẠI SẢN PHẨM
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
      type: "Quần Thun Co Giãn"
    }
  ];
  //DANH SÁCH GIAN HÀNG
  const shops = [
    {
      idShop: "shop1",
      status: true,
      nameShop: "Diamond Fashion 1",
      imageShop: "banner-left.jpg",
      quantityItems: 150,
      createDate: "19/09/2023",
      businessShop: "Đỗ Thanh Vẹn"
    },
    {
      idShop: "shop2",
      status: false,
      nameShop: "Diamond Fashion 2",
      imageShop: "banner-right-1.jpg",
      quantityItems: 337,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop3",
      status: true,
      nameShop: "Diamond Fashion 3",
      imageShop: "banner-right-2.jpg",
      quantityItems: 1312,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop4",
      status: true,
      nameShop: "Diamond Fashion 4",
      imageShop: "tiktok.jpg",
      quantityItems: 2131,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop5",
      status: true,
      nameShop: "Diamond Fashion 5",
      imageShop: "facebook.jpg",
      quantityItems: 12,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop6",
      status: true,
      nameShop: "Diamond Fashion 6",
      imageShop: "tiktok.jpg",
      quantityItems: 2131,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop7",
      status: false,
      nameShop: "Diamond Fashion 7",
      imageShop: "facebook.jpg",
      quantityItems: 12,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    }
  ];
  /*LOẠI SẢN PHẨM */
  const [selectCategory, setSelectCategory] = useState("");
  const handleSelectCategoryChange = (event) => {
    setSelectCategory(event.target.value);
  };
  /*PHÂN LOẠI SẢN PHẨM */
  const [selectCategoryItem, setSelectCategoryItem] = useState("");
  const handleSelectCategoryItemChange = (event) => {
    setSelectCategoryItem(event.target.value);
  };
  /*SHOP*/
  const [selectShop, setSelectShop] = useState("");
  const handleSelectShop = (event) => {
    setSelectShop(event.target.value);
  };
  return (
    <React.Fragment>
      <div id="product">
        <div className={`path`}>ADMIN / Sản Phẩm</div>
        <div className={`edit-profile`}>
          <form className={`mb-3`}>
            <div className={`mb-3`}>
              <label htmlFor="selectedImage" className="label-selected">
                <i class="bx bxs-camera me-1"></i>Chọn Ảnh
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFilesChange}
                id="selectedImage"
              />
              <div className={`form-selected mt-2`}>
                {selectedFiles.map((value) => (
                  <img
                    src={URL.createObjectURL(value)}
                    alt="Hình Ảnh"
                    className="selected-image"
                  />
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Gian Hàng</label>
              <select
                className="form-control"
                value={selectShop}
                onChange={handleSelectShop}
              >
                <option value="">Gian hàng...</option>
                {shops.map((option, index) => (
                  <option key={option.idShop} value={option.idShop}>
                    {option.nameShop}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="nameProduct" className="form-label">
                Tên Sản Phẩm
              </label>
              <input
                type="text"
                className="form-control"
                id="nameProduct"
                placeholder="Tên sản phẩm..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nameProduct" className="form-label">
                Giá
              </label>
              <input
                type="text"
                className="form-control"
                id="nameProduct"
                placeholder="Giá sản phẩm..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nameProduct" className="form-label">
                Giảm Giá
              </label>
              <input
                type="text"
                className="form-control"
                id="nameProduct"
                placeholder="Giảm giá (%)..."
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Loại Sản Phẩm</label>
              <select
                className="form-control"
                value={selectCategory}
                onChange={handleSelectCategoryChange}
              >
                <option value="">Loại sản phẩm...</option>
                {categories.map((option, index) => (
                  <option key={option.idCategory} value={option.idCategory}>
                    {option.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              {selectCategory !== "" && (
                <>
                  <label className="form-label">Phân Loại Sản Phẩm</label>
                  <select
                    className="form-control"
                    value={selectCategoryItem}
                    onChange={handleSelectCategoryItemChange}
                  >
                    <option value="">Phân loại sản phẩm...</option>
                    {categoryItem.map((option) =>
                      option.idCategory === selectCategory ? (
                        <option
                          key={option.idCategoryItem}
                          value={option.idCategoryItem}
                          selected
                        >
                          {option.type}
                        </option>
                      ) : null
                    )}
                  </select>
                </>
              )}
            </div>
            <button type="submit" class="btn btn-primary">
              LƯU THAY ĐỔI
            </button>
          </form>
        </div>
        <div className={`content mt-3`}>
          <div className={"heading"}>
            <label>DANH SÁCH SẢN PHẨM</label>
          </div>
          <div className={`search`}>
            <i className={`bx bx-search`} onClick={openSearchForm} />
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Hình Ảnh</th>
                <th>Gian Hàng</th>
                <th>Tên Sản Phẩm</th>
                <th>Phân Loại</th>
                <th>Giá Sản Phẩm</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((value, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <img src={"/images/" + value.image} alt="Hình Ảnh" />
                  </td>
                  <td>{value.id_shop}</td>
                  <td>{value.product_name}</td>
                  <td>{value.id_category}</td>
                  <td>{formatCurrency(value.price, value.promotion_price)}</td>
                  <td>
                    <span className={`edit me-2`}>
                      <a href="#edit">
                        <i class="bx bx-pencil"></i>
                      </a>
                    </span>
                    <span className={`delete`}>
                      <a href="#delete">
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
    </React.Fragment>
  );
}

export default Products;
