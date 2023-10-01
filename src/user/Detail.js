import React from 'react';
import "../css/user/detail.css";
import { Navbar } from './Navbar';
import Footer from './Footer';
import { products, image } from './data';


class ProductPage extends React.Component {

  render() {

    return (

      <div className='detail'>
        <nav >
          <Navbar />
        </nav>

        <section className="py-5" style={{ marginTop: '70px' }}>
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className=" rounded-4 mb-3 d-flex justify-content-center">

                  <img
                    style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }}
                    className="rounded-4 fit"
                    src="images/best-saler-1.jpg"
                    alt="Product"

                  />

                </div>
                <div className="mb-3 d-flex justify-content-center">
                  {image.map((path, index) => (
                    <img
                      key={index}
                      className=" px-2"
                      src={path.imagePath}
                      alt={`Thumbnail ${index + 1}`}
                      style={{ width: '90px', height: '90px' }}
                    />
                  ))}
                </div>
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">
                    Quality Men's Hoodie for Winter, Men's Fashion <br />
                    Casual Hoodie
                  </h4>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1"></i>154 lượt mua
                    </span>

                  </div>

                  <div className="mb-3">
                    <span className="h5">
                      <div className="sale-price" style={{ fontSize: '25px' }}>
                        <del>2.499.000 <sup>đ</sup> </del>
                      </div>
                      <div className="d-flex ">
                        <h2 className="text-danger">1.499.000 <sup>đ</sup> </h2>
                        <div className="sale ms-4 bg-danger text-light mb-2 p-1">
                          <b>Giảm 50%</b>
                        </div>
                      </div>
                    </span>

                  </div>

                  <div className='address mb-2'>
                    <b>
                      <span className="title ">ĐỊA CHỈ GIAO HÀNG</span>
                    </b>
                    <br />
                    <span>Tô Ký, Quận 12, TP Hồ Chí Minh</span>
                    <a href='#' style={{ color: 'blue', marginLeft: '10px' }}>Thay đổi</a>
                  </div>


                  {/* <div className="row">
                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">Regular</dd>

                    <dt className="col-3">Color</dt>
                    <dd className="col-9">Brown</dd>

                    <dt className="col-3">Material</dt>
                    <dd className="col-9">Cotton, Jeans</dd>

                    <dt className="col-3">Brand</dt>
                    <dd className="col-9">Reebook</dd>
                  </div> */}

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


                  <hr />
                  <div className="col-md-4 col-6 mb-3">
                  <b>
                      <span className="title ">SỐ LƯỢNG</span>
                    </b>
                      <div className="input-group mb-3" style={{ width: '170px' }}>
                        <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                          <i class="bi bi-dash"></i>
                        </button>
                        <input type="text" className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                          <i class="bi bi-plus-lg"></i>
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
                  <a href="#" className="btn  shadow-0 " style={{backgroundColor: ' rgb(252,162,53)', padding: '10px 50px'}} >
                    <i className="bi bi-bag-plus mx-2"></i>
                    Mua ngay
                  </a>
                  <a href="#" className="btn  shadow-0 mx-4 text-white
                  " style={{backgroundColor: ' rgb(48,83,73)', padding: '10px 50px'}} >
                    <i className="bi bi-basket3-fill"></i>
                    <strong> Thêm vào giỏ hàng</strong>
                  </a>

                </div>
              </main>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-8 mb-4 d-flex">
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
          </div>
        </div>


        <section className=" border-top pt-4">

          <div className="container">
            <div className="row gx-4">
              <div className="col-lg-8 mb-4">

                <div className="border  p-3  bg-white">
                  <b>
                    <span className="title ">MÔ TẢ SẢN PHẨM</span>
                  </b>
                  <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                      <p>
                        Thời gian giao hàng dự kiến cho sản phẩm này là từ 3-4 ngày
                        QUY CÁCH SẢN PHẨM : Kích thước / loại giấy
                        Chi tiết sản phẩm:

                        Khổ giấy A6 : 105x148mm
                        Khổ giấy A5:150 * 213mm
                        Khổ giấy B5: 186 * 256mm
                        Có 3 loại giấy
                        - giấy trắng ngà : Dùng vẽ, học bài, kẻ sơ đồ mind map
                        - giấy caro : dùng viết bài, viết chữ đẹp
                        - giấy dot : viết calligraphy, nhật kí
                        Số trang: 140 trang (70 tờ)

                        về cửa hàng:
                        - cam kết hình ảnh thực tế
                        - giao hàng nhanh chóng
                        - Luôn hỗ trợ sau bán hàng
                        Tên sản phẩm:Sổ Plas A5 B5 sổ tay lò xo bìa lá 80 tờ
                        Nhà cung câp: Ningbo Jixianghe Stationery Co., Ltd.
                        Địa chỉ sản xuất: Room 2101, Block A, European Classic, No. 172 Beiyuan Road, Chaoyang District, Beijing, China

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
                            src="images/cash.png "
                            alt="Thanh toán khi nhận hàng "
                            style={{ width: '50px' }}
                          />
                          <span>Thanh toán khi nhận hàng</span>
                        </li>
                        <li>
                          <img
                            src="images/momo.png "
                            alt="Momo "
                            width="60px "
                            style={{ width: '30px' }}
                          />
                          <img
                            src="images/mastercard.png "
                            alt="E-bank "
                            width="60px "
                            className="ms-2 "
                            style={{ width: '40px' }}
                          />
                          <img
                            src="images/paypal.png "
                            alt="Paypal "
                            width="60px "
                            className="ms-2 "
                            style={{ width: '80px' }}
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
              <div className="col-lg-4">
                <div className="px-0 border  shadow-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Sản phẩm tương tự</h5>

                      {products.map((product, index) => (
                        <div className="d-flex mb-3" key={index}>
                          <a href="#" className="me-3">
                            <img
                              src={product.imagePath}
                              style={{ minWidth: '96px', height: '96px' }}
                              className="img-md"
                              alt={`Similar Product ${index + 1}`}
                            />
                          </a>
                          <div className="info">
                            <a href="#" className="nav-link mb-1">
                              {product.name}
                            </a>
                            <strong className="text-dark"> ${product.price.toFixed(2)}</strong>
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

                <div className="border  p-3  bg-white">
                  <div className="reviews ">
                    <b>
                      <span className="title ">ĐÁNH GIÁ SẢN PHẨM</span>
                    </b>

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

              </div>
            </div>

          </div>
        </section>



        


        <div id="footer">
          <Footer />
        </div>
      </div >

    );

  }

}

export default ProductPage;