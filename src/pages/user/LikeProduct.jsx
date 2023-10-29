import React, { useState, useEffect } from "react";
import MainNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../css/user/product.css";
import "../css/user/home.css";
import "../css/user/slider.css";
import { useLocation, useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import ListGroup from 'react-bootstrap/ListGroup';

function valuetext(value) {
  return `${value}°C`;
}

export default function LikeProduct() {

  const [value1, setValue1] = React.useState([20, 37]);
  const [valueMin, setValueMin] = useState(null);
  const [valueMax, setValueMax] = useState(null);
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
    setValueMin(newValue[0]);
    setValueMax(newValue[1]);
    console.log("MIN: " + valueMin + " MAX: " + valueMax);
  };

  return (
    <div>
       <nav>
        <MainNavbar />
      </nav>
      <div className="product">
        <section
          className="breadcrumb-section container"
          style={{
            backgroundImage: "url('/images/product_banner.jpg')",
            backgroundSize: "cover",
            width: '100%'
          }}
        >
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <div className="breadcrumb__text">
                  <h2>Diamond Shop</h2>
                  <p>
                    Khám phá một thế giới biến đổi với các sản phẩm của chúng
                    tôi. Cho dù bạn đang tìm cách nâng cấp phong cách của mình,
                    duy trì kết nối hay làm cho ngôi nhà của bạn thông minh hơn,
                    chúng tôi có mọi thứ bạn cần để thay đổi cuộc sống của bạn
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5">
                <div className="sidebar" style={{ position: 'sticky', top: '20px' }}>
                  <div className="hero__categories">


                  </div>
                  <div className="col-lg-9 col-md-7">
                    {/* Hiển thị danh sách sản phẩm */}

                  </div>
                  <div className="sidebar__item mt-4">
                    <h5>GIÁ</h5>
                    <div className="price-range-wrap pb-4">
                      <Box sx={{ width: 300 }}>
                        <Slider
                          getAriaLabel={() => "Temperature range"}
                          value={value1}
                          onChange={handleChange1}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          min={0}
                          max={200000} // Đặt giá trị max là 1000
                        />
                        <Typography variant="body2">
                          <span style={{ color: "#FF0000" }}>Value:</span>
                          {value1[0]} - {value1[1]}
                        </Typography>
                      </Box>
                    </div>
                    <div className="sidebar__item sidebar__item__color--option">
                      <h5>Ngày</h5>
                      <div class="form-check">
                        <input class="form-check-input1" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                        <label class="form-check-label1" for="flexRadioDefault1">
                          Sắp xếp theo tăng dần
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input1" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Sắp xếp theo giảm dần
                        </label>
                      </div>
                    </div>
                    <div className="sidebar__item sidebar__item__color--option">
                      <h5>Sắp xếp giá</h5>
                      <div class="form-check">
                        <input class="form-check-input2" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" />
                        <label class="form-check-label2" for="flexRadioDefault1">
                          Sắp xếp theo tăng dần
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input2" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" checked />
                        <label class="form-check-label2" for="flexRadioDefault2">
                          Sắp xếp theo giảm dần
                        </label>
                      </div>
                    </div>
                    <div className="sidebar__item sidebar__item__color--option">
                      <h5>Đánh giá</h5>
                      <div class="form-check">
                        <input class="form-check-input3" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" />
                        <label class="form-check-label3" for="flexRadioDefault1">
                          5 sao
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input3" type="radio" name="flexRadioDefault3" id="flexRadioDefault2" checked />
                        <label class="form-check-label3" for="flexRadioDefault2">
                          4 sao
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input3" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" checked />
                        <label class="form-check-label3" for="flexRadioDefault3">
                          3 sao
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input3" type="radio" name="flexRadioDefault3" id="flexRadioDefault4" checked />
                        <label class="form-check-label3" for="flexRadioDefault4">
                          2 sao
                        </label>
                      </div>
                      <div class="form-check pb-4">
                        <input class="form-check-input3" type="radio" name="flexRadioDefault3" id="flexRadioDefault5" checked />
                        <label class="form-check-label3" for="flexRadioDefault5">
                          1 sao
                        </label>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-9 col-md-7">
                <div className="product__discount">
                  <div>
                    <div className=" ">
                      <div className="all-items">
                        <div className="container bg-white">
                          <nav className="navbar navbar-expand-md navbar-light bg-white">
                            <div className="container-fluid p-0">
                              <a
                                className="navbar-brand text-uppercase fw-800"
                                href="/#"
                              >
                                <span className="border-red pe-2">
                                  DANH SÁCH SẢN PHẨM BẠN YÊU THÍCH
                                </span>
                              </a>
                              <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#myNav"
                                aria-controls="myNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                              >
                                <span className="fas fa-bars"></span>
                              </button>
                              <div
                                className="collapse navbar-collapse"
                                id="myNav"
                              ></div>
                            </div>
                          </nav>

                          <div className="row">
                            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                              <div className="product">
                                <img
                                  src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt=""
                                />
                                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                  <li className="icon">
                                    <span className="fas fa-expand-arrows-alt"></span>
                                  </li>
                                  <li className="icon mx-3">
                                    <span className="far fa-heart"></span>
                                  </li>
                                  <li className="icon">
                                    <span className="fas fa-shopping-bag"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="tag bg-red">sale</div>
                              <div className="title pt-4 pb-1">
                                Winter Sweater
                              </div>
                              <div className="d-flex align-content-center justify-content-center">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                              </div>
                              <div className="price">$ 60.0</div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                              <div className="product">
                                <img
                                  src="https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt=""
                                />
                                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                  <li className="icon">
                                    <span className="fas fa-expand-arrows-alt"></span>
                                  </li>
                                  <li className="icon mx-3">
                                    <span className="far fa-heart"></span>
                                  </li>
                                  <li className="icon">
                                    <span className="fas fa-shopping-bag"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="tag bg-black">out of stock</div>
                              <div className="title pt-4 pb-1">
                                Denim Dresses
                              </div>
                              <div className="d-flex align-content-center justify-content-center">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                              </div>
                              <div className="price">$ 55.0</div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                              <div className="product">
                                <img
                                  src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt=""
                                />
                                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                  <li className="icon">
                                    <span className="fas fa-expand-arrows-alt"></span>
                                  </li>
                                  <li className="icon mx-3">
                                    <span className="far fa-heart"></span>
                                  </li>
                                  <li className="icon">
                                    <span className="fas fa-shopping-bag"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="tag bg-green">new</div>
                              <div className="title pt-4 pb-1">
                                Empire Waist Dresses
                              </div>
                              <div className="d-flex align-content-center justify-content-center">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                              </div>
                              <div className="price">$ 70.0</div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                              <div className="product">
                                <img
                                  src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt=""
                                />
                                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                  <li className="icon">
                                    <span className="fas fa-expand-arrows-alt"></span>
                                  </li>
                                  <li className="icon mx-3">
                                    <span className="far fa-heart"></span>
                                  </li>
                                  <li className="icon">
                                    <span className="fas fa-shopping-bag"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="title pt-4 pb-1">
                                Pinafore Dresses
                              </div>
                              <div className="d-flex align-content-center justify-content-center">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                              </div>
                              <div className="price">$ 60.0</div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                              <div className="product">
                                <img
                                  src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt=""
                                />
                                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                  <li className="icon">
                                    <span className="fas fa-expand-arrows-alt"></span>
                                  </li>
                                  <li className="icon mx-3">
                                    <span className="far fa-heart"></span>
                                  </li>
                                  <li className="icon">
                                    <span className="fas fa-shopping-bag"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="tag bg-red">sale</div>
                              <div className="title pt-4 pb-1">
                                Winter Sweater
                              </div>
                              <div className="d-flex align-content-center justify-content-center">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                              </div>
                              <div className="price">$ 60.0</div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                              <div className="product">
                                <img
                                  src="https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt=""
                                />
                                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                  <li className="icon">
                                    <span className="fas fa-expand-arrows-alt"></span>
                                  </li>
                                  <li className="icon mx-3">
                                    <span className="far fa-heart"></span>
                                  </li>
                                  <li className="icon">
                                    <span className="fas fa-shopping-bag"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="tag bg-black">out of stock</div>
                              <div className="title pt-4 pb-1">
                                Denim Dresses
                              </div>
                              <div className="d-flex align-content-center justify-content-center">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                              </div>
                              <div className="price">$ 55.0</div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                              <div className="product">
                                <img
                                  src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt=""
                                />
                                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                  <li className="icon">
                                    <span className="fas fa-expand-arrows-alt"></span>
                                  </li>
                                  <li className="icon mx-3">
                                    <span className="far fa-heart"></span>
                                  </li>
                                  <li className="icon">
                                    <span className="fas fa-shopping-bag"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="title pt-4 pb-1">
                                Empire Waist Dresses
                              </div>
                              <div className="d-flex align-content-center justify-content-center">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                              </div>
                              <div className="price">$ 70.0</div>
                            </div>
                            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                              <div className="product">
                                <img
                                  src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt=""
                                />
                                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                  <li className="icon">
                                    <span className="fas fa-expand-arrows-alt"></span>
                                  </li>
                                  <li className="icon mx-3">
                                    <span className="far fa-heart"></span>
                                  </li>
                                  <li className="icon">
                                    <span className="fas fa-shopping-bag"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="tag bg-green">new</div>
                              <div className="title pt-4 pb-1">
                                Pinafore Dresses
                              </div>
                              <div className="d-flex align-content-center justify-content-center">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                              </div>
                              <div className="price">$ 60.0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__pagination pb-4">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="footer">
          <Footer />
        </div>
      </div>
      
    </div>
  )
}
