import React, { useState, useEffect } from "react";
import Home from "./Home";
import Bill from "./bill/Bill";
import Product from "./product/Product";
import Storge from "./storge/Storge";
import Shop from "./shop/Shop";
import { Link, useLocation } from "react-router-dom";
import style from "../css/business/nav.module.css";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  const location = useLocation();
  const isActiveHome = location.pathname === "/business";
  const isActiveBill = location.pathname === "/business/bill";
  const isActiveProduct = location.pathname === "/business/product";
  const isActiveStorge = location.pathname === "/business/storge";
  const isActiveEditShop = location.pathname === "/business/shop";
  //SHOW THÔNG BÁO
  const [activeNotifycation, setNotifycation] = useState(false);
  //SHOW MENU
  const [activeMenu, setActiveMenu] = useState(false);

  //DANH SÁCH MENU
  const menuItems = [
    {
      id: 0,
      label: "Trang Chủ",
      icon: "bi bi-house",
      mapping: "/business",
      active: isActiveHome
    },
    {
      id: 1,
      label: "Quản Lý Đơn Hàng",
      icon: "bi bi-receipt",
      mapping: "/business/bill",
      active: isActiveBill
    },
    {
      id: 2,
      label: "Quản Lý Sản Phẩm",
      icon: "bi bi-handbag",
      mapping: "/business/product",
      active: isActiveProduct
    },
    {
      id: 3,
      label: "Quản Lý Kho Hàng",
      icon: "bx bx-store-alt",
      mapping: "/business/storge",
      active: isActiveStorge
    },
    {
      id: 4,
      label: "Thông Tin Cửa Hàng",
      icon: "bi bi-pencil-square",
      mapping: "/business/shop",
      active: isActiveEditShop
    },
    {
      id: 5,
      label: "Đăng Xuất",
      icon: "bi bi-door-open",
      mapping: "/business",
      active: null
    }
  ];

  const styleMenuActive = {
    color: "#8F6D02",
    backgroundColor: "#F8EECE",
    borderRadius: "10px"
  };

  return (
    <React.Fragment>
      <div id={style.businessDashBoard}>
        <i
          className={`bx bx-list-ul ${style.showNav}`}
          onClick={() => setActiveMenu(!activeMenu)}
        />
        <div className={`${style.header}`}>
          <div className={`${style.logo}`}>
            <img src="/images/diamond.png" alt="Hình Ảnh" />
            <Nav.Link href="/business">Kênh Người Bán</Nav.Link>
          </div>
          <div className={`${style.others}`}>
            <div className={`${style.account}`}>
              <img
                className={style.image}
                src="/images/banner-left.jpg"
                alt="Hình Ảnh"
              />
              <label className={style.label}>Tên Người Dùng</label>
            </div>
            <div
              className={`${style.notifycation}`}
              style={{
                backgroundColor: activeNotifycation
                  ? "rgba(211, 211, 211, .5)"
                  : "transparent"
              }}
            >
              <i
                className={`bx bx-bell ${style.i}`}
                onClick={() => setNotifycation(!activeNotifycation)}
              />
              <span className={style.span}>5</span>
              <div
                className={`${style.card}`}
                style={{ display: activeNotifycation ? "block" : "none" }}
              >
                <div className={`${style.cardHeader}`}>
                  Thông báo gần đây nhận
                </div>
                <div className={`${style.cardBody}`}>
                  <div className={`${style.cardContent}`}>
                    <img
                      className={style.image}
                      src="/images/banner-left.jpg"
                      alt="Hình Ảnh"
                    />
                    <div className={`${style.content}`}>
                      <div className={`${style.title}`}>Đặt Hàng</div>
                      <div className={`${style.substance}`}>
                        Khách hàng Đỗ Thanh Vẹn đã đặt hàng Áo Sơ Mi Nam Quyến
                        Rũ
                      </div>
                      <div className={`${style.time}`}>
                        <div className={`day`}>10/10/2023</div>
                        <div className={`clock`}>12:30:45</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${style.cardFooter}`}>THÔNG BÁO</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.menu} ${activeMenu ? style.active : ""}`}>
          {menuItems.map(item =>
            <Link
              to={`${item.mapping}`}
              onClick={() => setActiveMenu(false)}
              className={`p-0 ${style.li}`}
            >
              <div
                className={`${style.menuItem}`}
                style={item.active ? styleMenuActive : {}}
              >
                <label>
                  <i className={`${item.icon}`} /> {item.label}
                </label>
              </div>
            </Link>
          )}
        </div>
        <div className={`${style.content}`}>
          {isActiveHome ? <Home /> : null}
          {isActiveBill ? <Bill /> : null}
          {isActiveProduct ? <Product /> : null}
          {isActiveStorge ? <Storge /> : null}
          {isActiveEditShop ? <Shop /> : null}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
