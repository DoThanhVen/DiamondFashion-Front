import React, { useState, useEffect } from "react";
import Home from "./Home";
import Accounts from "./Accounts";
import Products from "./Products";
import Categories from "./Categories";
import Shops from "./Shops";
import Storge from "./Storge";
import { Link, useLocation } from "react-router-dom";
import "../css/admin/nav.css";
import { callAPI } from "../service/API.js";
function Nav() {
  const location = useLocation();
  const isActiveHome = location.pathname === "/admin";
  const isActiveAccount = location.pathname === "/admin/accounts";
  const isActiveShop = location.pathname === "/admin/shops";
  const isActiveTypeProduct = location.pathname === "/admin/categories";
  const isActiveListProduct = location.pathname === "/admin/products";
  const isActiveStorge = location.pathname === "/admin/storge";
 
  const handleTDClick = (event) => {
    const showMenu = event.currentTarget;
    const navElement = document.querySelector("#adminDashBoard nav");
    if(showMenu.classList.contains("bx-right-arrow")){
      showMenu.classList.toggle("bx-left-arrow");
      showMenu.classList.toggle("bx-right-arrow");
      navElement.classList.add("active");
    }else{
      showMenu.classList.toggle("bx-left-arrow");
      showMenu.classList.toggle("bx-right-arrow");
      navElement.classList.remove("active");
    }
  };

  return (
    <React.Fragment>
      <div id="adminDashBoard">
      <i
        className={`bx bx-right-arrow`}
        onClick={handleTDClick}
      ></i>
        <nav>
          <div className={`logo`}><img src="/images/DiamondFashion.png" alt="Diamond Fashion"/></div>
          <ul className={`menu`}>
            <li className={`menu-item ${isActiveHome ? "active" : ""}`}>
              <a href="/admin">
                <i className="bi bi-house"></i>
                <label>Trang Chủ</label>
              </a>
            </li>
            <li className={`menu-item ${isActiveAccount ? "active" : ""}`}>
              <a href="/admin/accounts">
                <i className="bi bi-person-circle"></i>
                <label>Quản Lý Tài Khoản</label>
              </a>
            </li>
            <li className={`menu-item ${isActiveShop ? "active" : ""}`}>
              <a href="/admin/shops">
                <i className="bi bi-bag-dash"></i>
                <label>Quản Lý Gian Hàng</label>
              </a>
            </li>
            <li className={`menu-item ${isActiveTypeProduct ? "active" : ""}`}>
              <a href="/admin/categories">
                <i className="bi bi-list"></i>
                <label>Quản Lý Loại Hàng</label>
              </a>
            </li>
            <li className={`menu-item ${isActiveListProduct ? "active" : ""}`}>
              <a href="/admin/products">
                <i className="bx bxs-t-shirt"></i>
                <label>Quản Lý Sản Phẩm</label>
              </a>
            </li>
            <li className={`menu-item ${isActiveStorge ? "active" : ""}`}>
              <a href="/admin/storge">
                <i className="bi bi-receipt"></i>
                <label>Quản Lý Kho Hàng</label>
              </a>
            </li>
          </ul>
          <div className={`account`}>
            <div className={`image`}>
              <img src="/images/banner-left.jpg" alt="Hình Ảnh" />
            </div>
            <a className={`log-out btn btn-danger`}>Đăng Xuất</a>
          </div>
        </nav>
        <div id="content">
          {isActiveHome ? <Home /> : null}
          {isActiveAccount ? <Accounts /> : null}
          {isActiveShop ? <Shops /> : null}
          {isActiveTypeProduct ? <Categories /> : null}
          {isActiveListProduct ? <Products /> : null}
          {isActiveStorge ? <Storge /> : null}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Nav;
