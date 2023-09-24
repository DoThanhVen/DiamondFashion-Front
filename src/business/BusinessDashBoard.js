import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Link, useLocation } from "react-router-dom";
import "../css/business/nav.css";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  const location = useLocation();
  const isActiveHome = location.pathname === "/business";
  return (
    <React.Fragment>
      <div id="businessDashBoard">
        <nav>
          <ul className={`menu`}>
            <li>
              <div className={`menu-item`}>
                <label>Quản lý đơn hàng</label>
                <i class="bx bxs-chevron-down"></i>
              </div>
              <ul className={`sub-menu`}>
                <li className={`sub-menu-item`}>
                  <Nav.Link href="#">Tất Cả</Nav.Link>
                  <Nav.Link href="#">Đơn Hủy</Nav.Link>
                  <Nav.Link href="#">Trả Hàng/Hoàn Tiền</Nav.Link>
                </li>
              </ul>
            </li>
            <li>
              <div className={`menu-item`}>
                <label>Quản lý sản phẩm</label>
                <i class="bx bxs-chevron-down"></i>
              </div>
              <ul className={`sub-menu`}>
                <li className={`sub-menu-item`}>
                  <Nav.Link href="#">Tất Cả Sản Phẩm</Nav.Link>
                  <Nav.Link href="#">Thêm Sản Phẩm</Nav.Link>
                  <Nav.Link href="#">Sản Phẩm Vi Phạm</Nav.Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="content">{isActiveHome ? <Home /> : null}</div>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
