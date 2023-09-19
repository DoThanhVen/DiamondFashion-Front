import React, { useState } from "react";
import "../css/admin/account.css";

function Accounts() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const openSearchForm = () => {
    setIsOpenSearch(true);
  };
  const closeSearchForm = () => {
    setIsOpenSearch(false);
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
  const accounts = [
    {
      image: "tiktok.jpg",
      account: "ven@gmail.com",
      fullname: "Đỗ Thanh Vẹn",
      role: ["USER", "ADMIN"]
    },
    {
      image: "banner-left.jpg",
      account: "trinhtrantrangtrong@gmail.com",
      fullname: "Trịnh Trần Trang Trọng",
      role: ["USER", "ADMIN", "BUSINESS"]
    },
    {
      image: "banner-right-1.jpg",
      account: "khuong@gmail.com",
      fullname: "Nguyễn Duy Khương",
      role: ["USER", "BUSINESS"]
    },
    {
      image: "banner-right-2.jpg",
      account: "nguyenvanan@gmail.com",
      fullname: "Nguyễn Văn An",
      role: ["USER", "BUSINESS"]
    }
  ];
  return (
    <React.Fragment>
      <div id="account">
        <div className={`path`}>ADMIN / Tài Khoản</div>
        <div className={`edit-profile`}>
          <form className={`mb-3`}>
            <div className={`mb-3`}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="selectedImage"
              />
              <label htmlFor="selectedImage" className="label-selected"><i class='bx bxs-camera me-1'></i>Chọn Ảnh</label>
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
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Họ & Tên
              </label>
              <input type="text" className="form-control" id="fullname" />
            </div>
            <div className={`mb-3`}>
              <div className={`role`}>
                <input
                  type="checkbox"
                  name="role"
                  className={`me-2`}
                  id="roleAdmin"
                />
                <label htmlFor="roleAdmin" className="form-label">
                  ADMIN
                </label>
              </div>
              <div className={`role`}>
                <input
                  type="checkbox"
                  name="role"
                  className={`me-2`}
                  id="roleUser"
                />
                <label htmlFor="roleUser" className="form-label">
                  USER
                </label>
              </div>
              <div className={`role`}>
                <input
                  type="checkbox"
                  name="role"
                  className={`me-2`}
                  id="roleBusiness"
                />
                <label htmlFor="roleBusiness" className="form-label">
                  BUSINESS
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              LƯU THAY ĐỔI
            </button>
          </form>
        </div>
        <div className={`content mt-3`}>
          <div className={"heading"}>DANH SÁCH TÀI KHOẢN</div>
          <div className={`search`}>
            <i className={`bx bx-search`} onClick={openSearchForm} />
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Hình Ảnh</th>
                <th>Email</th>
                <th>Họ & Tên</th>
                <th>Quyền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((value, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <img src={"/images/" + value.image} alt="Hình Ảnh" />
                  </td>
                  <td>{value.account}</td>
                  <td>{value.fullname}</td>
                  <td>
                    <ul>
                      {value.role.map((role, roleIndex) => (
                        <li key={roleIndex}>{role}</li>
                      ))}
                    </ul>
                  </td>
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
    </React.Fragment>
  );
}

export default Accounts;
