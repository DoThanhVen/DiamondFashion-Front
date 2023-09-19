import React from "react";
import "../css/user/login.css";

function Login() {
  const showPassword = (event) => {
    const eye = event.currentTarget;
    const inputPass = document.querySelector("input#password");
    eye.classList.toggle("bi-eye");
    if (eye.classList.contains("bi-eye")) {
      inputPass.type = "text";
    } else {
      inputPass.type = "password";
    }
  };
  return (
    <React.Fragment>
      <div id="login">
        <div className={`heading`}>
          <a href="/" className={`logo`}>
            Diamond Fashion
          </a>
        </div>
        <div className={`content`}>
          <div className={`column`}>
            <img src="images/login.jpg"></img>
          </div>
          <div className={`column`}>
            <div className={`heading mb-3`}>ĐĂNG NHẬP</div>
            <div className={`title mb-3`}>
              Xin chào! Chúng tôi rất hạnh phúc khi bạn ghé Website thời trang
              của chúng tôi.
            </div>
            <form>
              <div className={`mb-3`}>
                <label htmlFor="username">Email</label>
                <input id="username" type="text"></input>
              </div>
              <div className={`mb-3`}>
                <label htmlFor="password">Mật Khẩu</label>
                <input id="password" type="password"></input>
                <i class="bi bi-eye-slash" onClick={showPassword}></i>
              </div>
              <div className={`others mb-3`}>
                <div className={`remember`}>
                  <input id="remember-me" type="checkbox"></input>
                  <label htmlFor="remember-me" className={`ms-1`}>
                    Nhớ mật khẩu ?
                  </label>
                </div>
                <div className={`forgot-password`}>Quên mật khẩu ?</div>
              </div>
              <button type="submit">Đăng Nhập</button>
              <div className={`sign-up mt-1 mb-1`}>
                Bạn chưa có tài khoản ? <a href="/sign-up">Đăng Kí</a>
              </div>
              <span className={`mb-3`}>Hoặc</span>
              <div className={`OAuth2`}>
                <a className={`btn google`} href="#">
                  <img className={`me-2`} src="images/google.jpg"></img>
                  Đăng nhập bằng Google
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
