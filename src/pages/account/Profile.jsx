import React, { useState, useRef, useEffect } from "react";
import MainNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import '../account/profile.css';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Navigate, useNavigate } from "react-router";

function Profile_User() {

  const navigate = useNavigate();
  const login = useSelector(state => state.dataLogin);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isButtonUpdateDisabled, setButtonUpdateDisabled] = useState(false);
  const [gt, setGt] = useState(0);

  const [inpProfile, setInpProfile] = useState(true);

  const username = "account1";
  const id_account = "16";
  const [prepassword, setPrepassword] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [id_card, setId_card] = useState("");
  const [gender, setGender] = useState(0);
  const [profile, setProfile] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const domain = process.env.REACT_APP_API || "http://localhost:8080";

  useEffect(() => {
    axios
      .get(domain + "/api/account/profile/" + id_account)
      .then(response => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }, [])

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    if (fullname === "" || phone === "" || email === "" || id_card === "") {
      alert("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN!")
    } else {
      axios
        .post(domain + "/api/account/updateprofile/" + username, { fullname, id_card, phone, gender, email })
        .then(response => {
          console.log(response);
          if (response.data.success) {
            alert(response.data.message);
            setButtonDisabled(true);
            setButtonUpdateDisabled(false);
            setInpProfile(true);
            window.location.reload();
          } else {
            alert(response.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  const handleChangePass = async (e) => {
    e.preventDefault()
    if (prepassword === "") {
      alert("VUI LÒNG NHẬP MẬT KHẨU CŨ CỦA BẠN!");
    }
    else if (prepassword === "1") {
      if (password === "") {
        alert("VUI LÒNG NHẬP MẬT KHẨU MỚI CỦA BẠN!");
      } else {
        if (password === repassword) {
          if (password === prepassword) {
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
      }
    } else {
      alert("BẠN NHẬP MẬT KHẨU CŨ KHÔNG CHÍNH XÁC!");
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Xử lý tệp ảnh đã chọn ở đây
      setSelectedImage(URL.createObjectURL(file));
    }

  }

  const handleEdit = async (e) => {
    setFullname(profile.fullname);
    setPhone(profile.phone);
    setEmail(profile.email);
    setId_card(profile.id_card);
    setButtonDisabled(false);
    setButtonUpdateDisabled(true);
    setInpProfile(false);
    setProfile([]);
  }
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
                      <h5 class="user-name">{username}</h5>
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
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div class="card-profile h-100">
                <div class="card-body">
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 class="mb-2 text-primary">Thông tin cá nhân</h6>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="fullName">Họ tên:</label>
                        <input type="text" class="form-control" disabled={inpProfile} name="fullname" id="fullName" value={fullname} placeholder={profile.fullname} onChange={e => setFullname(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="phone">Số điện thoại:</label>
                        <input type="text" class="form-control" disabled={inpProfile} id="phone" value={phone} placeholder={profile.phone} onChange={e => setPhone(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="email">Địa chỉ email:</label>
                        <input type="url" class="form-control" id="email" disabled={inpProfile} value={email} placeholder={profile.email} onChange={e => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="id_card">Căn cước công dân:</label>
                        <input type="text" class="form-control" id="id_card" disabled={inpProfile} value={id_card} placeholder={profile.id_card} onChange={e => setId_card(e.target.value)} />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="email">Giới tính:</label>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          defaultValue={gt}
                        >
                          <FormControlLabel value={0} onChange={e => setGender(e.target.value)} control={<Radio />} chek label="Nam" />
                          <FormControlLabel value={1} onChange={e => setGender(e.target.value)} control={<Radio />} label="Nữ" />
                          <FormControlLabel value={2} onChange={e => setGender(e.target.value)} control={<Radio />} label="Khác" />
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row gutters mt-4">
                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <div class="text-right">
                      <button type="button" id="submit_update" name="submit" class="btn btn-primary" onClick={handleUpdateProfile} disabled={isButtonDisabled}>Cập nhật</button>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div class="text-right">
                      <button type="button" id="submit" name="submit" class="btn btn-primary" onClick={handleEdit} disabled={isButtonUpdateDisabled}>Chỉnh sửa</button>
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