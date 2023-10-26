import React, { useState, useEffect } from "react";
import MainNavbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import "../css/user/product.css";
import "../css/user/home.css";
import "../css/user/slider.css";
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { NULL } from "sass";

function valuetext(value) {
  return `${value}°C`;
}

function Product() {
  const [value1, setValue1] = React.useState([20, 37]);
  const [valueMin,setValueMin] = useState(null)
  const [valueMax,setValueMax] = useState(null)
  

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
    setValueMin(newValue[0])
    setValueMax(newValue[1])
    console.log("MIN: "+valueMin+" MAX: "+valueMax)
  };

  const { id } = useParams();
  const location = useLocation();
  const listCategory = location.state?.listCategory;

  const [categoryItem, setCategoryItem] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (listCategory) {
      setCategoryItem(listCategory);
    }
  }, [listCategory]);

  useEffect(() => {
    // Gọi API hoặc lấy danh sách sản phẩm dựa trên categoryItem hoặc categoryItem.type_category
    if (categoryItem) {
      axios.get(`http://localhost:8080/api/product?type_category=${categoryItem.type_category}`)
        .then((response) => {
          if (response.status === 200) {
            setProducts(response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [categoryItem]);

  return (
    <>
      <nav>
        <MainNavbar />
      </nav>
      <div className="product">
        <section
          className="breadcrumb-section"
          style={{ backgroundImage: "url('images/best-saler-1.jpg')" }}
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
                <div className="sidebar">
                  <div className="hero__categories">
                    <div className="hero__categories__all">
                      <i className="fa fa-bars"></i>
                      <span>Danh mục sản phẩm</span>
                    </div>
                    <ul className="list-group list-group-flush">
                      {categoryItem && Array.isArray(categoryItem)
                        ? categoryItem.map((item) => (
                            <li  className="list-group-item" key={item.id}>
                             {item.type_category_item}
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                  <div className="col-lg-9 col-md-7">
              {/* Hiển thị danh sách sản phẩm */}
              <ul>
                {products.map((product) => (
                  <li key={product.id}>
                    <h2>{product.product_name}</h2>
                    <p>{product.description}</p>
                    <p>Giá: {product.price} VNĐ</p>
                  </li>
                ))}
              </ul>
            </div>

                  <div className="sidebar__item mt-4">
                    <h4>Giá</h4>
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
                      <h4>Màu sắc</h4>
                      <div className="sidebar__item__color sidebar__item__color--white">
                        <label htmlFor="white">
                          White
                          <input type="radio" id="white" />
                        </label>
                      </div>
                      <div className="sidebar__item__color sidebar__item__color--gray">
                        <label htmlFor="gray">
                          Gray
                          <input type="radio" id="gray" />
                        </label>
                      </div>
                      <div className="sidebar__item__color sidebar__item__color--red">
                        <label htmlFor="red">
                          Red
                          <input type="radio" id="red" />
                        </label>
                      </div>
                      <div className="sidebar__item__color sidebar__item__color--black">
                        <label htmlFor="black">
                          Black
                          <input type="radio" id="black" />
                        </label>
                      </div>
                      <div className="sidebar__item__color sidebar__item__color--blue">
                        <label htmlFor="blue">
                          Blue
                          <input type="radio" id="blue" />
                        </label>
                      </div>
                      <div className="sidebar__item__color sidebar__item__color--green">
                        <label htmlFor="green">
                          Green
                          <input type="radio" id="green" />
                        </label>
                      </div>
                    </div>
                    <div className="sidebar__item">
                      <h4>Kích cỡ</h4>
                      <div className="sidebar__item__size">
                        <label htmlFor="large">
                          Large
                          <input type="radio" id="large" />
                        </label>
                      </div>
                      <div className="sidebar__item__size">
                        <label htmlFor="medium">
                          Medium
                          <input type="radio" id="medium" />
                        </label>
                      </div>
                      <div className="sidebar__item__size">
                        <label htmlFor="small">
                          Small
                          <input type="radio" id="small" />
                        </label>
                      </div>
                      <div className="sidebar__item__size">
                        <label htmlFor="tiny">
                          Tiny
                          <input type="radio" id="tiny" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__item mt-4">
                    <div className="latest-product__text">
                      <h4>Sản phẩm mới nhất</h4>
                      <div className="latest-product__slider owl-carousel">
                        <div className="latest-prdouct__slider__item">
                          <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                              <img
                                src="images/best-saler-4.jpg"
                                alt=""
                                style={{ width: "150px" }}
                              />
                            </div>
                            <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                          </a>
                        </div>
                        <div className="latest-prdouct__slider__item">
                          <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                              <img
                                src="images/best-saler-4.jpg"
                                alt=""
                                style={{ width: "150px" }}
                              />
                            </div>
                            <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                          </a>
                        </div>
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
                                  DANH SÁCH SẢN PHẨM
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
                              >
                              </div>
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
                <div className="product__pagination">
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
    </>
  );
}
export default Product;
