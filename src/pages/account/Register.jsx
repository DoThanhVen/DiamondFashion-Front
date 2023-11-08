import MainNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { CheckBox } from "@mui/icons-material";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();
  const domain = process.env.REACT_APP_API || "http://localhost:8080";
  const handleRegis = async (e) => {
    if (password == repassword) {
      e.preventDefault()
      axios
        .post(domain + "/api/account/register", { username, password })
        .then(response => {
          console.log(response);
          if (response.data.success) {
            alert(response.data.message)
            navigate("/login")
          } else {
            alert(response.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      alert("MẬT KHẨU NHẬP LẠI KHÔNG KHỚP!");
    }
  };
  return (
    <React.Fragment>
      <div>
        <nav >
          <MainNavbar />
        </nav>
        <div id="main-wrapper" className="container ">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card border-0 ">
                <div className="card-body p-0">
                  <div className="row no-gutters">
                    <div className="col-lg-6 ">
                      <div className="p-5">
                        <img src="images/Register.png" alt=""
                          style={{ height: '480px' }}
                        ></img>
                      </div>
                      <p className="text-muted text-center mt-3 mb-0">Bạn đã có tài khoản? <a href="/login" className="text-primary ml-1">Đăng nhập</a></p>
                    </div>
                    <div className="col-lg-6">
                      <div className="p-4">
                        <div className="mb-2">
                          <h3 className="h4 font-weight-bold text-theme">Đăng ký</h3>
                        </div>
                        <h6 className="h5 mb-0">Chào mừng đến với Diamond Shop!</h6>
                        <p className="text-muted mt-2 mb-4">Vui lòng nhập tất cả thông tin vào form bên dưới.</p>
                        <form className="row g-3">
                          <div className="col-md-6">
                            <label for="inputUsername" className="form-label">Tên tài khoản:</label>
                            <input type="text" className="form-control" id="username" onChange={e => setUsername(e.target.value)} />
                          </div>
                          <div className="col-12">
                            <label for="inputAddress2" className="form-label">Mật khẩu:</label>
                            <input type="password" className="form-control" id="passwordd" onChange={e => setPassword(e.target.value)} />
                          </div>
                          <div className="col-12">
                            <label for="inputAddress2" className="form-label">Nhập lại mật khẩu:</label>
                            <input type="password" className="form-control" id="repassword" onChange={e => setRepassword(e.target.value)} />
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="checkBox" />
                              <label className="form-check-label" for="gridCheck">
                                Đã đọc và đồng ý với các <a href='/policy'>chính sách và điều khoản</a>
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={handleRegis}>Đăng ký</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
        <div id="footer">
          <Footer />
        </div>
      </div >
    </React.Fragment>
  );
}
export default Register;
