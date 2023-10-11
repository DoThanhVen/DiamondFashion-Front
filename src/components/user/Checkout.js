import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class CheckoutForm extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Responsive Checkout Form</h2>
        <p>Resize the browser window to see the effect. When the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other.</p>
        <div className="row">
          <div className="col-md-8">
            <form >
              <div className="row">
                <div className="col-md-6">
                  <h3>Billing Address</h3>
                  <div className="mb-3">
                    <label htmlFor="fname" className="form-label"><i className="fa fa-user"></i> Full Name</label>
                    <input type="text" className="form-control" id="fname" name="firstname" placeholder="John M. Doe" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label"><i className="fa fa-envelope"></i> Email</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="john@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="adr" className="form-label"><i className="fa fa-address-card-o"></i> Address</label>
                    <input type="text" className="form-control" id="adr" name="address" placeholder="542 W. 15th Street" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label"><i className="fa fa-institution"></i> City</label>
                    <input type="text" className="form-control" id="city" name="city" placeholder="New York" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="state" className="form-label">State</label>
                      <input type="text" className="form-control" id="state" name="state" placeholder="NY" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="zip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="zip" name="zip" placeholder="10001" />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <h3>Payment</h3>
                  <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Accepted Cards</label>
                    <div className="icon-container">
                      <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
                      <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
                      <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
                      <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cname" className="form-label">Name on Card</label>
                    <input type="text" className="form-control" id="cname" name="cardname" placeholder="John More Doe" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ccnum" className="form-label">Credit card number</label>
                    <input type="text" className="form-control" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="expmonth" className="form-label">Exp Month</label>
                      <input type="text" className="form-control" id="expmonth" name="expmonth" placeholder="September" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="expyear" className="form-label">Exp Year</label>
                      <input type="text" className="form-control" id="expyear" name="expyear" placeholder="2018" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cvv" name="cvv" placeholder="352" />
                  </div>
                </div>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" checked="checked" id="sameadr" name="sameadr" />
                <label className="form-check-label" htmlFor="sameadr">Shipping address same as billing</label>
              </div>
              <button type="submit" className="btn btn-primary">Continue to checkout</button>
            </form>
          </div>
          <div className="col-md-4">
            <div className="container">
              <h4>Cart <span className="price" style={{ color: 'black' }}><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
              <p><a href="#">Product 1</a> <span className="price">$15</span></p>
              <p><a href="#">Product 2</a> <span className="price">$5</span></p>
              <p><a href="#">Product 3</a> <span className="price">$8</span></p>
              <p><a href="#">Product 4</a> <span className="price">$2</span></p>
              <hr />
              <p>Total <span className="price" style={{ color: 'black' }}><b>$30</b></span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
