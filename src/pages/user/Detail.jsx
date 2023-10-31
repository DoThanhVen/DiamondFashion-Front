import React, { useState, useEffect } from "react";
import "../css/user/detail.css";
import MainNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { products, image } from "./data";
import axios from "axios";
import { useParams } from "react-router-dom";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProductPage() {
  // Sử dụng useState để quản lý giá trị số
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count")) || 14
  );

  //Comment
  const [showAllComments, setShowAllComments] = useState(false);

  // Hàm tăng giá trị số
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Hàm giảm giá trị số
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  //Lưu giá trị của count vào local khi count thay đổi

  //Hàm xử lý khi nhấp chọn vào button Xem thêm
  const handleShowMoreClick = () => {
    setShowAllComments(true);
  };

  const { productId, category } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(null);
  const [shopName, setShopName] = useState(null);
  const [addressShop, setaddressShop] = useState(null);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  useEffect(() => {
    // Fetch product details from the API based on productId
    axios
      .get(`http://localhost:8080/api/product/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error loading product details:", error);
      });
  }, [productId]);
  
  console.log("product:", product);
  
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/shop')
      .then((response) => {
        const shopData = response.data;
        // Find the shop with the same product ID
        const foundShop = shopData.find((shop) =>
          shop.products.some((product) => product.id === parseInt(productId))
        );
        if (foundShop) {
          setShopName(foundShop.shop_name);
          setImage(foundShop.image);
          setaddressShop(foundShop.addressShop);
        } else {
          setShopName('Shop not found');
        }
      })
      .catch((error) => {
        console.error('Error loading shop data:', error);
      });
  }, [productId]);


  
  
  return (
    <>
      <nav>
        <MainNavbar />
      </nav>
      <div className="detail" style={{ backgroundColor: "#f5f5fa" }}>
    
        <section className="">
          <div
            className="container bg-white mt-4"
            style={{ borderRadius: "8px" }}
          >
            <div className="row p-4">
              <aside className="col-lg-6">
                {product&&
                product.image_product &&
                product.image_product.length > 0 ? (
                  <Carousel>
  {product.image_product.map((image, index) => (
    <div key={index} style={{ width: '100%', height: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={image.url} alt={`Image ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
    </div>
  ))}
