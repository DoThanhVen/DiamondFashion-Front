import React from "react";
import "../css/user/home.css";

function Introduction() {
  return <React.Fragment>
    <main class="mb-4" style={{ marginTop: "60px" }}>
      <section class=" section banner banner-section ">
        <div class="mt-4 pb-4 container banner-column">
          <img
            class="banner-image "
            src="../images/fashion.jpg"
            alt="banner"
          ></img>
          <div class="banner-inner">
            <h1 class="heading-xl">
              Bạn đang tìm kiếm trang web thời trang hàng đầu?
            </h1>
            <p class="paragraph">
              Chào mừng đến với trang web thời trang của chúng tôi! Chúng tôi mang
              đến những xu hướng thời trang mới nhất và đa dạng nhất trên thị
              trường.
            </p>
            <button class="btn btn-darken btn-inline">
              Mua sắm ngay<i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  </React.Fragment>
}

function CategoriesProduct() {
  return <React.Fragment>
    <div>
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="mt-4 pr-3">THỂ LOẠI</span>
      </h2>
      <div className=" flex-wrap">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" href="">
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    className="img-fluid"
                    src="../images/fashion.jpg"
                    alt=""
                  ></img>
                </div>
                <div className="flex-fill pl-3">
                  <h6>Category Name</h6>
                  <small className="text-body">100 Products</small>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
}

function NewProduct() {
  return <React.Fragment>
    <div>
     <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="mt-4 pr-3">SẢN PHẨM MỚI NHẤT</span>
      </h2>
      <div className=" d-flex justify-content-center flex-wrap">
        <div class="card-items page-wrapper">
          <div class="page-inner">
            <div class="rows">
              <div class="el-wrapper">
                <div class="box-up">
                  <img
                    class="img"
                    src="../images/best-saler-1.jpg"
                    alt=""
                  ></img>
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">Áo thun</span>
                      <span class="p-color">Đen</span>
                    </div>
                    <div class="a-size">
                      Kích thước : <span class="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart" href="#">
                    <span class="price">$120</span>
                    <span class="add-to-cart">
                      <span class="txt">Thêm vào giỏ hàng</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-items page-wrapper">
          <div class="page-inner">
            <div class="rows">
              <div class="el-wrapper">
                <div class="box-up">
                  <img
                    class="img"
                    src="../images/best-saler-1.jpg"
                    alt=""
                  ></img>
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">Áo thun</span>
                      <span class="p-color">Đen</span>
                    </div>
                    <div class="a-size">
                      Kích thước : <span class="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart" href="#">
                    <span class="price">$120</span>
                    <span class="add-to-cart">
                      <span class="txt">Thêm vào giỏ hàng</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-items page-wrapper">
          <div class="page-inner">
            <div class="rows">
              <div class="el-wrapper">
                <div class="box-up">
                  <img
                    class="img"
                    src="../images/best-saler-1.jpg"
                    alt=""
                  ></img>
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">Áo thun</span>
                      <span class="p-color">Đen</span>
                    </div>
                    <div class="a-size">
                      Kích thước : <span class="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart" href="#">
                    <span class="price">$120</span>
                    <span class="add-to-cart">
                      <span class="txt">Thêm vào giỏ hàng</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-items page-wrapper">
          <div class="page-inner">
            <div class="rows">
              <div class="el-wrapper">
                <div class="box-up">
                  <img
                    class="img"
                    src="../images/best-saler-1.jpg"
                    alt=""
                  ></img>
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">Áo thun</span>
                      <span class="p-color">Đen</span>
                    </div>
                    <div class="a-size">
                      Kích thước : <span class="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart" href="#">
                    <span class="price">$120</span>
                    <span class="add-to-cart">
                      <span class="txt">Thêm vào giỏ hàng</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0px' }}>
      <button type="button" style={{padding: '20px 60px', borderRadius: '0', fontSize: '17px'}} className="btn btn-outline-dark btn-light">XEM THÊM</button>
      </div>
  </React.Fragment>
}

function Banner() {
  return <React.Fragment>
    <div className=" p-4" style={{backgroundColor: 'rgb(236, 236, 236)'}}>
      <div className="container list">
        <div className="items">
          <div
            id="carouselExampleControls"
            class="carousel slide"
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
}

function Sale() {
  return <React.Fragment>
     <h2 className="mt-4 section-title position-relative text-uppercase mx-xl-5 ">
        <span className=" pr-3">ĐANG SALE</span>
      </h2>
      <div className=" d-flex justify-content-center flex-wrap">
        <div class="card-items page-wrapper">
          <div class="page-inner">
            <div class="rows">
              <div class="el-wrapper">
                <div class="box-up">
                  <img
                    class="img"
                    src="../images/best-saler-1.jpg"
                    alt=""
                  ></img>
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">Áo thun</span>
                      <span class="p-color">Đen</span>
                    </div>
                    <div class="a-size">
                      Kích thước : <span class="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart" href="#">
                    <span class="price">$120</span>
                    <span class="add-to-cart">
                      <span class="txt">Thêm vào giỏ hàng</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-items page-wrapper">
          <div class="page-inner">
            <div class="rows">
              <div class="el-wrapper">
                <div class="box-up">
                  <img
                    class="img"
                    src="../images/best-saler-1.jpg"
                    alt=""
                  ></img>
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">Áo thun</span>
                      <span class="p-color">Đen</span>
                    </div>
                    <div class="a-size">
                      Kích thước : <span class="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart" href="#">
                    <span class="price">$120</span>
                    <span class="add-to-cart">
                      <span class="txt">Thêm vào giỏ hàng</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-items page-wrapper">
          <div class="page-inner">
            <div class="rows">
              <div class="el-wrapper">
                <div class="box-up">
                  <img
                    class="img"
                    src="../images/best-saler-1.jpg"
                    alt=""
                  ></img>
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">Áo thun</span>
                      <span class="p-color">Đen</span>
                    </div>
                    <div class="a-size">
                      Kích thước : <span class="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart" href="#">
                    <span class="price">$120</span>
                    <span class="add-to-cart">
                      <span class="txt">Thêm vào giỏ hàng</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-items page-wrapper">
          <div class="page-inner">
            <div class="rows">
              <div class="el-wrapper">
                <div class="box-up">
                  <img
                    class="img"
                    src="../images/best-saler-1.jpg"
                    alt=""
                  ></img>
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">Áo thun</span>
                      <span class="p-color">Đen</span>
                    </div>
                    <div class="a-size">
                      Kích thước : <span class="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart" href="#">
                    <span class="price">$120</span>
                    <span class="add-to-cart">
                      <span class="txt">Thêm vào giỏ hàng</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0px' }}>
      <button type="button" style={{padding: '20px 60px', borderRadius: '0', fontSize: '17px'}} className="btn btn-outline-dark btn-light">XEM THÊM</button>
      </div>
     
  </React.Fragment>;
}



export {
  Introduction,
  CategoriesProduct,
  NewProduct,
  Banner,
  Sale,
};
