import React, { useState, useRef } from "react";
import "../css/admin/product.css";

function Storge() {
  /*XỬ LÝ THANH TÌM KIẾM*/
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const openSearchForm = () => {
    setIsOpenSearch(true);
  };
  const closeSearchForm = () => {
    setIsOpenSearch(false);
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
  //DANH SÁCH SẢN PHẨM
  const products = [
    {
      idProduct: "product1",
      image: "banner-right-2.jpg",
      idShop: "shop1",
      productName: "Áo Sơ Mi Nam Cá Tính",
      idCategory: "category1",
      createDate:"24/09/2023",
      quantity: 12,
      color: "Đỏ",
      size: "XL"
    },
    {
      idProduct: "product2",
      image: "banner-right-2.jpg",
      idShop: "shop2",
      productName: "Áo Sơ Mi Nam Cá Tính",
      idCategory: "category1",
      createDate:"24/09/2023",
      quantity: 12,
      color: "Đen",
      size: "XL"
    },
    {
      idProduct: "product3",
      image: "banner-right-2.jpg",
      idShop: "shop3",
      productName: "Áo Sơ Mi Nam Cá Tính",
      idCategory: "category1",
      createDate:"24/09/2023",
      quantity: 12,
      color: "Trắng",
      size: "XL"
    },
    {
      idProduct: "product4",
      image: "banner-right-2.jpg",
      idShop: "shop4",
      productName: "Áo Sơ Mi Nam Cá Tính",
      idCategory: "category1",
      createDate:"24/09/2023",
      quantity: 12,
      color: "Vàng",
      size: "L"
    },
    {
      idProduct: "product5",
      image: "banner-left.jpg",
      idShop: "shop1",
      productName: "Áo Thun Nam",
      idCategory: "category1",
      createDate:"24/09/2023",
      quantity: 12,
      color: "Đỏ",
      size: "XL"
    },
    {
      idProduct: "product6",
      image: "tiktok.jpg",
      idShop: "shop3",
      productName: "Quần Kaki Nam",
      idCategory: "category2",
      createDate:"24/09/2023",
      quantity: 12,
      color: "Đỏ",
      size: "30"
    },
    {
      idProduct: "product7",
      image: "tiktok.jpg",
      idShop: "shop4",
      productName: "Iphone 11",
      idCategory: "category4",
      createDate:"24/09/2023",
      quantity: 12,
      color: "Xanh Ngọc",
      size: ""
    },
    {
      idProduct: "product8",
      image: "tiktok.jpg",
      idShop: "shop5",
      productName: "Iphone 11",
      idCategory: "category4",
      createDate:"24/09/2023",
      quantity: 12,
      color: "Đen",
      size: ""
    },
    {
      idProduct: "product9",
      image: "tiktok.jpg",
      idShop: "shop2",
      productName: "Iphone 13 PROMAX",
      idCategory: "category4",
      createDate:"24/09/2023",
      quantity: 12,
      color: "Đỏ",
      size: ""
    }
  ];
  const [selectProduct, setSelectProduct] = useState("");
  const handleSelectProduct = (event) => {
    setSelectProduct(event.target.value);
  };
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
  const [selectShop, setSelectShop] = useState("");
  const handleSelectShop = (event) => {
    setSelectShop(event.target.value);
    setSelectProduct("");
  };

  return (
    <React.Fragment>
      <div id="product">
        <div className={`path`}>ADMIN / Kho Hàng</div>
        <div className={`edit-profile`}>
          <form className={`mb-3`}>
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
              {selectShop !== "" && (
                <>
                  <label className="form-label">Sản Phẩm</label>
                  <select
                    className="form-control"
                    value={selectProduct}
                    onChange={handleSelectProduct}
                  >
                    <option value="">Sản Phẩm...</option>
                    {products.map((option, index) =>
                      option.idShop === selectShop ? (
                        <option key={option.idProduct} value={option.idProduct}>
                          {option.productName}
                        </option>
                      ) : null
                    )}
                  </select>
                </>
              )}
            </div>
            {products.map((option) =>
              option.idProduct === selectProduct ? (
                option.idCategory === "category1" ||
                option.idCategory === "category2" ||
                option.idCategory === "category3" ||
                option.idCategory === "category4" ? (
                  <div className="mb-3">
                    <label htmlFor="color" className="form-label">
                      Màu Sắc
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="color"
                      placeholder="Màu Sắc..."
                    />
                  </div>
                ) : null
              ) : null
            )}
            {products.map((option) =>
              option.idProduct === selectProduct ? (
                <>
                  {option.idCategory === "category1" ? (
                    <div className="mb-3" key={option.idProduct}>
                      <label htmlFor="color" className="form-label">
                        Kích Thước
                      </label>
                      <select className="form-control">
                        <option value="">Kích Thước</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="Free">Oversize</option>
                      </select>
                    </div>
                  ) : null}
                  {option.idCategory === "category2" ? (
                    <div className="mb-3" key={option.idProduct}>
                      <label htmlFor="color" className="form-label">
                        Kích Thước
                      </label>
                      <select className="form-control">
                        <option value="">Kích Thước...</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                      </select>
                    </div>
                  ) : null}
                </>
              ) : null
            )}
            <div className="mb-3">
              {selectProduct !== "" ? (
                <>
                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                      Số Lượng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="quantity"
                      placeholder="Số Lượng..."
                    />
                  </div>
                </>
              ) : null}
            </div>
            <button type="submit" class="btn btn-primary">
              LƯU THAY ĐỔI
            </button>
          </form>
        </div>
        <div className={`content mt-3`}>
          <div className={"heading"}>
            <label>SỐ LƯỢNG SẢN PHẨM</label>
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
                <th>Chi Tiết</th>
                <th>Số Lượng</th>
                <th>Ngày Nhập</th>
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
                  <td>{value.idShop}</td>
                  <td>{value.productName}</td>
                  <td>
                    {value.color}
                    {value.size}
                  </td>
                  <td>{value.quantity}</td>
                  <td>{value.createDate}</td>
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

export default Storge;
