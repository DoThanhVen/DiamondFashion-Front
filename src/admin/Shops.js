import React, { useState } from "react";
import "../css/admin/shop.css";

function Shops() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const openSearchForm = () => {
    setIsOpenSearch(true);
  };
  const closeSearchForm = () => {
    setIsOpenSearch(false);
  };

  const [activeShop, setActiveShop] = useState(null);

  const handleClickShowNav = (shopId) => {
    setActiveShop(shopId === activeShop ? null : shopId);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataURL = event.target.result;
        setSelectedImage(imageDataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const shops = [
    {
      idShop: "shop1",
      status: true,
      nameShop: "Diamond Fashion",
      imageShop: "banner-left.jpg",
      quantityItems: 150,
      createDate: "19/09/2023",
      businessShop: "Đỗ Thanh Vẹn"
    },
    {
      idShop: "shop2",
      status: false,
      nameShop: "Diamond Fashion",
      imageShop: "banner-right-1.jpg",
      quantityItems: 337,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop3",
      status: true,
      nameShop: "Diamond Fashion",
      imageShop: "banner-right-2.jpg",
      quantityItems: 1312,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop4",
      status: true,
      nameShop: "Diamond Fashion",
      imageShop: "tiktok.jpg",
      quantityItems: 2131,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop5",
      status: true,
      nameShop: "Diamond Fashion",
      imageShop: "facebook.jpg",
      quantityItems: 12,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop6",
      status: true,
      nameShop: "Diamond Fashion",
      imageShop: "tiktok.jpg",
      quantityItems: 2131,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    },
    {
      idShop: "shop7",
      status: false,
      nameShop: "Diamond Fashion",
      imageShop: "facebook.jpg",
      quantityItems: 12,
      createDate: "19/09/2023",
      businessShop: "Nguyễn Văn An"
    }
  ];
  return (
    <React.Fragment>
      <div id="shop">
        <div className={`path`}>ADMIN / Gian Hàng</div>
        <div className={`edit-profile mb-3`}>
          <form className={`mb-3`}>
            <div className={`mb-3`}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="selectedImage"
              />
              <label htmlFor="selectedImage" className="label-selected">
                <i class="bx bxs-camera me-1"></i>Chọn Ảnh
              </label>
              {selectedImage && (
                <div className={`form-selected`}>
                  <img
                    src={selectedImage}
                    alt="Hình Ảnh"
                    className="selected-image"
                  />
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="account" className="form-label">
                Tài Khoản Tạo
              </label>
              <input type="email" className="form-control" id="account" />
            </div>
            <div className="mb-3">
              <label htmlFor="shopName" className="form-label">
                Tên Shop
              </label>
              <input type="email" className="form-control" id="shopName" />
            </div>
            <div className={`mb-3`}>
              <div className={`role`}>
                <input
                  type="radio"
                  name="status"
                  className={`me-2`}
                  id="roleAdmin"
                />
                <label htmlFor="roleAdmin" className="form-label">
                  Hoạt Động
                </label>
              </div>
              <div className={`role`}>
                <input
                  type="radio"
                  name="status"
                  className={`me-2`}
                  id="roleUser"
                />
                <label htmlFor="roleUser" className="form-label">
                  Cấm Hoạt Động
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              LƯU THAY ĐỔI
            </button>
          </form>
        </div>
        <div className={`shops`}>
          <div className={`sort-and-search`}>
            <div className={`sort`}>
              <div className={`sort-item`}>
                <label className={`me-2`} htmlFor={`all`}>Tất Cả</label>
                <input type={`radio`} id={`all`} name={`status`}></input>
              </div>
              <div className={`sort-item`}>
                <label className={`me-2`} htmlFor={`isActive`}>Hoạt Động</label>
                <input type={`radio`} id={`isActive`} value="true" name={`status`}></input>
              </div>
              <div className={`sort-item`}>
                <label className={`me-2`} htmlFor={`band`}>Cấm Hoạt Động</label>
                <input type={`radio`} id={`band`} value="false" name={`status`}></input>
              </div>
            </div>
            <div className={`search`}>
              <i className={`bx bx-search`} onClick={openSearchForm} />
            </div>
          </div>
          <div className={`content`}>
            {shops.map((value, key) => (
              <a href={"#" + value.idShop} className={`card  ${value.status ? "" : "band"}`} key={key}>
                <div className={`card-header`}>
                  <label>{value.nameShop} </label>{" "}
                  <i
                    className={`bx bxs-chevron-down ${
                      activeShop === value.idShop ? "bxs-chevron-up" : ""
                    }`}
                    onClick={() => handleClickShowNav(value.idShop)}
                  ></i>
                </div>
                <div className={`card-body`}>
                  <div className={`image-shop`}>
                    <img
                      src={"/images/" + value.imageShop}
                      alt="Hình Ảnh"
                    ></img>
                  </div>
                  <div className={`title`}>
                    <div className={`heading`}>Thông Tin</div>
                    <div className={`numbers`}>
                      Đăng Bán {value.quantityItems} Sản Phẩm
                    </div>
                    <div className={`create-date`}>
                      Ngày Tạo Shop: {value.createDate}
                    </div>
                  </div>
                </div>
                <div className={`card-footer`}>
                  <div className={`business`}>
                    Chủ Shop: {value.businessShop}
                  </div>
                </div>
                <ul
                  className={`action menu ${
                    activeShop === value.idShop ? "active" : ""
                  }`}
                >
                  <li className={`menu-item`}>
                    <a href="#edit">
                      <i className="bx bx-pencil"></i>
                      <label>Chỉnh Sửa</label>
                    </a>
                  </li>
                  <li className={`menu-item`}>
                    <a href="#band">
                      <i className="bx bx-x"></i>
                      <label>Cấm Bán</label>
                    </a>
                  </li>
                </ul>
                <span className={`show-band`}>BAND</span>
              </a>
            ))}
          </div>
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

export default Shops;