</Carousel>

                ) : (
                  <p>No images available.</p>
                )}
              </aside>

              <main className="col-lg-6 ">
                <div className="ps-lg-3">
                  {product && shopName !== null ? (
                    <h4 className="title text-dark">
                      {product.product_name}
                      {/* <h2>{shopName}</h2> */}
                      
                      {/* Continue displaying other product details */}
                    </h4>
                  ) : (
                    <p>Loading...</p>
                  )}

                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1"></i>154
                      lượt mua
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="h5">
                      {/* <div className="sale-price" style={{ fontSize: '25px' }}>
                      <del>2.499.000 <sup>đ</sup> </del>
                    </div> */}
                      <div className="d-flex ">
                        <h2 className="text-danger">
                          {product
                            ? `${product.price} ₫`
                            : "Loading..."}
                        </h2>

                        {/* <div className="sale ms-4 bg-danger text-light mb-2 p-1">
                        <b>Giảm 50%</b>
                      </div> */}
                      </div>
                    </span>
                  </div>

                  <div className="address mb-2">
                    <b>
                      <span className="title ">ĐỊA CHỈ GIAO HÀNG</span>
                    </b>
                    <br />
                    <span>Tô Ký, Quận 12, TP Hồ Chí Minh</span>
                    <a href="#" style={{ color: "blue", marginLeft: "10px" }}>
                      Thay đổi
                    </a>
                  </div>

                  <hr />
                  <div className="col-md-4 col-6 mb-3">
                    <b>
                      <span className="title ">SỐ LƯỢNG</span>
                    </b>
                    <div
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                        onClick={decreaseCount} // Gọi hàm giảm số khi nhấn vào nút "Giảm"
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder={count}
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                        onClick={increaseCount} // Gọi hàm tăng số khi nhấn vào nút "Tăng"
                      >
                        <i className="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4 col-6">
                      {/* <label className="mb-2">Size</label>
                      <select className="form-select border border-secondary" style={{ height: '35px' }}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select> */}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="btn  shadow-0 "
                    style={{
                      backgroundColor: " rgb(252,162,53)",
                      padding: "10px 50px",
                    }}
                  >
                    <i className="bi bi-bag-plus mx-2"></i>
                    <strong>Mua ngay</strong>
                  </a>
                  <a
                    href="#"
                    className="btn  shadow-0 mx-4 text-white
                  "
                    style={{
                      backgroundColor: " rgb(48,83,73)",
                      padding: "10px 50px",
                    }}
                  >
                    <i className="bi bi-basket3-fill"></i>
                    <strong> Thêm vào giỏ hàng</strong>
                  </a>
                </div>
              </main>
            </div>
          </div>
        </section>

        <div className="container mt-4">
          <div className="row gx-4 ">
            <div className="col-lg-8 mb-4 d-flex">
              <img
                src="/images/best-saler-2.jpg"
                className="rounded-circle shop-image"
                alt="Diamond_Fashion"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div className="shop-name ms-4 ">
               
                {product && shopName !== null ? (
                  <div>
                     <b>{shopName}</b> <br />
 <span>{addressShop}</span>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <section className=" border-top border-bottom pt-4">
          <div className="container">
            <div className="row gx-4">
              <div className="col-lg-8 mb-4">
                <div
                  className="  p-3  bg-white"
                  style={{ borderRadius: "8px" }}
                >
                  <b>
                    <span className="title ">MÔ TẢ SẢN PHẨM</span>
                  </b>
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-pills-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <p>
                        {product
                          ? `${product.description}`
                          : "Loading"}
                      </p>

                      <b>
                        <span className="title">THÔNG TIN BỔ SUNG</span>
                      </b>
                      <table className="table border mt-3 mb-2">
                        <tbody>
                          <tr>
                            <th scope="row ">Loại sản phẩm</th>
                            <td>Áo thun</td>
                          </tr>

                          <tr>
                            <th scope="row ">Màu sắc</th>
                            <td>Đen, Trắng, Xanh lá</td>
                          </tr>
                          <tr>
                            <th scope="row ">Kích cỡ</th>
                            <td>XS, S, M, L, XL</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="shipping-info ">
                    <b>
                      <span className="title ">THÔNG TIN GIAO HÀNG</span>
                    </b>
                    <div className="pt-2 ">
                      <ul>
                        <li>
                          <strong>Miễn phí giao hàng</strong> cho đơn hàng trên
                          500.000 VNĐ.
                        </li>
                        <li>
                          <strong>Giao hàng toàn quốc</strong>, bạn có thể nhận
                          hàng ở bất kỳ đâu.
                        </li>
                        <li>
                          Thời gian giao hàng dự kiến: từ{" "}
                          <strong>3-7 ngày làm việc</strong>.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="payment-options ">
                    <b>
                      <span className="title ">PHƯƠNG THỨC THANH TOÁN</span>
                    </b>
                    <div className="pt-2 ">
                      <ul>
                        <li>
                          <img
                            src="/images/cash.png "
                            alt="Thanh toán khi nhận hàng "
                            style={{ width: "50px" }}
                          />
                          <span>Thanh toán khi nhận hàng</span>
                        </li>
                        <li>
                          <img
                            src="/images/momo.png "
                            alt="Momo "
                            width="60px "
                            style={{ width: "30px" }}
                          />
                          <img
                            src="/images/mastercard.png "
                            alt="E-bank "
                            width="60px "
                            className="ms-2 "
                            style={{ width: "40px" }}
                          />
                          <img
                            src="/images/paypal.png "
                            alt="Paypal "
                            width="60px "
                            className="ms-2 "
                            style={{ width: "80px" }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="return-policy ">
                    <b>
                      <span className="title ">CHÍNH SÁCH ĐỔI TRẢ</span>
                    </b>
                    <div className="pt-2 ">
                      <ul>
                        <li>
                          <strong>Chấp nhận đổi trả</strong> trong vòng 7 ngày
                          kể từ ngày nhận hàng.
                        </li>
                        <li>
                          Sản phẩm phải còn{" "}
                          <strong>nguyên vẹn và không bị hỏng hóc</strong>.
                        </li>
                        <li>
                          Để biết thêm chi tiết về chính sách đổi trả, vui lòng
                          liên hệ hotline: <strong>0123 456 789</strong>.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 ">
                <div
                  className=" bg-white p-4  shadow-0"
                  style={{ borderRadius: "8px" }}
                >
                  <div className="">
                    <div className="card-body">
                      <h4 className="card-title">Sản phẩm tương tự</h4>

                      {products.map((product, index) => (
                        <div className="d-flex mb-3 mt-4" key={index}>
                          <a href="#" className="me-3">
                            <img
                              src={product.imagePath}
                              style={{ minWidth: "96px", height: "96px" }}
                              className="img-md"
                              alt={`Similar Product ${index + 1}`}
                            />
                          </a>
                          <div className="info">
                            <a href="#" className="nav-link mb-1">
                              {product.name}
                            </a>
                            <strong className="text-dark">
                              {" "}
                              ${product.price.toFixed(2)}
                            </strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="row gx-4">
              <div className="col-lg-8 mb-4">
                <div className=" p-3 bg-white" style={{ borderRadius: "8px" }}>
                  <div className="reviews">
                    <b>
                      <span className="title">ĐÁNH GIÁ SẢN PHẨM</span>
                    </b>
                    <div className="bg-white rounded  p-4 mb-4 clearfix graph-star-rating">
                      <div className="graph-star-rating-header">
                        <div className="star-rating">
                          <a href="#">
                            <i className="icofont-ui-rating active"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-rating active"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-rating active"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-rating active"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-rating"></i>
                          </a>{" "}
                          <b className="text-black ml-2">334</b>
                        </div>
                        <p className="text-black mb-4 mt-2">
                          Rated 3.5 out of 5
                        </p>
                      </div>
                      <div className="graph-star-rating-body">
                        <div className="rating-list">
                          <div className="rating-list-left text-black">
                            5 Star
                          </div>
                          <div className="rating-list-center">
                            <div className="progress">
                              <div
                                style={{ width: "56%" }}
                                aria-valuemax="5"
                                aria-valuemin="0"
                                aria-valuenow="5"
                                role="progressbar"
                                className="progress-bar bg-primary"
                              >
                                <span className="sr-only">
                                  80% Complete (danger)
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="rating-list-right text-black">
                            56%
                          </div>
                        </div>
                        <div className="rating-list">
                          <div className="rating-list-left text-black">
                            4 Star
                          </div>
                          <div className="rating-list-center">
                            <div className="progress">
                              <div
                                style={{ width: "23%" }}
                                aria-valuemax="5"
                                aria-valuemin="0"
                                aria-valuenow="5"
                                role="progressbar"
                                className="progress-bar bg-primary"
                              >
                                <span className="sr-only">
                                  80% Complete (danger)
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="rating-list-right text-black">
                            23%
                          </div>
                        </div>
                        <div className="rating-list">
                          <div className="rating-list-left text-black">
                            3 Star
                          </div>
                          <div className="rating-list-center">
                            <div className="progress">
                              <div
                                style={{ width: "11%" }}
                                aria-valuemax="5"
                                aria-valuemin="0"
                                aria-valuenow="5"
                                role="progressbar"
                                className="progress-bar bg-primary"
                              >
                                <span className="sr-only">
                                  80% Complete (danger)
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="rating-list-right text-black">
                            11%
                          </div>
                        </div>
                        <div className="rating-list">
                          <div className="rating-list-left text-black">
                            2 Star
                          </div>
                          <div className="rating-list-center">
                            <div className="progress">
                              <div
                                style={{ width: "2%" }}
                                aria-valuemax="5"
                                aria-valuemin="0"
                                aria-valuenow="5"
                                role="progressbar"
                                className="progress-bar bg-primary"
                              >
                                <span className="sr-only">
                                  80% Complete (danger)
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="rating-list-right text-black">
                            02%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="mt-3">
                        {showAllComments ? (
                          // Hiển thị tất cả các đánh giá
                          // Dùng map để lặp qua danh sách đánh giá và hiển thị chúng
                          <>
                            <div className="user-review mb-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src="/images/best-saler-2.jpg"
                                  alt=""
                                  style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                  }}
                                />
                                <div className="ms-3">
                                  <h6 className="mb-0">
                                    <b> Crush 1</b>
                                  </h6>
                                  <span className="star-rating text-warning">
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <p className="mt-2">
                                Áo thun rất thoải mái và chất lượng tốt. Tôi rất
                                hài lòng với sản phẩm này.
                              </p>
                              <div className="rep-comment">
                                <div className="shop-name ms-4">
                                  <b>Tên shop</b> <br />
                                  <span>Cảm ơn bạn đã mua hàng</span>
                                </div>
                              </div>
                            </div>

                            <div className="user-review mb-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src="/images/best-saler-2.jpg"
                                  alt=""
                                  style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                  }}
                                />
                                <div className="ms-3">
                                  <h6 className="mb-0">
                                    <b> Crush 2</b>
                                  </h6>
                                  <span className="star-rating text-warning">
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star"></i>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <p className="mt-2">
                                Áo thun không tệ, nhưng màu sắc hơi nhạt so với
                                ảnh.
                              </p>
                            </div>

                            <div className="user-review">
                              <div className="d-flex align-items-center">
                                <img
                                  src="/images/best-saler-2.jpg"
                                  alt=""
                                  style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                  }}
                                />
                                <div className="ms-3">
                                  <h6 className="mb-0">
                                    <b> Crush 3</b>
                                  </h6>
                                  <span className="star-rating text-warning">
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star"></i>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <p className="mt-2">
                                Chất lượng sản phẩm không tương xứng với giá
                                tiền.
                              </p>
                              <div className="rep-comment">
                                <div className="shop-name ms-4">
                                  <b>Tên shop</b> <br />
                                  <span>
                                    Xin lỗi bạn về sự không hài lòng của bạn.
                                    Shop sẽ lưu ý và cố gắng chỉnh sửa cho hoàn
                                    thiện
                                  </span>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          // Hiển thị hai đánh giá đầu tiên
                          <>
                            <div className="user-review mb-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src="/images/best-saler-2.jpg"
                                  alt=""
                                  style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                  }}
                                />
                                <div className="ms-3">
                                  <h6 className="mb-0">
                                    <b> Crush 1</b>
                                  </h6>
                                  <span className="star-rating text-warning">
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <p className="mt-2">
                                Áo thun rất thoải mái và chất lượng tốt. Tôi rất
                                hài lòng với sản phẩm này.
                              </p>
                              <div className="rep-comment">
                                <div className="shop-name ms-4">
                                  <b>Tên shop</b> <br />
                                  <span>Cảm ơn bạn đã mua hàng</span>
                                </div>
                              </div>
                            </div>

                            <div className="user-review">
                              <div className="d-flex align-items-center">
                                <img
                                  src="/images/best-saler-2.jpg"
                                  alt=""
                                  style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                  }}
                                />
                                <div className="ms-3">
                                  <h6 className="mb-0">
                                    <b> Crush 2</b>
                                  </h6>
                                  <span className="star-rating text-warning">
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star"></i>
                                    </span>
                                    <span className="star">
                                      <i className="bi bi-star"></i>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <p className="mt-2">
                                Áo thun không tệ, nhưng màu sắc hơi nhạt so với
                                ảnh.
                              </p>
                            </div>
                          </>
                        )}

                        {/* Nút Xem Thêm */}
                        {!showAllComments && (
                          <div className="mt-4 mb-4 text-center">
                            <button
                              className="btn btn-outline-dark"
                              style={{ padding: "10px 20px" }}
                              onClick={() => setShowAllComments(true)}
                            >
                              <b>XEM THÊM</b>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
