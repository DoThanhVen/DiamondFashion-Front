import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import '../user/nav.css'; // Import your CSS file

const MainNavbar = () => {
  return (
    <div className=" main-navbar ">
      {/* Top Navbar */}
      <div className=" top-navbar">
        <div className=" container-fluid container ">
          <div className="row">
            <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
              <img src="images/Diamond.png" alt="" style={{ width: '80px' }} />
            </div>
            <div className="col-md-5 my-auto">
              <Form role="search">
                <div className="input-group">
                  <FormControl type="search" placeholder="Search your product" />
                  <Button variant="light" type="submit">
                    <i className="fa fa-search"></i>
                  </Button>
                </div>
              </Form>
            </div>
            <div className="col-md-5 my-auto">
              <Nav className="justify-content-end">
                <Nav.Link href="/cart" className="quantity-link">
                  <i className="fa fa-shopping-cart"></i>  
                  <span className="quantity-count">10</span> 
                </Nav.Link>
                <Nav.Link href="#" className="quantity-link">
                  <i className="fa fa-heart"></i>
                  <span className="quantity-count">10</span> 
                </Nav.Link>

                <NavDropdown title={<span><i className="fa fa-user" style={{color: '#7fad39'}}></i> Tên tài khoản</span>} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile"><i className="fa fa-user"></i>Hồ sơ</NavDropdown.Item>
                  <NavDropdown.Item href="/orderDetail"><i className="fa fa-list"></i>Đơn hàng của tôi</NavDropdown.Item>
                  <NavDropdown.Item href="/order"><i className="fa fa-heart"></i>Sản phẩm yêu thích</NavDropdown.Item>
                  <NavDropdown.Item href="/cart"><i className="fa fa-shopping-cart"></i> Giỏ hàng của tôi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#"><i className="fa fa-sign-out"></i> Đăng xuất</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar expand="lg" >
        <div className="container-fluid ">
          <Navbar.Brand className="d-block d-sm-block d-md-none d-lg-none" href="#">
            <img src="images/Diamond.png" alt="" style={{ width: '60px' }} />
          </Navbar.Brand>
          <Navbar.Toggle style={{ marginTop: '2px' }} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto mb-2 mb-lg-0 container border-bottom">
              <Nav.Link href="/">Trang chủ</Nav.Link>
              <Nav.Link href="/products">Sản phẩm</Nav.Link>
              <Nav.Link href="#">Khuyến mãi</Nav.Link>
              <Nav.Link href="#">Chính sách</Nav.Link>
              <Nav.Link href="#">Về chúng tôi</Nav.Link>
              <Nav.Link href="#">Thông tin liên hệ</Nav.Link>
            

            </Nav>
          </Navbar.Collapse>
        </div>
        
      </Navbar>
      
    </div>
  );
};

export default MainNavbar;
