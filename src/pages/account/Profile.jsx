import React, { useState, useRef } from "react";
import MainNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import '../account/profile.css';
import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Profile_User() {

  const login = useSelector(state => state.dataLogin);

  const username = login.username;
  const [prepassword, setPrepassword] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  const [id_card, setId_card] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const domain = process.env.REACT_APP_API || "http://localhost:8080";
  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    axios
      .post(domain + "/api/account/updateprofile", { username, password, fullname, id_card, phone, email, city, district, ward, address })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const getdataInfo = async (e) => {
    e.preventDefault()
    axios
      .post(domain + "/api/account/profile", { username })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          alert(response.data.fullname);
        } else {
          alert(response.data.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleChangePass = async (e) => {
    e.preventDefault()
    if (prepassword == "1") {
      if (password == repassword) {
        if (password == prepassword) {
          alert("MẬT KHẨU MỚI KHÔNG ĐƯỢC TRÙNG VỚI MẬT KHẨU CŨ!")
        } else {
          axios
            .post(domain + "/api/account/changepass", { username, password })
            .then(response => {
              console.log(response);
              if (response.data.success) {
                alert(response.data.message);
              } else {
                alert(response.data.message);
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
      else {
        alert("MẬT KHẨU NHẬP LẠI KHÔNG KHỚP!");
      }
    } else {
      alert("BẠN NHẬP SAI MẬT KHẨU HIỆN TẠI!");
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Xử lý tệp ảnh đã chọn ở đây
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <React.Fragment>
        <nav>
          <MainNavbar />
        </nav>
        <div class="container mt-4">
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="card-profile h-100">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div className="user-avatar" style={{ cursor: 'pointer' }}>
                        <img
                          src={selectedImage || "https://bootdey.com/img/Content/avatar/avatar7.png"}
                          alt="user"
                          onClick={handleImageClick}
                        />
                        <input
                          type="file"
                          accept="/image/*"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                      </div>
                      <h5 class="user-name">{login.username}</h5>
                      <h6 class="user-date">Ngày tạo: 20/10/2023</h6>
                    </div>
                    <div class="about">

                      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Đổi mật khẩu
                      </button>

                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Đổi mật khẩu</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <div className="col-12">
                                <label for="inputpass1" className="form-label">Mật khẩu cũ:</label>
                                <input type="password" className="form-control" onChange={e => setPrepassword(e.target.value)} id="prepassword" />
                              </div>
                              <div className="col-12">
                                <label for="inputpass2" className="form-label">Mật khẩu:</label>
                                <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="password" />
                              </div>
                              <div className="col-12">
                                <label for="inputpass3" className="form-label">Nhập lại mật khẩu:</label>
                                <input type="password" className="form-control" onChange={e => setRepassword(e.target.value)} id="repassword" />
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                              <button type="button" class="btn btn-primary" onClick={handleChangePass}>Lưu thay đổi</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12" onReload={getdataInfo}>
              <div class="card-profile h-100">
                <div class="card-body">
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 class="mb-2 text-primary">Thông tin cá nhân</h6>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="fullName">Họ tên:</label>
                        <input type="text" class="form-control" name="fullname" id="fullName" onChange={e => setFullname(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="phone">Số điện thoại:</label>
                        <input type="text" class="form-control" id="phone" onChange={e => setPhone(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="email">Địa chỉ email:</label>
                        <input type="url" class="form-control" id="email" onChange={e => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="email">Giới tính:</label>
                        <div className='d-flex'>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" checked />
                            <label className="form-check-label" for="gridRadios1">
                              Nam
                            </label>
                          </div>
                          <div className="form-check " style={{ marginLeft: '40px' }}>
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" />
                            <label className="form-check-label" for="gridRadios2">
                              Nữ
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 class="mt-3 mb-2 text-primary">Địa chỉ</h6>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="ciTy">Thành phố:</label>
                        <input type="name" class="form-control" id="ciTy" onChange={e => setCity(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="Street">Quận/Huyện</label>
                        <input type="name" class="form-control" id="district" onChange={e => setDistrict(e.target.value)} />
                      </div>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="ward">Phường/Xã</label>
                        <input type="text" class="form-control" id="ward" onChange={e => setWard(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="address">Địa chỉ chi tiết (Số nhà):</label>
                        <input type="text" class="form-control" id="address" onChange={e => setAddress(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="address">Căn cước công dân:</label>
                        <input type="text" class="form-control" id="id_card" onChange={e => setId_card(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div class="row gutters mt-4">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="text-right">
                        <button type="button" id="submit" name="submit" class="btn btn-primary" onClick={handleUpdateProfile}>Cập nhật</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </React.Fragment>
    </>
  );
}

export default Profile_User;