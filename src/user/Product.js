import React, { useState, useEffect } from "react";
import { Navbar, Slogan } from "./Navbar";
import Footer from "./Footer";
import "../css/user/product.css";
import "../css/user/home.css"

function Product() {
  const handleTDClick = (event) => {
    const menuItem = event.currentTarget;
    menuItem.classList.toggle("active");
    const icon = menuItem.querySelector(".bx-chevron-down");

    if (icon) {
      icon.classList.toggle("bx-chevron-up");
    }
  };
  return (
    <React.Fragment>
      <div className='product'>
        <nav >
          <Navbar />
        </nav>

        <section className="breadcrumb-section" style={{ backgroundImage: "url('images/best-saler-1.jpg')" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Diamond Shop</h2>
                  <p>Khám phá một thế giới biến đổi với các sản phẩm của chúng tôi. Cho dù bạn đang tìm cách nâng cấp phong cách của mình, duy trì kết nối hay làm cho ngôi nhà của bạn thông minh hơn, chúng tôi có mọi thứ bạn cần để thay đổi cuộc sống của bạn</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5">
                <div className="sidebar">
                  <div className="sidebar__item">
                    <h4>Department</h4>
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
                    </ul>
                  </div>
                  <div className="sidebar__item">
                    <h4>Price</h4>
                    <div className="price-range-wrap">
                      <div
                        className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                        data-min="10"
                        data-max="540"
                      >
                        <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                        <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                        <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                      </div>
                      <div className="range-slider">
                        <div className="price-input">
                          <input type="text" id="minamount" />
                          <input type="text" id="maxamount" />
                        </div>
                      </div>
                    </div>

                    <div className="sidebar__item sidebar__item__color--option">
                      <h4>Colors</h4>
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
                      <h4>Popular Size</h4>
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
                  <div className="sidebar__item">
                    <div className="latest-product__text">
                      <h4>Latest Products</h4>
                      <div className="latest-product__slider owl-carousel">
                       

                        {/* Slide 2 */}
                        <div className="latest-prdouct__slider__item">
                          <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                              <img src="images/best-saler-4.jpg" alt="" style={{ width: '150px' }} />
                            </div>
                            <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                          </a>
                        </div>

                        {/* Slide 3 */}
                        <div className="latest-prdouct__slider__item">
                          <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                              <img src="images/best-saler-4.jpg" alt="" style={{ width: '150px' }} />
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
                  <div className="section-title product__discount__title">
                    <h2>Đang giảm giá</h2>
                  </div>

                  <div>
                    <div class=" ">
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
                  </div>

                </div>
                <div class="filter__item">
                  <div class="row">
                    <div class="col-lg-4 col-md-5">
                      <div class="filter__sort">
                        <span>Sort By</span>
                        <select>
                          <option value="0">Default</option>
                          <option value="0">Default</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                      <div class="filter__found">
                        <h6><span>16</span> Products found</h6>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-3">
                      <div class="filter__option">
                        <span class="icon_grid-2x2"></span>
                        <span class="icon_ul"></span>
                      </div>
                    </div>
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
                <div class="product__pagination">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Product;
