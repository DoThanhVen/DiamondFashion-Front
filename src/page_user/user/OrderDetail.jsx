import React from 'react';
import MainNavbar from "../components/Navbar";
import Footer from "../components/Footer";
function OrderReceipt() {
  return (
    <>
     <nav >
          <MainNavbar />
        </nav>
      <div className="container-fluid mt-2">
        <div className="container">
          {/* Title */}
          <div className="d-flex justify-content-between align-items-center py-3">
            <h2 className="h5 mb-0"><a href="#" className="text-muted"></a> Chi tiết đơn hàng</h2>
          </div>

          {/* Main content */}
          <div className="row">
            <div className="col-lg-8">
              {/* Details */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="mb-3 d-flex justify-content-between">
                    <div>
                      <span className="me-3">22-11-2021</span>
                      <span className="me-3">#16123222</span>
                      <span className="me-3">Visa -1234</span>
                      <span className="badge rounded-pill bg-info">Đang giao</span>
                    </div>
                    <div className="d-flex">
                      {/* <button className="btn btn-link p-0 me-3 d-none d-lg-block btn-icon-text"><i className="bi bi-download"></i> <span className="text">Invoice</span></button> */}
                      <div className="dropdown">
                        <button className="btn btn-link p-0 text-muted" type="button" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item" href="#"><i className="bi bi-pencil"></i> Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="bi bi-printer"></i> Print</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex mb-2">
                            <div className="flex-shrink-0">
                              <img src="https://www.bootdey.com/image/280x280/87CEFA/000000" style={{width: '80px', height: '80px'}} alt="" width="35" className="img-fluid" />
                            </div>
                            <div className="flex-lg-grow-1 ms-3">
                              <h6 className="small mb-0 text-start">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h6>
                              <h6 className="small mt-2 text-start">Màu: Black</h6>
                              <h6 className="small mt-2 text-start">Số lượng: 1</h6>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">$79.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                    
                      <tr>
                        <td colSpan="2" className='text-start'>Phí vận chuyển</td>
                        <td className="text-end">$20.00</td>
                      </tr>
                      <tr>
                        <td colSpan="2" className='text-start'>Giảm giá</td>
                        <td className="text-danger text-end">-$10.00</td>
                      </tr>
                      <tr className="fw-bold">
                        <td colSpan="2" className='text-start'>Tổng cộng</td>
                        <td className="text-end">$169,98</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              {/* Payment */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="h6">Thông tin thanh toán</h3>
                      <p>Visa -1234 <br />
                        Tổng cộng: $169,98 <span className="badge bg-success rounded-pill">Đã thanh toán</span></p>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="h6">Địa chỉ thanh toán</h3>
                      <address>
                        <strong>John Doe</strong><br />
                        1355 Market St, Suite 900<br />
                        San Francisco, CA 94103<br />
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Customer Notes */}
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="h6">Ghi chú</h3>
                  <p>Sed enim, faucibus litora velit vestibulum habitasse. Cras lobortis cum sem aliquet mauris rutrum. Sollicitudin. Morbi, sem tellus vestibulum porttitor.</p>
                </div>
              </div>
              <div className="card mb-4">
                {/* Shipping information */}
                <div className="card-body">
                  <h3 className="h6">Thông tin vận chuyển</h3>
                  <strong>FedEx</strong>
                  <span><a href="#" className="text-decoration-underline" target="_blank">FF1234567890</a> <i className="bi bi-box-arrow-up-right"></i> </span>
                  <hr />
                  <h3 className="h6">Địa chỉ</h3>
                  <address>
                    <strong>John Doe</strong><br />
                    1355 Market St, Suite 900<br />
                    San Francisco, CA 94103<br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
          <Footer />
        </div>
    </>
  );
}

export default OrderReceipt;
