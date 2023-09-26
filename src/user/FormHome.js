import React from "react";
import "../css/user/home.css";

function Introduction() {
  return <React.Fragment>
    <main className="mb-4" style={{ marginTop: "100px" }}>
      <section className="hero">
        <div className="side-bar">
          <h4><i className="fa-solid fa-bars"> </i>Danh mục</h4>
          <ul>
            <li>
              <i className="fa-solid fa-house"></i>
              <a href="#">Đồ gia dụng</a>
            </li>
            <li>
              <i className="fa-solid fa-shop"></i>
              <a href="#">Quần áo</a>
            </li>

            <li>
            <i class="bi bi-laptop"></i>
              <a href="#">Laptop</a>
            </li>

            <li>
              <i className="fa-solid fa-clock"></i>
              <a href="#">Đồng hồ</a>
            </li>

            <li>
              <i className="fa-solid fa-shoe-prints"></i>
              <a href="#">Giày</a>
            </li>

            <li>
              <i className="fa-solid fa-blog"></i>
              <a href="#">Điện thoại</a>
            </li>

            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="#">Mắt kính</a>
            </li>

          </ul>
        </div>

        <div className="content">
          <div className="div-text">
            <span>Những sản phẩm chất lượng</span>
            <h1>Chào mừng đến với Diamond Fashion</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <a href="#" className="btn btn-warning ">shop now</a>
          </div>
        </div>
      </section>


      <section className="sec-2">
        <div className="side-bar">

          <div className="titile">
            <h4>hot deals</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="item">
            <div className="div-img">
              <img src="images/best-saler-1.jpg" alt=""
              
              ></img>
            </div>

            <div className="div-text">
              <h4><a href="#">Áo thun tay ngắn</a></h4>

              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>

              </div>
              <div className="price">
                <span>$115</span>
                <del>$160</del>
              </div>
            </div>
          </div>

        </div>

        <div className="content">
          <div className="titile">
            <h4>new products deals</h4>
            <a href="#">Xem nhiều hơn</a>
          </div>

          <div className="all-items d-flex ">
            <div className="item">
              <div className="div-img">
                <img src="images/best-saler-2.jpg" alt=""
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div className="div-text">
                <h4><a href="#">Áo thun tay ngắn</a></h4>

                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <div className="price">
                  <span>$120</span>
                  <del>$140</del>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img src="images/best-saler-3.jpg" alt=""
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div className="div-text">
                <h4><a href="#">Áo thun tay ngắn</a></h4>

                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <div className="price">
                  <span>$120</span>
                  <del>$140</del>
                </div>
              </div>
            </div>


            <div className="item">
              <div className="div-img">
                <img src="images/best-saler-4.jpg" alt=""
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div className="div-text">
                <h4><a href="#">Áo thun tay ngắn</a></h4>

                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <div className="price">
                  <span>$120</span>
                  <del>$140</del>
                </div>
              </div>
            </div>


            <div className="item">
              <div className="div-img">
                <img src="images/best-saler-1.jpg" alt=""
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div className="div-text">
                <h4><a href="#">Áo thun tay ngắn</a></h4>

                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <div className="price">
                  <span>$120</span>
                  <del>$140</del>
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
              <div className="div-text">
                <h4>Áo thun tay ngắn</h4>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <span>$139</span>
              </div>
            </div>

            <div className="box mt-2 pb-2">
              <img src="images/best-saler-3.jpg" alt=""
              
              ></img>
              <div className="div-text">
                <h4>Áo thun tay ngắn</h4>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <span>$139</span>
              </div>
            </div>

            <div className="box mt-2 pb-2">
              <img src="images/best-saler-4.jpg" alt=""
            
              ></img>
              <div className="div-text">
                <h4>Áo thun tay ngắn</h4>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <span>$139</span>
              </div>
            </div>

            <div className="box mt-2 pb-2">
              <img src="images/best-saler-1.jpg" alt=""
             
              ></img>
              <div className="div-text">
                <h4>Áo thun tay ngắn</h4>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <span>$139</span>
              </div>
            </div>

          </div>
        </div>

        <div className="content">
          <div className="bg-sec">
            <div className="div-text">
              <h1>Sản phẩm đa dạng</h1>
              <p>Tha hồ lựa chọn</p>
              <a href="#" className="btn  btn-warning "> <strong>Shop now</strong> </a>
            </div>
          </div>

          <div className="all-items">
            <div className="item">
              <div className="div-img">
                <img src="images/best-saler-4.jpg" alt=""
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div className="div-text">
                <h4><a href="#">Áo thun tay ngắn</a></h4>

                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <div className="price">
                  <span>$120</span>
                  <del>$140</del>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="div-img">
                <img src="images/best-saler-3.jpg" alt=""
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div className="div-text">
                <h4><a href="#">Áo thun tay ngắn</a></h4>

                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <div className="price">
                  <span>$120</span>
                  <del>$140</del>
                </div>
              </div>
            </div>


            <div className="item">
              <div className="div-img">
                <img src="images/best-saler-2.jpg" alt=""
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div className="div-text">
                <h4><a href="#">Áo thun tay ngắn</a></h4>

                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <div className="price">
                  <span>$120</span>
                  <del>$140</del>
                </div>
              </div>
            </div>


            <div className="item">
              <div className="div-img">
                <img src="images/best-saler-1.jpg" alt=""
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                ></img>
              </div>

              <div className="div-text">
                <h4><a href="#">Áo thun tay ngắn</a></h4>

                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>

                </div>
                <div className="price">
                  <span>$120</span>
                  <del>$140</del>
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
