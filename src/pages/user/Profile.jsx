import React from "react";
import "../css/user/profile.css"
import MainNavbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
function Profile_User() {
  return (
    <>
     <nav>
        <MainNavbar />
      </nav>
      <div className="container mt-4">
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="e-profile">
                      <div className="row">
                        <div className="col-12 col-sm-auto mb-3">
                          <div className="mx-auto" style={{ width: '140px' }}>
                            <div className="d-flex justify-content-center align-items-center rounded" style={{ height: '140px', backgroundColor: 'rgb(233, 236, 239)' }}>
                            <img src="images/best-saler-4.jpg" alt=""
                              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                            ></img>
                            </div>
                          </div>
                        </div>
                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                            {/* <p className="mb-0">@johnny.s</p> */}
                            {/* <div className="text-muted"><small>Last seen 2 hours ago</small></div> */}
                            <div className="mt-2">
                              <button className="btn btn-primary" type="file">
                                <i className="fa fa-fw fa-camera"></i>
                                <span>Thay đổi ảnh</span>
                              </button>
                            </div>
                          </div>
                          <div className="text-center text-sm-right">
                            <span className="badge badge-secondary">Khách hàng</span>
                            <div className="text-muted"><small>31/03/2020</small></div>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs">
                        <li className="nav-item"><a href="" className="active nav-link">Chỉnh sửa thông tin</a></li>
                      </ul>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form className="form" noValidate="">
                            <div className="row">
                              <div className="col">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Tên đầy đủ</label>
                                      <input className="form-control" type="text" name="name" placeholder="John Smith"  />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Tên tài khoản</label>
                                      <input className="form-control" type="text" name="username" placeholder="johnny.s" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input className="form-control" type="text" placeholder="user@example.com" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    {/* <div className="form-group">
                                      <label>About</label>
                                      <textarea className="form-control" rows="5" placeholder="My Bio"></textarea>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-6 mb-3 mt-4">
                                <div className="mb-2"><b>Thay đổi mật khẩu</b></div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Mật khẩu hiện tại</label>
                                      <input className="form-control" type="password" placeholder="••••••" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Mật khẩu mới</label>
                                      <input className="form-control" type="password" placeholder="••••••" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Nhập lại mật khẩu mới</label>
                                      <input className="form-control" type="password" placeholder="••••••" /></div>
                                  </div>
                                </div>
                              </div>
                           
                            </div>
                            <div className="row">
                              <div className="col d-flex justify-content-end">
                              <div className="text-end mt-2 mt-sm-0">
                    <button href="#" className="btn btn-success">
                    <i className="fa-regular fa-floppy-disk"></i> Lưu thay đổi </button>
                  </div>
                               
                              </div>
                            </div>
                          </form>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-12 col-md-3 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title font-weight-bold">Support</h6>
                    <p className="card-text">Get fast, free help from our friendly assistants.</p>
                    <button type="button" className="btn btn-primary">Contact Us</button>
                  </div>
                </div>
              </div> */}
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

export default Profile_User;