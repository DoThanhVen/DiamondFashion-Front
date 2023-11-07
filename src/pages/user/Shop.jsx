import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/user/shop.css";
import MainNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import ListGroup from "react-bootstrap/ListGroup";

function valuetext(value) {
  return `${value}°C`;
}

function shopReducer(state, action) {
  switch (action.type) {
    case "SET_SHOPS":
      return { ...state, shops: action.shops };
    default:
      return state;
  }
}

function Shop() {
  const [localState, dispatch] = useReducer(shopReducer, {
    shops: null,
  });

  const { productId } = useParams();

  useEffect(() => {
    if (!productId) {
      console.error("productId is undefined or falsy");
      return;
    }

    axios
      .get(`http://localhost:8080/api/product/${productId}/shop`)
      .then((response) => {
        dispatch({ type: "SET_SHOPS", shops: response.data });
        console.log("Shop Data:", response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, [productId]);

  // Truy cập dữ liệu 'shops' từ trạng thái
  const shopData = localState.shops;

  return (
    <>
      <nav>
        <MainNavbar />
      </nav>

      {shopData && (
        <div>
          <div className="content mt-2">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  {/* Meta */}
                  <div className="profile-user-box card-box bg-custom">
                    <div className="row ">
                      <div className="col-sm-6 d-flex">
                        <span className="float-left mr-3">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt=""
                            className="thumb-lg rounded-circle"
                          />
                        </span>
                        <div
                          className="media-body text-white "
                          style={{ marginLeft: "20px" }}
                        >
                          <h4 className="mt-1 mb-1 font-18">
                            {shopData.shop_name}
                          </h4>
                          <p className="font-13 text-light">
                            Địa chỉ: {shopData.addressShop.city}
                            <br />
                            Ngày tham gia: {shopData.create_date}
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 d-flex">
                        <div className="media-body text-white ">
                          <p className="font-13 text-light">
                            Số lượng sản phẩm: {shopData.products.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* / Meta */}
                </div>
              </div>
            </div>
          </div>

          <section className="product spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-5">
                  <div
                    className="sidebar"
                    style={{ position: "sticky", top: "20px" }}
                  >
                    <div className="hero__categories"></div>
                    <div className="col-lg-9 col-md-7">
                      {/* Hiển thị danh sách sản phẩm */}
                    </div>
                    <div className="sidebar__item mt-4">
                      <h5>GIÁ</h5>
                      <div className="price-range-wrap pb-4">
                        <Box sx={{ width: 300 }}>
                          <Slider
                            getAriaLabel={() => "Temperature range"}
                            // value={value1}
                            // onChange={handleChange1}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={0}
                            max={200000} // Đặt giá trị max là 1000
                          />
                          <Typography variant="body2">
                            <span style={{ color: "#FF0000" }}>Value:</span>
                            {/* {value1[0]} - {value1[1]} */}
                          </Typography>
                        </Box>
                      </div>
                      <div className="sidebar__item sidebar__item__color--option">
                        <h5>Ngày</h5>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="ascendingDate"
                            name="dateSorting"
                            value="ascending"
                            // checked={dateSorting === 'ascending'}
                            // onChange={handleDateSortingChange}
                          />
                          <label htmlFor="ascendingDate">
                            Sắp xếp theo tăng dần
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="descendingDate"
                            name="dateSorting"
                            value="descending"
                            // checked={dateSorting === 'descending'}
                            // onChange={handleDateSortingChange}
                          />
                          <label htmlFor="descendingDate">
                            Sắp xếp theo giảm dần
                          </label>
                        </div>
                      </div>

                      <div className="sidebar__item sidebar__item__color--option">
                        <h5>Sắp xếp giá</h5>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="ascendingPrice"
                            name="priceSorting"
                            value="ascending"
                            // checked={priceSorting === 'ascending'}
                            // onChange={handlePriceSortingChange}
                          />
                          <label htmlFor="ascendingPrice">
                            Sắp xếp theo tăng dần
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="descendingPrice"
                            name="priceSorting"
                            value="descending"
                            // checked={priceSorting === 'descending'}
                            // onChange={handlePriceSortingChange}
                          />
                          <label htmlFor="descendingPrice">
                            Sắp xếp theo giảm dần
                          </label>
                        </div>
                      </div>

                      <div className="sidebar__item sidebar__item__color--option">
                        <h5>Đánh giá</h5>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="fiveStarRating"
                            name="ratingFilter"
                            value="5"
                            // checked={ratingFilter === '5'}
                            // onChange={handleRatingFilterChange}
                          />
                          <label htmlFor="fiveStarRating">5 sao</label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="fourStarRating"
                            name="ratingFilter"
                            value="4"
                            // checked={ratingFilter === '4'}
                            // onChange={handleRatingFilterChange}
                          />
                          <label htmlFor="fourStarRating">4 sao</label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="threeStarRating"
                            name="ratingFilter"
                            value="3"
                            // checked={ratingFilter === '3'}
                            // onChange={handleRatingFilterChange}
                          />
                          <label htmlFor="threeStarRating">3 sao</label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="twoStarRating"
                            name="ratingFilter"
                            value="2"
                            // checked={ratingFilter === '2'}
                            // onChange={handleRatingFilterChange}
                          />
                          <label htmlFor="twoStarRating">2 sao</label>
                        </div>
                        <div className="form-check pb-4">
                          <input
                            type="radio"
                            id="oneStarRating"
                            name="ratingFilter"
                            value="1"
                            // checked={ratingFilter === '1'}
                            // onChange={handleRatingFilterChange}
                          />
                          <label htmlFor="oneStarRating">1 sao</label>
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
                                    SẢN PHẨM CỦA CỬA HÀNG
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
                              {shopData.products &&
                                shopData.products.length > 0 && ( // Kiểm tra xem 'products' có định nghĩa và không trống
                                  <div>
                                    <ul>
                                      {shopData.products.map((product) => (
                                        <li key={product.id}>
                                          <h3>{product.product_name}</h3>
                                          <p>Giá: {product.price}</p>
                                          <p>Mô tả: {product.description}</p>
                                          <p>
                                            Tình trạng:
                                            {product.status === 1
                                              ? "Có sẵn"
                                              : "Không có sẵn"}
                                          </p>

                                          <p>
                                            Danh mục:
                                            {
                                              product.categoryItem_product
                                                .type_category_item
                                            }
                                          </p>
                                          {product.image_product.length > 0 && (
                                            <img
                                              src={
                                                "/images/" +
                                                product.image_product[0].url
                                              }
                                              alt={product.product_name}
                                            />
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
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

          {/* <h2>Thông tin cửa hàng</h2>
          <p>Tên cửa hàng: {shopData.shop_name}</p>
          <p>Thành phố: {shopData.addressShop.city}</p>
          <p>Quận: {shopData.addressShop.district || "N/A"}</p>
          <p>Phường: {shopData.addressShop.ward || "N/A"}</p>

          <h2>Địa chỉ cửa hàng</h2>

          <p>Hình ảnh cửa hàng: {shopData.products.image_product || "N/A"}</p>
          <p>Số lượng sản phẩm: {shopData.products.length}</p> */}
        </div>
      )}
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default Shop;
