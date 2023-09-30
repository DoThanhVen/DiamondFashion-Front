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
      <section className="signup-section" style={{marginTop: '50px'}}>
      <div className="container">
        <div className="row align-items-center gx-lg-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <p className="my-5 display-5 fw-bold ls-tight">
            Chào mừng bạn trở lại <br />
              <span className="text-primary">Hãy để chúng tôi phục vụ bạn</span>
            </p>
            {/* <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p> */}
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card">
              <div className="card-body py-5 px-md-5">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" />
                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label className="form-check-label" htmlFor="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* <div id="login">
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
      </div> */}
    </React.Fragment>
  );
}
export default Login;
