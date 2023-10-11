import React from 'react';
import "../css/user/register_login.css"

function SignUp() {
  return (
    <section className="signup ">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Đăng ký tài khoản</h2>
            <form  className="register-form" id="register-form">
              <div className="form-group">
                <label>
                <i className="fa-solid fa-user"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Vui lòng nhập tên của bạn"
                />
              </div>
              <div className="form-group">
                <label>
                <i className="fa-solid fa-envelope"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Vui lòng nhập email"
                />
              </div>
              <div className="form-group">
                <label>
                <i class="fa-solid fa-lock"></i>
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Vui lòng nhập mật khẩu"
                />
              </div>
              <div className="form-group">
                <label>
                <i class="fa-solid fa-lock"></i>
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label  className="label-agree-term ml-2">
                  <span>
                    <span></span>
                  </span>
                  Tôi đồng ý với tất cả các{' '}
                  <a href="#" className="term-service">
                    Điều khoản và Chính sách
                  </a>
                </label>
              </div>
              <div className="form-group form-button">
              <button type="button" class="btn btn-secondary">Đăng ký</button>
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src="images/log.jpg" alt="sign up image" />
            </figure>
            <a href="#" className="signup-image-link">
              I am already a member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
