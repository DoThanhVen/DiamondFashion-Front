import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ProductIntroduction() {
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Mở modal tự động sau 500 milliseconds (0.5 giây) khi trang web được tải

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500); // Modal sẽ mở sau 0.5 giây

    // Update the countdown every second

    const endDate = new Date("2023-12-25 23:59:59");
    const calculateTime = () => {
      const currentDate = new Date();
      const timeRemaining = endDate - currentDate;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    };
    const timerSale = setInterval(calculateTime, 1000);
    return () => {
      clearTimeout(timer); // Hủy bỏ timer nếu component unmount
      clearInterval(timer); // Clean up timer on unmount
    };
    calculateTime(); // Initial calculation
  }, []);

  const handleClose = () => {
    // Đóng modal khi người dùng nhấn nút Đóng hoặc bấm nút ngoài modal
    setShowModal(false);
  };
  return (
    <div className="Introduction">
    <Modal
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="newsletter">
          <form action="#">
            <img
              src="/images/sale_christmas.gif"
              style={{ width: "260px" }}
              alt=""
            ></img>
            <div className="newsletter-header">
              {/* <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                <p className="newsletter-desc">
                  Subscribe the <b>Anon</b> to get latest products and discount update.
                </p> */}

              <div className="countdown-box mt-2">
                <p className="countdown-desc">
                  Nhanh lên! Ưu đãi kết thúc sau:
                </p>

                <div className="countdown">
                  <div className="countdown-content">
                    <p className="display-number">{countdown.days} Days</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">{countdown.hours} Hours</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">{countdown.minutes} Min</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">{countdown.seconds} Sec</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <input
              type="email"
              name="email"
              className="email-field"
              placeholder="Email Address"
              required
            /> */}

            {/* <button type="submit" className="btn-newsletter">
              Bắt đầu mua
            </button> */}
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* Đặt nút hoặc nội dung footer của modal ở đây */}
      </Modal.Footer>
    </Modal>
  </div>
  )
}
