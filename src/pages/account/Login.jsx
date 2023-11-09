import React, { useState } from "react";
import "../account/login.css";
import MainNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDataLogin } from "../../service/Actions";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const data = {
    username: username,
    password: password
  };

  const domain = process.env.REACT_APP_API || "http://localhost:8080";
  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post(domain + "/api/account/login", { username, password })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          dispatch(getDataLogin(data));
          alert(response.data.message)
          navigate("/")
        } else {
          alert(response.data.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const onChange = () => {

  };
  return (
    <>
      <nav >
        <MainNavbar />
      </nav>
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0 ">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="mb-5">
                        <h3 className="h4 font-weight-bold text-theme">Đăng nhập</h3>
                      </div>
                      <h6 className="h5 mb-0">Chào mừng đến với Diamond Shop!</h6>
                      <p className="text-muted mt-2 mb-5">Nhập tên đăng nhập và mật khẩu của bạn để truy cập.</p>
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Tên Tài Khoản</label>
                          <input typeName="email" className="form-control" id="username"
                            onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group mb-5 mt-4">
                          <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                          <input type="password" className="form-control" id="password"
                            onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="d-flex justify-content-between">
                          <button type="submit" className="btn btn-primary" onClick={handleLogin}>Đăng nhập</button>
                          <a href="/forgotPass" className="forgot-link float-right text-primary">Quên mật khẩu?</a>
                        </div>
                        <div className="or mt-4">
                          <span>hoặc</span>
                        </div>
                        <div className="row gutters">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <button type="submit" className="btn btn-danger btn-block">Twitter</button>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <button type="submit" className="btn btn-primary btn-block">Facebook</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="p-5">
                      <img src="images/san-thuong-mai-dien-tu-la-gi.webp" alt=""
                        style={{ height: '400px' }}
                      ></img>
                    </div>
                    <p className="text-muted text-center mt-3 mb-0">Bạn không có tài khoản? <a href="/register" className="text-primary ml-1">Đăng ký</a></p>
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
    </>
  );
}
export default Login;