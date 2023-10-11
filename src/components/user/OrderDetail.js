import React from 'react';

function OrderReceipt() {
  return (
    <section className="mt-4" >
      <div className="container py-5 h-100 mt-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="" style={{ borderRadius: '10px' }}>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <span className="lead fw-normal">Đơn hàng của bạn</span>
                    <p className="small text-muted mb-0">Mã đơn hàng: 1KAU9-84UIL</p>
                  </div>
                  <div>
                    <button className="btn btn-success" type="button">Giao hàng thành công</button>
                  </div>
                </div>

                <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  
                 
                </div>
                <div className=" mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="img-fluid" alt="Phone" />
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0">Samsung Galaxy</p>
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">White</p>
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">Capacity: 64GB</p>
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">Qty: 1</p>
                      </div>
                      <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">$499</p>
                      </div>
                    </div>
                    <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                    
                  </div>
                </div>
                <div class="d-flex justify-content-between pt-2">
              <p class="fw-bold mb-0">Order Details</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> $898.00</p>
            </div>
            <div class="d-flex justify-content-between pt-2">
              <p class="text-muted mb-0">Invoice Number : 788152</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">Discount</span> $19.00</p>
            </div>

            <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">GST 18%</span> 123</p>
            </div>

            <div class="d-flex justify-content-between mb-5">
              <p class="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">Delivery Charges</span> Free</p>
            </div>

            <div class="card-footer border-0 px-4 py-5"
          >
            <h5 class="d-flex align-items-center justify-content-end  text-uppercase mb-0">Total
              paid: <span class="h2 mb-0 ms-2">$1040</span></h5>
          </div>
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderReceipt;
