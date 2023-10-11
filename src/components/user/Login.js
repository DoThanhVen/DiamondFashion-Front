import React from "react";
import "../css/user/login.css";
import ReCAPTCHA from "react-google-recaptcha";
// import "../css/user/register_login.css"

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

  const onChange = () => {

  };
  return (
    <React.Fragment>
      {/* <section className="sign-in " style={{marginTop: '60px'}}>
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src="images/Diamond.png" alt="sing up image" />
            </figure>
            <a href="/register" className="signup-image-link">
              Đăng ký tài khoản mới
            </a>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Đăng nhập</h2>
            <form method="POST" className="register-form" id="login-form">
              <div className="form-group">
                <label htmlFor="your_name">
                <i class="fa-solid fa-envelope"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Vui lòng nhập email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="your_pass">
                <i class="fa-solid fa-lock"></i>
                </label>
                <input
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  placeholder="Vui lòng nhập mật khẩu"
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="agree-term"
                />
                <label htmlFor="remember-me" className="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  Ghi nhớ
                </label>
              </div>
              <div className="form-group form-button">
              <button type="button" class="btn btn-warning">Warning</button>
              </div>
            </form>
            <div className="social-login">
              <span className="social-label">Hoặc đăng nhập với</span>
              <i className="fa-brands fa-facebook fa-2xl" style={{color: '#005cfa'}}></i>
              <i className="fa-brands fa-google fa-2xl " style={{color: '#d81818', marginLeft: '10px'}}></i>
              
            </div>
          </div>
        </div>
      </div>
    </section> */}
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

              <ReCAPTCHA
    sitekey="6LdRaIooAAAAAGUGGf1qxK5i-fCsz3Tk-6gnRxlq"
    onChange={onChange}
  />

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
