import React, { useState, useEffect } from "react";
import "../css/admin/home.css";
function Home() {
  function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0
    });
    return formatter.format(price);
  }

  return (
    <React.Fragment>
      <div className={`path`}>ADMIN / Trang Chủ</div>
      <div className={`row`}>
        <div className={`column col-md-6 col-12`}>
          <div className={`card`}>
            <div className={`card-body p-3`}>
              <div className={`row`}>
                <div className={`numbers col-md-8 col-sm-8 col-8`}>
                  <div className={`heading`}>Tài Khoản</div>
                  <span>1,234</span>
                </div>
                <div className={`icon col-md-4 col-sm-4 col-4`}>
                  <i class="bx bx-user-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`column col-md-6 col-12`}>
          <div className={`card`}>
            <div className={`card-body p-3`}>
              <div className={`row`}>
                <div className={`numbers col-md-8 col-sm-8 col-8`}>
                  <div className={`heading`}>Sản Phẩm</div>
                  <span>1,234</span>
                </div>
                <div className={`icon col-md-4 col-sm-4 col-4`}>
                  <i class="bx bxs-t-shirt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`column col-md-6 col-12`}>
          <div className={`card`}>
            <div className={`card-body p-3`}>
              <div className={`row`}>
                <div className={`numbers col-md-8 col-sm-8 col-8`}>
                  <div className={`heading`}>Gian Hàng</div>
                  <span>1,234</span>
                </div>
                <div className={`icon col-md-4 col-sm-4 col-4`}>
                <i class='bx bx-cart-alt'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`column col-md-6 col-12`}>
          <div className={`card`}>
            <div className={`card-body p-3`}>
              <div className={`row`}>
                <div className={`numbers col-md-8 col-sm-8 col-8`}>
                  <div className={`heading`}>Đơn Hàng</div>
                  <span>1,234</span>
                </div>
                <div className={`icon col-md-4 col-sm-4 col-4`}>
                <i class='bx bxs-detail'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`content`}>
        <div className={`top-business`}>
          <div className={"heading"}>THỐNG KÊ</div>
          <div className={"title mb-3"}>
            <b>Top 10 </b>Doanh Thu Tháng
          </div>
          <table>
            <thead>
              <th>STT</th>
              <th>Hình Ảnh Shop</th>
              <th>Tên Shop</th>
              <th>Chủ Shop</th>
              <th>Doanh Thu</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img src="/images/banner-left.jpg" alt="Hình Ảnh" />
                </td>
                <td>Diamond Fashion Shop</td>
                <td>Đỗ Thanh Vẹn</td>
                <td>{formatCurrency(9999999)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
