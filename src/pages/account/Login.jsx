import React from "react";
import "../account/login.css";
import MainNavbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
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
                        <h3 className="h4 font-weight-bold text-theme">Login</h3>
                      </div>

                      <h6 className="h5 mb-0">Welcome back!</h6>
                      <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>

                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input typeName="email" className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="form-group mb-5">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Login</button>
                        <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                        </div>
                        <div className="or">
							<span>or signup using</span>
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
                       style={{ height: '500px'}}
                      ></img>
                  </div>
                  </div>
                </div>

              </div>
            </div>

            <p className="text-muted text-center mt-3 mb-0">Don't have an account? <a href="register.html" className="text-primary ml-1">register</a></p>



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
