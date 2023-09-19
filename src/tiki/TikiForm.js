import React from "react";
import Home from "./Home";
import Account from "./Account";
import Cart from "./Cart";
import { Link, useLocation } from "react-router-dom";
import "../css/tiki/user/nav.css";

function TikiForm() {
  const location = useLocation();
  const isActiveHome = location.pathname === "/tiki";
  const isActiveAccount = location.pathname === "/tiki/account";
  const isActiveCart = location.pathname === "/tiki/cart";

  return (
    <React.Fragment>
      <nav id="nav">
        <div className="logo">
          <img src="/images/Diamond.png" alt="Logo" />
        </div>
        <div className="form-search">
          <i className="bx bx-search"></i>
          <input
            type="text"
            id="form-search"
            placeholder="100% Hàng chất lượng..."
          ></input>
          <label htmlFor="form-search">Tìm Kiếm</label>
        </div>
        <div className="others">
          <div className={`home ${isActiveHome ? "active" : ""}`}>
            <a href="/tiki">
              {" "}
              <i className='bx bxs-home'></i>Trang Chủ
            </a>
          </div>
          <div className={`account ${isActiveAccount ? "active" : ""}`}>
            <a href="/tiki/account">
              {" "}
              <i className='bx bxs-face'></i>Tài Khoản
            </a>
          </div>
          <div className={`cart ${isActiveCart ? "active" : ""}`}>
            <a href="/tiki/cart">
              <i className="bx bx-cart"></i>
              <label className={`number`}>123</label>
            </a>
          </div>
        </div>
      </nav>
      <div id="content">
        {isActiveHome ? <Home /> : null}
        {isActiveAccount ? <Account /> : null}
        {isActiveCart ? <Cart /> : null}
      </div>
    </React.Fragment>
  );
}

export default TikiForm;
