import React, { useState, useEffect } from "react";
import { Navbar } from "../../page/user/Navbar";
import Footer from "../../page/user/Footer";
import "../css/user/cart.css";
import "../css/user/home.css";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const [isActive, setIsActive] = useState(false);
  const checkScreenSize = () => {
    if (window.innerWidth <= 776) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    });
    return formatter.format(price);
  }
  
  useEffect(() => {
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
  }, []);
  return (
    <React.Fragment>
      <div id="cart">
        <nav>
          {/* <Navbar /> */}
        </nav>
        <div className={`list-carts`}>
          <table>
            <thead>
              <th></th>
              <th>Hình Ảnh</th>
              <th>Tên Sản Phẩm</th>
              <th>Chi Tiết</th>
              <th>Số Lượng</th>
              <th>Giá</th>
              <th style={{ display: isActive ? "block" : "none" }}>
                Thông Tin Sản Phẩm
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <img src="images/banner-left.jpg" alt="Hình Ảnh Sản Phẩm" />
                </td>
                <td>
                  Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành
                  Cho Mọi Lứa Tuổi Áo Khoác Cá Tính Dành Cho Mọi Lứa Tuổi Áo
                  Khoác Cá Tính Dành Cho{" "}
                </td>
                <td>Xanh Dương - XXL - Nam</td>
                <td>
                  <span className="me-2" onClick={decreaseQuantity}>
                    -
                  </span>
                  {quantity}
                  <span className="ms-2" onClick={increaseQuantity}>
                    +
                  </span>
                </td>
                <td>{formatCurrency(quantity * 120000)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`buy-products`}>
          <div className={`buy-all-products`}>
            <input id="buy-all" type="checkbox" className={`me-3`} />
            <label htmlFor="buy-all">Chọn tất cả (10)</label>
          </div>
          <div className={`total`}>
            <label className={`me-2`}>Thành tiền (5): 1.290.000 VNĐ</label>
            <button type="submit" className={`btn btn-danger`}>
              ĐẶT HÀNG
            </button>
          </div>
        </div>
        <ListProducts />
        <div id="footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
class ListProducts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="list-products">
          <div className="heading">XEM THÊM SẢN PHẨM</div>
          <div className={`list-products row container`}>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
            <div className={`item col-md-3 col-sm-6 col-6`}>
              <img src="images/best-saler-1.jpg"></img>
              <div className={`content`}>
                <div className={`sale`}>
                  <i className="bi bi-fire"></i>
                  <span>25%</span>
                </div>
                <ul className={`menu`}>
                  <li className={`menu-item`}>
                    <i className="bx bx-heart"></i>
                  </li>
                  <li className={`menu-item`}>
                    <i className="bx bx-cart-add"></i>
                  </li>
                </ul>
                <span className={`title`}>
                  Áo Thun Unisex Nam Nữ Cực Xinh, Dễ Phối Đồ
                </span>
                <div className={`price`}>
                  <del>300,000</del>
                  <span>255,000</span>
                </div>
                <span className={`sold`}>3.2k</span>
              </div>
            </div>
          </div>
          <div className={`pages`}>
            <span className={`first`}>
              <i className="bx bxs-chevron-left"></i>
            </span>
            <span className={`page-number-prev`}>1</span>
            <span className={`page-number-center`}>2</span>
            <span className={`page-number-next`}>3</span>
            <span className={`last`}>
              <i className="bx bxs-chevron-right"></i>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Cart;
