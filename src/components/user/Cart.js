import React, { useState, useEffect } from "react";
import MainNavbar from "../../page/user/Navbar";
import Footer from "../../page/user/Footer";
import "../css/user/cart.css";
import "../css/user/home.css";

function Cart() {

  return (
    <>
      <nav>
        <MainNavbar />
      </nav>

      <div className="container mt-4">
        <div className="row">
          <div className="col-xl-8">
            <div className="card border shadow-none mb-4">
              <div className="card-body">

                <div className="d-flex align-items-start border-bottom pb-3">
                  <div className="me-4">
                    <img src="https://www.bootdey.com/image/380x380/008B8B/000000" style={{ width: '80px', height: '80px' }} alt="" className="avatar-lg rounded" />
                  </div>
                  <div className="flex-grow-1 align-self-center overflow-hidden">
                    <div>
                      <h5 className="text-truncate font-size-18"><a href="#" className="text-dark">Waterproof Mobile Phone </a></h5>
                      <p className="text-muted mb-0">
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star-half text-warning"></i>
                      </p>
                      <p className="mb-0 mt-1">Color : <span className="fw-medium">Gray</span></p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ms-2">
                    <ul className="list-inline mb-0 font-size-16">
                      <li className="list-inline-item">
                        <a href="#" className="text-muted px-1">
                          <i class="fa-regular fa-trash-can"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="text-muted px-1">
                          <i class="fa-regular fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mt-3">
                        <p className="text-muted mb-2">Giá</p>
                        <h5 className="mb-0 mt-2"><span className="text-muted me-2"><del className="font-size-16 fw-normal">$500</del></span>$450</h5>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="mt-3">
                        <p className="text-muted mb-2">Số lượng</p>
                        <div className="d-inline-flex">
                          <select className="form-select form-select-sm w-xl">
                            <option value="1">1</option>
                            <option value="2" selected="">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mt-3">
                        <p className="text-muted mb-2">Thành tiền</p>
                        <h5>$900</h5>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="row my-4">
              <div className="col-sm-6">
                <a href="/" className="btn btn-link text-muted">
                  <i class="fa-solid fa-arrow-left me-1"></i> Tiếp tục mua sắm </a>
              </div>
              <div className="col-sm-6">
                <div className="text-sm-end mt-2 mt-sm-0">
                  <a href="/checkOut" className="btn btn-success">
                    <i class="fa-solid fa-cart-shopping me-1"></i> Tiến hành thanh toán </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <h5 className="font-size-16">Ghi chú </h5>
            <textarea className="form-control mb-3" id="order-comments" rows="5"></textarea>
            <div className="mt-5 mt-lg-0">
              <div className="card border shadow-none">
                <div className="card-header bg-transparent border-bottom py-3 px-4">
                  <h5 className="font-size-16 mb-0">Tóm tắt</h5>
                </div>
                <div className="card-body p-4 pt-2">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td className="text-start">Giảm giá : </td>
                          <td className="text-end">- $ 78</td>
                        </tr>
                        <tr>
                          <td className="text-start">Chi phí vận chuyển :</td>
                          <td className="text-end">$ 25</td>
                        </tr>
                        <tr className="bg-light">
                          <th>Tổng cộng :</th>
                          <td className="text-end">
                            <span className="fw-bold">
                              $ 745.2
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
class ListProducts extends React.Component {
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}
export default Cart;
