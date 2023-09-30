import React from "react";
import "../css/user/home.css";

function Introduction() {
  return <React.Fragment>
    <main className="mb-4" style={{ marginTop: "100px" }}>
      <section className="hero">
      <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href="#">Fresh Meat</a></li>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruit & Nut Gifts</a></li>
                            <li><a href="#">Fresh Berries</a></li>
                            <li><a href="#">Ocean Foods</a></li>
                            <li><a href="#">Butter & Eggs</a></li>
                            <li><a href="#">Fastfood</a></li>
                            <li><a href="#">Fresh Onion</a></li>
                            <li><a href="#">Papayaya & Crisps</a></li>
                            <li><a href="#">Oatmeal</a></li>
                            <li><a href="#">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>

        <div className="content">
          <div className="div-text">
            <span>Khám phá những xu hướng mới nhất về thời trang, điện tử và hơn thế nữa!</span>
            <h1>Chào mừng đến với Diamond</h1>
            <p>Chào mừng bạn đến với cửa hàng trực tuyến tổng hợp của chúng tôi, nơi bạn có thể tìm thấy bộ sưu tập phong phú các mặt hàng thời trang, đồ điện tử tiên tiến và đồ gia dụng hàng đầu. Chúng tôi phục vụ mọi sở thích và sở thích của người dùng, cung cấp những sản phẩm tốt nhất với mức giá cạnh tranh nhất.</p>
            <button type="button" className="btn btn-warning">Mua sắm ngay</button>
          </div>
        </div>
      </section>


      <section className="sec-2">
        <div className="side-bar">

          <div className="titile">
            <h4>ƯU ĐÃI LỚN</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div class="card mb-4" style={{ width: '320px', marginTop: '20px' }}>
                  <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0">Today's Combo Offer</p>
                    <div
                      class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: '35px', height: '35px' }}>
                      <p class="text-white mb-0 small">x4</p>
                    </div>
                  </div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                    class="card-img-top" alt="Laptop" />
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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

        <div className="content">
          <div className="titile">
            <h4>SẢN PHẨM MỚI</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="all-items">
            <div className="item">
            <div className="div-img">
  <div class="image-container">
    <img src="images/best-saler-4.jpg" alt=""
      style={{ width: '200px', height: '200px', objectFit: 'cover' }}
    ></img>
    <p class="mb-0 small bg-danger text-white">-50%</p>
  </div>
</div>


              <div class="card-body">
              
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
                <img src="images/best-saler-3.jpg" alt=""
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
                <img src="images/best-saler-2.jpg" alt=""
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
                <img src="images/best-saler-1.jpg" alt=""
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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


      <section className="sec-3">
        <div className="side-bar">
          <div className="titile">
            <h4>new offer</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="boxs">
            <div className="box pb-2">
              <img src="images/best-saler-2.jpg" alt=""></img>
              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
              <img src="images/best-saler-3.jpg" alt="" ></img>
              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
              <img src="images/best-saler-4.jpg" alt=""

              ></img>
              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
              <img src="images/best-saler-1.jpg" alt=""

              ></img>
               <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
              <p>Khám phá một thế giới biến đổi với các sản phẩm của chúng tôi. Cho dù bạn đang tìm cách nâng cấp phong cách của mình, duy trì kết nối hay làm cho ngôi nhà của bạn thông minh hơn, chúng tôi có mọi thứ bạn cần để thay đổi cuộc sống của bạn.</p>
              <a href="#" className="btn  btn-warning "> <strong>Mua sắm ngay</strong> </a>
            </div>
          </div>


          <div className="titile">
            <h4>SẢN PHẨM ĐANG KHUYẾN MÃI</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>
          <div className="all-items">
            <div className="item">
              <div className="div-img">
                <img src="images/best-saler-4.jpg" alt=""
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
                <img src="images/best-saler-3.jpg" alt=""
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
                <img src="images/best-saler-2.jpg" alt=""
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
                <img src="images/best-saler-1.jpg" alt=""
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                      <p class="small text-danger"><s>$1099</s></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">HP Notebook</h5>
                      <h5 class="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
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
  </React.Fragment>
}

function CategoriesProduct() {
  return <React.Fragment>

  </React.Fragment>
}

function NewProduct() {
  return <React.Fragment></React.Fragment>
}


function Banner() {
  return <React.Fragment>
    <div className=" p-4" >
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
}

function Sale() {
  return <React.Fragment>
    
  </React.Fragment>;
}



export {
  Introduction,
  CategoriesProduct,
  NewProduct,
  Banner,
  Sale,
};
