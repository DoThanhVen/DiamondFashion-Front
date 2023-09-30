import React from "react";
import "../css/user/nav.css";

function Navbar() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <FormSearch />
      </div>
      <div className="horizontal-line" />
    </React.Fragment>
  );
}

function Slogan() {
  return (
    <div className="text">
      WELCOME TO &nbsp;
      <span>D</span>
      <span>I</span>
      <span>A</span>
      <span>M</span>
      <span>O</span>
      <span>N</span>
      <span>D</span> &nbsp;
      <span>F</span>
      <span>A</span>
      <span>S</span>
      <span>H</span>
      <span>I</span>
      <span>O</span>
      <span>N</span> &nbsp;
      <span>
        <i className="bi bi-gem"></i>
      </span>
    </div>
  );
}

class NavLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenListProducts: false
    };
  }

  handleMenuClick = () => {
    this.setState({});
    this.state.isOpenListProducts = !this.state.isOpenListProducts;
  };

  render() {
    return (
      <React.Fragment>
        <div className="logo">
          <a href="/"><img src="/images/Diamond.png" alt="Diamond Fashion"></img></a>
        </div>
        <ul className={`nav-links ${this.props.isNavOpen ? "show-nav" : ""}`}>
          <i
            className={`bx bx-chevrons-left ${
              this.props.isSmallScreen ? "active" : ""
            }`}
            onClick={this.props.handleNavClick}
          />
          <li>
            <a href="/" id="home">
              Trang chủ
            </a>
          </li>
          
          <li
            className={`products ${
              this.state.isOpenListProducts ? "active" : ""
            }`}
            onClick={this.handleMenuClick}
          >
            {this.props.isSmallScreen ? (
              <a>Sản phẩm</a>
            ) : (
              <a href="/products">Sản phẩm</a>
            )}

            <div className={`mega-box`}>
              <div className="content">
                <div className="row">
                  <header>Áo</header>
                  <ul className="mega-links">
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
                </div>
                <div className="row">
                  <header>Đồ Mặc Ngoài</header>
                  <ul className="mega-links">
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
                </div>
                <div className="row">
                  <header>Quần</header>
                  <ul className="mega-links">
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
                </div>
                <div className="row">
                  <header>Đồ Mặc Nhà</header>
                  <ul className="mega-links">
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
                </div>
                <div className="row">
                  <header>Phụ Kiện</header>
                  <ul className="mega-links">
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
                </div>
                <div className="row">
                  <header>Sport Utility Wear</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Sport Utility Wear </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="/detail">Về chúng tôi</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
class FormSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isSmallScreen: window.innerWidth <= 970,
      isNavOpen: false
    };
  }
  //Check Size Màn Hình Show Icon ListMenu
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({});
    this.state.isSmallScreen = window.innerWidth <= 970;
  };

  handleSearchIconClick = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
  };
  //Show Menu
  handleNavClick = () => {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen
    }));
  };

  render() {
    return (
      <React.Fragment>
        <NavLinks
          isNavOpen={this.state.isNavOpen}
          isSmallScreen={this.state.isSmallScreen}
          handleNavClick={this.handleNavClick}
        />
        <div className={`others`}>
          <i className={`bx bx-search`} onClick={this.handleSearchIconClick} />
          <a href="#">
            <i className="bx bx-heart" />
          </a>
          <a href="/account">
            <i className="bx bxs-user" />
          </a>
          <a href="/cart">
            <i className="bx bx-shopping-bag" />
          </a>
          <i
            className={`bx bx-list-ul ${
              this.state.isSmallScreen ? "active" : ""
            }`}
            onClick={this.handleNavClick}
          />
        </div>
        <form className={`search-form ${this.state.isActive ? "active" : ""}`}>
          <input type="text" placeholder="Tìm kiếm..." />
          <i
            className="bi bi-x-lg"
            style={{ color: "black" }}
            onClick={this.handleSearchIconClick}
          />
        </form>
      </React.Fragment>
    );
  }
}
export { Navbar, Slogan };
