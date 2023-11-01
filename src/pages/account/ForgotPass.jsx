import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router';

function ForgotPass() {
    const [email, SetEmail] = useState("");
    const navigate = useNavigate();
    const domain = process.env.REACT_APP_API || "http://localhost:8080";
    const handleForgot = async (e) => {
        e.preventDefault()
        axios
            .post(domain + "/api/account/forgot", { email })
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    alert(response.data.message);
                    navigate("/login")
                } else {
                    alert("KHÔNG TỒN TẠI TÀI KHOẢN CÓ EMAIL ", {email});
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <React.Fragment>
            <div>
                <div className="container padding-bottom-3x mb-2">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10  border p-4 " style={{ marginTop: '120px', borderRadius: '10px' }}>
                            <h2>Quên mật khẩu?</h2>
                            <p>Thay đổi mật khẩu của bạn trong ba bước đơn giản. Điều này giúp giữ mật khẩu mới của bạn an toàn.</p>
                            <ol className="list-unstyled">
                                <li><span className="text-primary text-medium">1. </span>Điền địa chỉ email của bạn dưới đây.</li>
                                <li><span className="text-primary text-medium">2. </span>Chúng tôi sẽ gửi cho bạn mã OTP tạm thời qua email.</li>
                                <li><span className="text-primary text-medium">3. </span>Sử dụng mã để thay đổi mật khẩu của bạn trên trang web của chúng tôi.</li>
                            </ol>
                            <form className="card mt-4">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label for="email-for-pass">Vui lòng nhập địa chỉ email của bạn:</label>
                                        <input className="form-control" type="text" id="email" required="" onChange={e => SetEmail(e.target.value)} />
                                        <small className="form-text text-muted">Nhập địa chỉ email bạn đã sử dụng khi đăng ký. Sau đó, chúng tôi sẽ gửi mã qua email đến địa chỉ này.</small>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success px-4" type="submit"  onClick={handleForgot}>Gửi mã</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ForgotPass;