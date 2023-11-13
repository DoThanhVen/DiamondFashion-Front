import React, { useRef, useState } from 'react';
import '../account/otp.css';
import { Accordion, Card, Button } from 'react-bootstrap';

export default function Otp() {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [otpValues, setOtpValues] = useState(['', '', '', '']);

  const handleInputChange = (e, index) => {
    const input = e.target;
    let value = input.value;

    // Ensure the value is a single digit
    value = value.replace(/[^0-9]/g, '');

    // Update the input value with the sanitized value
    input.value = value;

    if (value.length === 1) {
      if (index < 3) {
        // Move focus to the next input field
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (index > 0) {
        // Move focus to the previous input field when backspace is pressed
        inputRefs[index - 1].current.focus();
      } else if (index === 0) {
        // Clear the current input if it's the first one
        inputRefs[index].current.value = '';
      }
    }
  };

  const handleReset = () => {
    // Clear all input fields and reset the OTP values
    inputRefs.forEach((ref) => (ref.current.value = ''));
    setOtpValues(['', '', '', '']);
    inputRefs[0].current.focus(); // Set focus on the first input
  };


  return (
    <div className='OTP'>
      <form className="formOTP">
        <div className="titleOTP">OTP</div>
        <div className="titleOTP">Mã xác nhận</div>
        <p className="messageOTP">
          Chúng tôi đã gửi mã xác minh đến Email của bạn
        </p>
        <div className="inputsOTP">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={inputRefs[index]}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <div className=' d-flex justify-content-around mt-4  '>
        <button className="btn btn-secondary text-white mx-2" type="button" onClick={handleReset}>Làm mới</button>
        <button className="btn btn-success mx-2">Xác minh</button>
       
        </div>
       
      </form>
    </div>
  );
}
