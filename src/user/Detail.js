import React from 'react';
import "../css/user/detail.css";
import { Navbar } from './Navbar';
import Footer from './Footer';

class ProductPage extends React.Component {
  constructor(props) {
    super(props); //Gọi từ lớp cha
    this.state = { //Khởi tạo trạng thái ban đầu
      selectedImage: 'images/best-saler-2.jpg', //First status
    };
  }

  // Change image

  changeImage = (newImageSrc) => {
    this.setState({ selectedImage: newImageSrc }); //Cập nhật trạng thái khi người dùng chọn ảnh con để thay đổi ảnh cha
  };

  render() {
    
    return (

      <div className='detail'>
       <nav>
        <Navbar />
      </nav>
        <div className=" " style={{paddingBottom: '50px'}} >
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ms-3 mb-3">
              <li className="breadcrumb-item active " aria-current="page">
                <a href="Index.html" className="text-decoration-none text-dark">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item active " aria-current="page">
                <a href="Category.html" className="text-decoration-none text-dark">
                  Sản phẩm
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a href="Product.html" className=" text-dark">
                  Áo Thun Kẻ Sọc Dài Tay
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="xl-9 ">
          <div className="container ">
            <div className="row bg-body p-4" style={{borderRadius: '6px'}}>
             
              <div className="col-lg-5 bg-body ">
                <img
                  id="largeImage"
                  src={this.state.selectedImage}
                  style={{ width: '100%' }}
                  className="img-fluid"
                  alt=""
                />
                <hr style={{ width: '100%' }} />
                <div className="d-flex  flex-wrap">
                  <img
                    className="img-thumbnail"
                    style={{ width: '100px' }}
                    src="images/best-saler-2.jpg"
                    alt=""
                    onClick={() => this.changeImage('images/best-saler-2.jpg')}
                  />
                   <img
                    className="img-thumbnail"
                    style={{ width: '100px' }}
                    src="images/best-saler-2.jpg"
                    alt=""
                    onClick={() => this.changeImage('images/best-saler-2.jpg')}
                  />
                   <img
                    className="img-thumbnail"
                    style={{ width: '100px' }}
                    src="images/best-saler-2.jpg"
                    alt=""
                    onClick={() => this.changeImage('images/best-saler-2.jpg')}
                  />
                  <img
                    className="img-thumbnail"
                    style={{ width: '100px' }}
                    src="images/best-saler-3.jpg"
                    alt=""
                    onClick={() => this.changeImage('images/best-saler-3.jpg')}
                  />
                 
                  <img
                    className="img-thumbnail"
                    style={{ width: '100px' }}
                    src="images/best-saler-4.jpg"
                    alt=""
                    onClick={() => this.changeImage('images/best-saler-4.jpg')}
                  />
                </div>
              </div>
             
              <div className="col-lg-7   bg-body ">
                <h4>
                  <b>Áo Thun Kẻ Sọc Dài Tay</b>
                </h4>
                <div className="sale-price" style={{ fontSize: '25px' }}>
                  <del>2.499.000 <sup>đ</sup> </del>
                </div>

                <div className="d-flex ">
                  <h2 className="text-danger">1.499.000 <sup>đ</sup> </h2>
                  <div className="sale ms-4 bg-danger text-light mb-4 p-1">
                    <b>Giảm 50%</b>
                  </div>
                </div>
                <div className="color">
                  <b>
                    <span className="title ">MÀU SẮC</span>
                  </b>
                  <div className="color-item ">
                    <div className=" pt-2 d-flex ">
                      <span
                        className="border "
                        name="color"
                        tabIndex="1"
                        style={{ padding: '10px 15px' }}
                      >
                        Đen
                      </span>
                      <span
                        className="border ms-2 "
                        name="color"
                        tabIndex="2"
                        style={{ padding: '10px 15px' }}
                      >
                        Trắng
                      </span>
                      <span
                        className="border ms-2 "
                        name="color"
                        tabIndex="3"
                        style={{ padding: '10px 15px' }}
                      >
                        Xanh lá
                      </span>
                    </div>
                  </div>
                </div>
                <div className="size pt-4 pb-4">
                  <b>
                    <span className="title ">KÍCH CỠ</span>
                  </b>
                  <div className="size-item pt-2 d-flex ">
                    <span
                      className="border "
                      name="size"
                      tabIndex="4"
                      style={{ padding: '10px 15px' }}
                    >
                      XS
                    </span>
                    <span
                      className="border ms-2 "
                      name="size"
                      tabIndex="5"
                      style={{ padding: '10px 15px' }}
                    >
                      S
                    </span>
                    <span
                      className="border ms-2 "
                      name="size"
                      tabIndex="6"
                      style={{ padding: '10px 15px' }}
                    >
                      M
                    </span>
                    <span
                      className="border ms-2 "
                      name="size"
                      tabIndex="7"
                      style={{ padding: '10px 15px' }}
                    >
                      L
                    </span>
                    <span
                      className="border ms-2 "
                      name="size"
                      tabIndex="8"
                      style={{ padding: '10px 15px' }}
                    >
                      XL
                    </span>
                  </div>
                </div>
                <div className="quantity ">
                  <b>
                    <span className="title ">SỐ LƯỢNG</span>
                  </b>
                  <div className="d-flex ">
                    <button
                      type="button"
                      className="btn border btn-minus"
                      style={{ padding: '10px 15px' }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="quantity-input "
                      min="1"
                      max="10"
                      step="1"
                      defaultValue="1"
                      style={{ padding: '10px 15px' }}
                    />
                    <button
                      type="button"
                      className="btn border btn-plus"
                      style={{ padding: '10px 15px' }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className='address mt-4'>
                  <b>
                    <span className="title ">ĐỊA CHỈ GIAO HÀNG</span>
                  </b>
                  <br />
                  <p>Tô Ký, Quận 12, TP Hồ Chí Minh</p>
                  <a href='#' style={{ color: 'blue' }}>Thay đổi</a>
                </div>

                <div className="add-to-cart-button mt-5 ">
                  <button
                    className="btn btn-outline-dark "
                    style={{ padding: '10px 20px' }}
                  > <i className="bi bi-cart mx-2"></i>
                    <b>THÊM VÀO GIỎ HÀNG</b>
                  </button>
                  <button
                    className="btn btn-danger  ms-2"
                    style={{ padding: '10px 20px' }}
                  >
                    <b>MUA NGAY</b>
                  </button>
                </div>
                {/* <div className="share mt-4 ">
                  <b>
                    <span className="title">CHIA SẺ</span>
                  </b>
                  <div className="pt-3 ">
                    <div className="share-item d-flex ">
                      <a
                        href="/"
                        className="text-decoration-none"
                        tabIndex="9"
                        style={{ padding: '10px 15px', border: '1px solid #e0e0e0' }}
                      >
                        <img src="img/facebook.png" alt="" width="25px" />
                      </a>
                      <a
                        href="/"
                        className="text-decoration-none ms-2"
                        tabIndex="10"
                        style={{ padding: '10px 15px', border: '1px solid #e0e0e0' }}
                      >
                        <img src="img/twitter.png" alt="" width="25px" />
                      </a>
                      <a
                        href="/"
                        className="text-decoration-none ms-2"
                        tabIndex="11"
                        style={{ padding: '10px 15px', border: '1px solid #e0e0e0' }}
                      >
                        <img src="img/google.png" alt="" width="25px" />
                      </a>
                      <a
                        href="/"
                        className="text-decoration-none ms-2"
                        tabIndex="12"
                        style={{ padding: '10px 15px', border: '1px solid #e0e0e0' }}
                      >
                        <img src="img/instagram.png" alt="" width="25px" />
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
             
            </div>
          </div>
        </div>

        <div className="d-flex mt-2 container  bg-danger p-2" style={{borderRadius: '5px' }}>
          <img
            src="images/best-saler-2.jpg"
            className="rounded-circle shop-image"
            alt="Diamond_Fashion"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
          <div className="shop-name ms-4 ">
            <b>Tên shop</b> <br />
            <span>Địa chỉ shop</span>
          </div>
        </div>


        <div className="description mt-2 ">
          <div className="container ">
            <div className="row ">
              
              <div className="col-lg-9 ">
                <div className="description-content  bg-body p-2 mb-2 " style={{borderRadius: '5px'}}>
                  <b>
                    <span className="title">MÔ TẢ SẢN PHẨM</span>
                  </b>
                  <p className="pt-2 ">
                    Áo thun kẻ sọc dài tay là sự kết hợp hoàn hảo giữa phong cách
                    trẻ trung và năng động. Với thiết kế kẻ sọc tinh tế và màu
                    sắc trung tính, chiếc áo này phù hợp để bạn mặc trong nhiều
                    dịp khác nhau. Chất liệu vải cotton thoáng mát, mềm mại và
                    co giãn tốt giúp bạn cảm thấy thoải mái suốt cả ngày. Áo có
                    form dáng slim fit ôm sát cơ thể, tôn lên vóc dáng của bạn.
                    Đường may tỉ mỉ cùng các chi tiết như cổ tròn, tay dài và
                    logo thương hiệu thêu trên ngực trái làm cho chiếc áo thêm
                    phần hoàn hảo. Hãy bổ sung ngay chiếc áo thun kẻ sọc dài
                    tay này vào bộ sưu tập thời trang của bạn!
                  </p>
                </div>
                <div className="additional-information  bg-body  p-2 ">
                  <b>
                    <span className="title">THÔNG TIN BỔ SUNG</span>
                  </b>
                  <div className="pt-2 ">
                    <table className="table table-bordered ">
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



                <div className='row ' style={{ marginTop: '40px' }}>

                  <div className='col-md-8 '>
                    <div className="reviews ">
                      <b>
                        <span className="title ">ĐÁNH GIÁ SẢN PHẨM</span>
                      </b>
                      <div class="inner">
                      <div class="rating">
                        <span class="rating-num">4.0</span>
                        <div className="d-flex align-items-center "  style={{marginLeft: '95px'}}>
                          <div className="star-rating ">
                            <span className="star ">
                              <i className="bi bi-star-fill "></i>
                            </span>
                            <span className="star ">
                              <i className="bi bi-star-fill "></i>
                            </span>
                            <span className="star ">
                              <i className="bi bi-star-fill "></i>
                            </span>
                            <span className="star ">
                              <i className="bi bi-star-fill "></i>
                            </span>
                            <span className="star ">
                              <i className="bi bi-star "></i>
                            </span>
                          </div>

                        </div>
                        <div class="rating-users">
                          <i class="icon-user"></i> 1,014,004 total
                        </div>
                      </div>

                      <div class="histo">
                        <div class="five histo-rate">
                          <span class="histo-star">
                            <i class="active icon-star"></i> 5 </span>
                          <span class="bar-block">
                            <span id="bar-five" class="bar">
                              <span>566,784</span>&nbsp;
                            </span>
                          </span>
                        </div>

                        <div class="four histo-rate">
                          <span class="histo-star">
                            <i class="active icon-star"></i> 4 </span>
                          <span class="bar-block">
                            <span id="bar-four" class="bar">
                              <span>171,298</span>&nbsp;
                            </span>
                          </span>
                        </div>

                        <div class="three histo-rate">
                          <span class="histo-star">
                            <i class="active icon-star"></i> 3 </span>
                          <span class="bar-block">
                            <span id="bar-three" class="bar">
                              <span>94,940</span>&nbsp;
                            </span>
                          </span>
                        </div>

                        <div class="two histo-rate">
                          <span class="histo-star">
                            <i class="active icon-star"></i> 2 </span>
                          <span class="bar-block">
                            <span id="bar-two" class="bar">
                              <span>44,525</span>&nbsp;
                            </span>
                          </span>
                        </div>

                        <div class="one histo-rate">
                          <span class="histo-star">
                            <i class="active icon-star"></i> 1 </span>
                          <span class="bar-block">
                            <span id="bar-one" class="bar">
                              <span>136,457</span>&nbsp;
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>


                      <div className="pt-2 ">
                        <div className="mt-3 ">
                          <div className="user-review ">
                            <div className="d-flex align-items-center ">
                              <img src="images/best-saler-2.jpg " alt=" " style={{ width: 50, height: 50, borderRadius: '50%' }} />
                              <div className="ms-3 ">
                                <h6 className="mb-0 "> <b> Crush 1</b></h6>
                                <span className="star-rating ">
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <p className="mt-2 ">
                              Áo thun rất thoải mái và chất lượng tốt. Tôi rất hài lòng
                              với sản phẩm này.
                            </p>
                            <div className='rep-comment'>
                              <div className="shop-name ms-4">
                                <b>Tên shop</b> <br />
                                <span>Cảm ơn bạn đã mua hàng</span>
                              </div>
                            </div>
                          </div>
                          <div className="user-review mt-4 ">
                            <div className="d-flex align-items-center ">
                              <img src="images/best-saler-2.jpg " alt=" " style={{ width: 50, height: 50, borderRadius: '50%' }} />
                              <div className="ms-3 ">
                                <h6 className="mb-0 "><b> Crush 2</b></h6>
                                <span className="star-rating ">
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star "></i>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <p className="mt-2 ">
                              Áo thun không tệ, nhưng màu sắc hơi nhạt so với ảnh.
                            </p>
                          </div>
                          <div className="user-review mt-4 ">
                            <div className="d-flex align-items-center ">
                              <img src="images/best-saler-2.jpg " alt=" " style={{ width: 50, height: 50, borderRadius: '50%' }} />
                              <div className="ms-3 ">
                                <h6 className="mb-0 "><b> Crush 1</b></h6>
                                <span className="star-rating ">
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star-fill "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star "></i>
                                  </span>
                                  <span className="star ">
                                    <i className="bi bi-star "></i>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <p className="mt-2 ">
                              Chất lượng sản phẩm không tương xứng với giá tiền.
                            </p>
                            <div className='rep-comment'>
                              <div className="shop-name ms-4">
                                <b>Tên shop</b> <br />
                                <span>Xin lỗi về bạn về sự không hài lòng của bạn. Shop sẽ lưu ý và cố gắng chỉnh sửa cho hoàn thiện</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 mb-4 text-center'>
                    <button
                    className="btn btn-outline-dark "
                    style={{ padding: '10px 20px' }}
                  > 
                    <b>XEM THÊM</b>
                  </button>
                    </div>
                  </div>
                  
                  <div className='col-md-1 '></div>
                  <div className='col-md-3 '>
                   
                  </div>

                </div>
                {/* <div className="write-review mt-4">
                  <b>
                    <span className="title ">VIẾT ĐÁNH GIÁ</span>
                  </b>
                  <div className="pt-2 ">
                    <form action="# ">
                      <div className="row ">
                        <div className="col-md-6 ">
                          <div className="mb-3 ">
                            <label
                              htmlFor="your-name "
                              className="form-label "
                            >
                              Tên của bạn
                            </label>
                            <input
                              type="text "
                              className="form-control "
                              id="your-name "
                              placeholder="Nhập tên của bạn "
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="mb-3 ">
                            <label
                              htmlFor="email-address "
                              className="form-label "
                            >
                              Địa chỉ email
                            </label>
                            <input
                              type="email "
                              className="form-control "
                              id="email-address "
                              placeholder="Nhập địa chỉ email "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 ">
                        <label
                          htmlFor="your-review "
                          className="form-label "
                        >
                          Đánh giá của bạn
                        </label>
                        <textarea
                          className="form-control "
                          id="your-review "
                          rows="4 "
                          placeholder="Viết đánh giá của bạn "
                        ></textarea>
                      </div>
                      <div className="d-flex align-items-center ">
                        <div className="star-rating ">
                          <span className="star ">
                            <i className="bi bi-star "></i>
                          </span>
                          <span className="star ">
                            <i className="bi bi-star "></i>
                          </span>
                          <span className="star ">
                            <i className="bi bi-star "></i>
                          </span>
                          <span className="star ">
                            <i className="bi bi-star "></i>
                          </span>
                          <span className="star ">
                            <i className="bi bi-star "></i>
                          </span>
                        </div>

                      </div>
                    </form>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-3  ">
                <div className="product-sidebar  bg-body p-2" style={{borderRadius: '5px' }}>
                  <div className="shipping-info ">
                    <b>
                      <span className="title ">THÔNG TIN GIAO HÀNG</span>
                    </b>
                    <div className="pt-2 ">
                      <ul>
                        <li>
                          <strong>Miễn phí giao hàng</strong> cho đơn hàng trên 500.000 VNĐ.
                        </li>
                        <li>
                          <strong>Giao hàng toàn quốc</strong>, bạn có thể nhận hàng ở bất kỳ đâu.
                        </li>
                        <li>
                          Thời gian giao hàng dự kiến: từ <strong>3-7 ngày làm việc</strong>.
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
                            src=". "
                            alt="Thanh toán khi nhận hàng "
                            style={{ width: '50px' }}
                          />

                        </li>
                        <li>
                          <img
                            src="img/visa.png "
                            alt="Momo "
                            width="60px "
                          />
                          <img
                            src="img/mastercard.png "
                            alt="E-bank "
                            width="60px "
                            className="ms-2 "
                          />
                          <img
                            src="img/paypal.png "
                            alt="Paypal "
                            width="60px "
                            className="ms-2 "
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
                          <strong>Chấp nhận đổi trả</strong> trong vòng 7 ngày kể từ ngày nhận hàng.
                        </li>
                        <li>
                          Sản phẩm phải còn <strong>nguyên vẹn và không bị hỏng hóc</strong>.
                        </li>
                        <li>
                          Để biết thêm chi tiết về chính sách đổi trả, vui lòng liên hệ hotline: <strong>0123 456 789</strong>.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
        <Footer />
      </div>
      </div>


    );

  }
}

export default ProductPage;
