import React, { useState, useEffect } from "react";
import { Navbar, Slogan } from "./Navbar";
import Footer from "./Footer";
import "../css/user/product.css";

function Product() {
  const handleTDClick = (event) => {
    const menuItem = event.currentTarget;
    menuItem.classList.toggle("active");
    const icon = menuItem.querySelector(".bx-chevron-down");

    if (icon) {
      icon.classList.toggle("bx-chevron-up");
    }
  };
  return (
    <React.Fragment>
      <div id="product">
        <nav>
          <Navbar />
        </nav>
        <div id="slogan">
          <Slogan />
        </div>
        <div className={`path`}>Trang Chủ/Sản Phẩm</div>
        <div className={`slider`}>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="images/slider-1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="images/slider-1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="images/slider-1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className={`banner`}>
            <div className={`column`}>
              <img src="images/banner-left.jpg" alt=""></img>
            </div>
            <div className={`column`}>
              <img src="images/banner-left.jpg" alt=""></img>
            </div>
          </div>
        </div>
        <div id="list-products">
          <div className={`heading`}>SẢN PHẨM</div>
          <div className={`content`}>
            <div className={`sidebar`}>
              <div className={`heading`}>THỂ LOẠI</div>
              <ul className="menu">
                <li className={`menu-item`} onClick={handleTDClick}>
                  <header>
                    <label>ÁO</label>
                    <i class="bx bx-chevron-down"></i>
                  </header>
                  <ul className={`sub-menu`}>
                    <li>
                      <a href="#">Tất Cả Áo</a>
                    </li>
                    <li>
                      <a href="#">Áo Thun</a>
                    </li>
                    <li>
                      <a href="#">Áo Thun In Họa Tiết</a>
                    </li>
                    <li>
                      <a href="#">Áo Polo</a>
                    </li>
                    <li>
                      <a href="#">Áo Nỉ & Hoodie</a>
                    </li>
                    <li>
                      <a href="#">Áo Sơ Mi Casual</a>
                    </li>
                    <li>
                      <a href="#">Áo Sơ Mi Công Sở</a>
                    </li>
                    <li>
                      <a href="#">Áo Len</a>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item`} onClick={handleTDClick}>
                  <header>
                    <label>ĐỒ MẶC NGOÀI</label>
                    <i class="bx bx-chevron-down"></i>
                  </header>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Tất Cả Đồ Mặc Ngoài</a>
                    </li>
                    <li>
                      <a href="#">Áo Blouson & Áo Parka</a>
                    </li>
                    <li>
                      <a href="#">Áo Khoác & Áo Blazer</a>
                    </li>
                    <li>
                      <a href="#">AirSense Áo Khoác Siêu Nhẹ</a>
                    </li>
                    <li>
                      <a href="#">Áo Khoác Siêu Nhẹ & Áo Chần Bông</a>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item`} onClick={handleTDClick}>
                  <header>
                    <label>QUẦN</label>
                    <i class="bx bx-chevron-down"></i>
                  </header>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Tất Cả Quần</a>
                    </li>
                    <li>
                      <a href="#">Quần Jean & Quần Jean Màu</a>
                    </li>
                    <li>
                      <a href="#">Quần Dài Đến Mắt Cá</a>
                    </li>
                    <li>
                      <a href="#">Quần Dài Dáng Rộng</a>
                    </li>
                    <li>
                      <a href="#">Quần Chino</a>
                    </li>
                    <li>
                      <a href="#">AirSense Quần Dài Siêu Nhẹ</a>
                    </li>
                    <li>
                      <a href="#">Quần Tây</a>
                    </li>
                    <li>
                      <a href="#">Quần Easy Pants</a>
                    </li>
                    <li>
                      <a href="#">Quần Nỉ</a>
                    </li>
                    <li>
                      <a href="#">Quần Short</a>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item`} onClick={handleTDClick}>
                  <header>
                    <label>ĐỒ MẶC NHÀ</label>
                    <i class="bx bx-chevron-down"></i>
                  </header>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Tất Cả Đồ Mặc Nhà</a>
                    </li>
                    <li>
                      <a href="#">Đồ Mặc Nhà & Pyjama</a>
                    </li>
                    <li>
                      <a href="#">Dép Đi Trong Nhà</a>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item`} onClick={handleTDClick}>
                  <header>
                    <label>PHỤ KIỆN</label>
                    <i class="bx bx-chevron-down"></i>
                  </header>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Tất Cả Phụ Kiện</a>
                    </li>
                    <li>
                      <a href="#">Túi</a>
                    </li>
                    <li>
                      <a href="#">Thắt Lưng</a>
                    </li>
                    <li>
                      <a href="#">Giày & Giày Scandal</a>
                    </li>
                    <li>
                      <a href="#">Kính Mắt</a>
                    </li>
                    <li>
                      <a href="#">Khác</a>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item`} onClick={handleTDClick}>
                  <header>
                    <label>GIÁ</label>
                    <i class="bx bx-chevron-down"></i>
                  </header>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Dưới 1 Triệu</a>
                    </li>
                    <li>
                      <a href="#">Từ 1 - 3 Triệu</a>
                    </li>
                    <li>
                      <a href="#">Từ 3 - 5 Triệu</a>
                    </li>
                    <li>
                      <a href="#">Từ 5 - 10 Triệu</a>
                    </li>
                    <li>
                      <a href="#">Trên 10 Triệu</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={`list-products-item`}>
              <div className={`row container`}>
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-1.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-2.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-3.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-4.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-1.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-2.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-3.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-4.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-1.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-2.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-3.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
                <div className={`item col-md-4 col-sm-6 col-6`}>
                  <img src="images/best-saler-4.jpg"></img>
                  <div className={`content`}>
                    <div className={`sale`}>
                      <i className="bi bi-fire"></i>
                      <span>25%</span>
                    </div>
                    <ul className={`menu`}>
                      <li className={`menu-item`} onClick={handleTDClick}>
                        <i className="bx bx-heart"></i>
                      </li>
                      <li className={`menu-item`} onClick={handleTDClick}>
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
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Product;
