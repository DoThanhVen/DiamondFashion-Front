import React, { useState, useEffect } from "react";
import Home from "./Home";
import Bill from "./Bill";
import Product from "./Product";
import Storge from "./Storge";
import { Link, useLocation } from "react-router-dom";
import style from "../css/business/nav.module.css";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  const location = useLocation();
  const isActiveHome = location.pathname === "/business";
  const isActiveBill = location.pathname === "/business/bill";
  const isActiveProduct = location.pathname === "/business/product";
  const isActiveStorge = location.pathname === "/business/storge";

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleClickMenu = (idMenu) => {
    setActiveMenuItem(idMenu === activeMenuItem ? null : idMenu);
  };
  //DANH SÁCH MENU
  const menuItems = [
    {
      id: 1,
      label: "Quản lý đơn hàng",
      icon: "bi bi-receipt",
      mapping: "/business/bill"
    },
    {
      id: 2,
      label: "Quản lý sản phẩm",
      icon: "bi bi-handbag",
      mapping: "/business/product"
    },
    {
      id: 3,
      label: "Quản lý kho hàng",
      icon: "bx bx-store-alt",
      mapping: "/business/storge"
    }
  ];
  return (
    <React.Fragment>
      <div id={style.businessDashBoard}>
        <div className={`${style.header}`}>
          <div className={`${style.logo}`}>
            <img src="/images/diamond.png" alt="Hình Ảnh"></img>
            <Nav.Link href="/business">Kênh Người Bán</Nav.Link>
          </div>
          <div>
            <div className={`${style.account}`}>
              <img src="/images/banner-left.jpg" alt="Hình Ảnh"></img>
              <ul className={`${style.menuAccount}`}>
                <li>
                  Tên Người Dùng
                  <ul className={`${style.subMenuAccount}`}>
                    <li>
                      <Nav.Link href="/business">
                        <i class="bx bx-exit me-1"></i> Đăng xuất
                      </Nav.Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <div className={`${style.notifycation}`}>
              <i class="bx bx-bell"></i>
              <span>5</span>
              <div className={`${style.card}`}>
                <div className={`${style.cardHeader}`}>
                  Thông báo gần đây nhận
                </div>
                <div className={`${style.cardBody}`}>
                  <div className={`${style.cardContent}`}>
                    <img src="/images/banner-left.jpg" alt="Hình Ảnh"></img>
                    <div className={`${style.content}`}>
                      <div className={`${style.title}`}>Đặt Hàng</div>
                      <div className={`${style.substance}`}>Khách hàng Đỗ Thanh Vẹn đã đặt hàng Áo Sơ Mi Nam Quyến Rũ</div>
                    </div>
                  </div>
                  <div className={`${style.cardContent}`}>
                    <img src="/images/banner-left.jpg" alt="Hình Ảnh"></img>
                    <div className={`${style.content}`}>
                      <div className={`${style.title}`}>Đặt Hàng</div>
                      <div className={`${style.substance}`}>Khách hàng Đỗ Thanh Vẹn đã đặt hàng Áo Sơ Mi Nam Quyến Rũ</div>
                    </div>
                  </div>
                  <div className={`${style.cardContent}`}>
                    <img src="/images/banner-left.jpg" alt="Hình Ảnh"></img>
                    <div className={`${style.content}`}>
                      <div className={`${style.title}`}>Đặt Hàng</div>
                      <div className={`${style.substance}`}>Khách hàng Đỗ Thanh Vẹn đã đặt hàng Áo Sơ Mi Nam Quyến Rũ</div>
                    </div>
                  </div>
                  <div className={`${style.cardContent}`}>
                    <img src="/images/banner-left.jpg" alt="Hình Ảnh"></img>
                    <div className={`${style.content}`}>
                      <div className={`${style.title}`}>Đặt Hàng</div>
                      <div className={`${style.substance}`}>Khách hàng Đỗ Thanh Vẹn đã đặt hàng Áo Sơ Mi Nam Quyến Rũ</div>
                    </div>
                  </div>
                  <div className={`${style.cardContent}`}>
                    <img src="/images/banner-left.jpg" alt="Hình Ảnh"></img>
                    <div className={`${style.content}`}>
                      <div className={`${style.title}`}>Đặt Hàng</div>
                      <div className={`${style.substance}`}>Khách hàng Đỗ Thanh Vẹn đã đặt hàng Áo Sơ Mi Nam Quyến Rũ</div>
                    </div>
                  </div>
                </div>
                <div className={`${style.cardFooter}`}>THÔNG BÁO</div>
              </div>
            </div> */}
          </div>
        </div>
        <div className={`${style.menu}`}>
          {menuItems.map((item) => (
            <Nav.Link href={`${item.mapping}`} className={`p-0`}>
              <div
                className={`${style.menuItem} ${
                  activeMenuItem === item.id ? "active" : ""
                }`}
              >
                <label>
                  <i className={`${item.icon}`}></i> {item.label}
                </label>
              </div>
            </Nav.Link>
          ))}
        </div>
        <div className={`${style.content}`}>
          {isActiveHome ? <Home /> : null}
          {isActiveBill ? <Bill /> : null}
          {isActiveProduct ? <Product /> : null}
          {isActiveStorge ? <Storge /> : null}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
