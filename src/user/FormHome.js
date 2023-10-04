import React, { useState, useEffect } from "react";

import "../css/user/home.css";
import "../css/user/modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function Introduction() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Mở modal tự động sau 500 milliseconds (0.5 giây) khi trang web được tải
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500); // Modal sẽ mở sau 0.5 giây

    return () => {
      clearTimeout(timer); // Hủy bỏ timer nếu component unmount
    };
  }, []);

  const handleClose = () => {
    // Đóng modal khi người dùng nhấn nút Đóng hoặc bấm nút ngoài modal
    setShowModal(false);
  };

  return (
    <div className="Introduction">
      <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="newsletter">
            <form action="#">
              <div className="newsletter-header">
                {/* <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                  <p className="newsletter-desc">
                    Subscribe the <b>Anon</b> to get latest products and discount update.
                  </p> */}
              </div>

              <input
                type="email"
                name="email"
                className="email-field"
                placeholder="Email Address"
                required
              />

              <button type="submit" className="btn-newsletter">
                Subscribe
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* Đặt nút hoặc nội dung footer của modal ở đây */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}



function CategoriesProduct() {
  return <React.Fragment>
    <main className="mb-4" style={{ marginTop: "100px" }}>
      <section className="hero">
        <div class="col-lg-3">
          <div class="hero__categories">
            <div class="hero__categories__all">
              <i class="fa fa-bars"></i>
              <span>Danh mục</span>
            </div>
            <ul>
              <li>
                <a href="#">Điện Thoại - Máy Tính Bảng</a>
              </li>
              <li>
                <a href="#">Điện gia dụng</a>
              </li>
              <li>
                <a href="#">Thời trang nam</a>
              </li>
              <li>
                <a href="#">Thời trang nữ</a>
              </li>
              <li>
                <a href="#">Balo - Vali</a>
              </li>
              <li>
                <a href="#">Phụ Kiện Thời Trang</a>
              </li>
              <li>
                <a href="#">Điện Tử - Điện Lạnh</a>
              </li>
              <li>
                <a href="#">Dụng Cụ Làm Bếp</a>
              </li>
              <li>
                <a href="#">Thiết Bị Số</a>
              </li>
              <li>
                <a href="#">Máy Ảnh - Máy Quay Phim</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="div-text">
            <span>
              Khám phá những xu hướng mới nhất về thời trang, điện tử và hơn
              thế nữa!
            </span>
            <h1>Chào mừng đến với Diamond</h1>
            <p>
              Chào mừng bạn đến với cửa hàng trực tuyến tổng hợp của chúng
              tôi, nơi bạn có thể tìm thấy bộ sưu tập phong phú các mặt hàng
              thời trang, đồ điện tử tiên tiến và đồ gia dụng hàng đầu. Chúng
              tôi phục vụ mọi sở thích và sở thích của người dùng, cung cấp
              những sản phẩm tốt nhất với mức giá cạnh tranh nhất.
            </p>
            <button type="button" className="btn btn-warning">
              Mua sắm ngay
            </button>
          </div>
        </div>
      </section>

      <section className="sec-2">
        <div className="side-bar">
          <div className="titile">
            <h4>ƯU ĐÃI LỚN</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="boxs">
            <div className="box mt-4 pb-2">
              <img
                src="images/banner6.jpg"
                alt=""
                style={{ width: "100%" }}
              ></img>
              {/* <div class="card-body" style={{ marginLeft: "10px" }}>
                  <div class="d-flex justify-content-between">
                    <p class="small">
                      <a href="#!" class="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p class="small text-danger">
                      <s>$1099</s>
                    </p>
                  </div>

                  <div class="d-flex justify-content-between mb-3">
                    <h5 class="mb-0">HP Notebook</h5>
                    <h5 class="text-dark mb-0">$999</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">6</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="titile">
            <h4>SẢN PHẨM MỚI</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="all-items">
            <div className="item">
              <div className="div-img">
                <div class="image-container">
                  <img
                    src="images/best-saler-4.jpg"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  ></img>
                  <p class="mb-0 small bg-danger text-white">-50%</p>
                </div>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div class="image-container">
                <div class="image-container">
                  <img
                    src="images/best-saler-3.jpg"
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  ></img>
                  <p class="mb-0 small text-white" style={{ backgroundColor: '#00CED1' }}>Mới</p>
                </div>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-2.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-1.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn text-center btn-outline-primary mx-auto d-block "
            style={{ padding: "5px 60px" }}
          >
            Xem thêm
          </button>
        </div>
      </section>

      <section className="sec-3">
        <div className="side-bar">
          <div className="titile">
            <h4>new offer</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="boxs">
            <div className="box pb-2">
              <img src="images/best-saler-2.jpg" alt=""></img>
              <div class="card-body" style={{ marginLeft: "10px" }}>
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="box mt-2 pb-2">
              <img src="images/best-saler-3.jpg" alt=""></img>
              <div class="card-body" style={{ marginLeft: "10px" }}>
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="box mt-2 pb-2">
              <img src="images/best-saler-4.jpg" alt=""></img>
              <div class="card-body" style={{ marginLeft: "10px" }}>
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="box mt-2 pb-2">
              <img src="images/best-saler-1.jpg" alt=""></img>
              <div class="card-body" style={{ marginLeft: "10px" }}>
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="bg-sec">
            <div className="div-text">
              <h1>Sản phẩm đa dạng</h1>
              <p>
                Khám phá một thế giới biến đổi với các sản phẩm của chúng tôi.
                Cho dù bạn đang tìm cách nâng cấp phong cách của mình, duy trì
                kết nối hay làm cho ngôi nhà của bạn thông minh hơn, chúng tôi
                có mọi thứ bạn cần để thay đổi cuộc sống của bạn.
              </p>
              <a href="#" className="btn  btn-warning ">
                {" "}
                <strong>Mua sắm ngay</strong>{" "}
              </a>
            </div>
          </div>

          <div className="titile">
            <h4>SẢN PHẨM ĐANG KHUYẾN MÃI</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="container ">
            <div className="countdown-box mt-2">
              <p className="countdown-desc">Nhanh lên! Ưu đãi kết thúc sau:</p>

              <div className="countdown">
                <div className="countdown-content">
                  <p className="display-number">360 Days</p>

                </div>

                <div className="countdown-content">
                  <p className="display-number">24 Hours</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">59 Min</p>
                </div>

                <div className="countdown-content">
                  <p className="display-number">00 Sec</p>
                </div>
              </div>
            </div>
          </div>



          <div className="all-items">
            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-4.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-3.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-2.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img
                  src="images/best-saler-1.jpg"
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small">
                    <a href="#!" class="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p class="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">
                    Available: <span class="fw-bold">6</span>
                  </p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </React.Fragment>;
}


function Banner() {
  return (
    <React.Fragment>
      <div className=" p-4">
        <div className="container list">
          <div className="items">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="../images/banner_style2.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Diamond_Fashion"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="../images/banner_style.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Diamond_Fashion"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="../images/banner_style1.jpg"
                    className="d-block w-100 img-fluid"
                    alt="Diamond_Fashion"
                  ></img>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="items">
            <img src="../images/banner-left.jpg" alt="Diamond_Fashion"></img>
          </div>

          <div className="items">
            <img src="../images/banner5.jpg" alt="Diamond_Fashion"></img>
          </div>

          <div className="items">
            <img src="../images/banner_woman1.jpg" alt="Diamond_Fashion"></img>
          </div>

          <div className="items">
            <img src="../images/banner_style3.jpg" alt="Diamond_Fashion"></img>
          </div>

          <div className="items">
            <img src="../images/banner_mc2.jpg" alt="Diamond_Fashion"></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Sale() {


  return (
    <div>
      <div className="notification-toast" data-toast>
        {/* <button className="toast-close-btn" data-toast-close>
      <i class="fa-solid fa-xmark"></i>
      </button> */}

        <div className="toast-banner">
          <img
            src="images/best-saler-4.jpg"
            alt="Diamond"
            style={{ width: '100%' }}

          />
        </div>

        <div className="toast-detail">
          <p className="toast-message">Someone in new just bought</p>

          <p className="toast-title">Rose Gold Earrings</p>

          <p className="toast-meta">
            <time dateTime="PT2M">2 Minutes</time> ago
          </p>
        </div>
      </div>

    </div>
  );
}

export { Introduction, CategoriesProduct, Banner, Sale };
