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
  const Top10 = [
    {
      image: "banner-left.jpg",
      nameShop: "Diamond Fashion",
      business: "Đỗ Thanh Vẹn",
      total: 125000000
    },
    {
      image: "banner-right-1.jpg",
      nameShop: "Diamond Fashion",
      business: "Nguyễn Văn An",
      total: 1350000
    },
    {
      image: "banner-right-2.jpg",
      nameShop: "Diamond Fashion",
      business: "Trần Thị Bình",
      total: 333000
    },
    {
      image: "best-saler-1.jpg",
      nameShop: "Diamond Fashion",
      business: "Nông Văn Đạt",
      total: 333000
    },
    {
      image: "best-saler-2.jpg",
      nameShop: "Diamond Fashion",
      business: "Lương Quang Dũng",
      total: 333000
    },
    {
      image: "best-saler-3.jpg",
      nameShop: "Diamond Fashion",
      business: "Nguyễn Duy Khương",
      total: 228800
    },
    {
      image: "facebook.jpg",
      nameShop: "Diamond Fashion",
      business: "Trần Trịnh Duy Ân",
      total: 37500000
    },
    {
      image: "instagram.jpg",
      nameShop: "Diamond Fashion",
      business: "Đặng Hoàng Phúc",
      total: 333000
    },
    {
      image: "google.jpg",
      nameShop: "Diamond Fashion",
      business: "Trần Minh Đức",
      total: 37520000
    },
    {
      image: "tiktok.jpg",
      nameShop: "Diamond Fashion",
      business: "Trần Trịnh Trang Trọng",
      total: 37520000
    }
  ];
  return (
    <React.Fragment>
      <div id="home">
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
                    <i class="bx bx-cart-alt"></i>
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
                    <i class="bx bxs-detail"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`content mt-3`}>
          <div className={`top-business`}>
            <div className={"heading"}>THỐNG KÊ</div>
            <div className={"title mb-3"}>
              <b>Top 10 </b>Doanh Thu Tháng
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình Ảnh</th>
                  <th>Shop</th>
                  <th>Chủ Shop</th>
                  <th>Doanh Thu</th>
                </tr>
              </thead>
              <tbody>
                {Top10.map((value, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <img src={"images/" + value.image} />
                    </td>
                    <td>{value.nameShop}</td>
                    <td>{value.business}</td>
                    <td>{formatCurrency(value.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
