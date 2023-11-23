import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router';
import { Pattern, Update } from '@mui/icons-material';

function ForgotPass() {
    const [email, setEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [prepassword, setPrePassword] = useState("");
    const [code, setCode] = useState("");
    const [valicode, setValiCode] = useState("");

    const navigate = useNavigate();
    const domain = process.env.REACT_APP_API || "http://localhost:8080";
    const handleForgot = async (e) => {
        if (email === "") {
            alert("VUI LÒNG NHẬP ĐỊA CHỈ EMAIL CỦA BẠN");
        } else {
            e.preventDefault()
            axios
                .post(domain + "/api/account/forgot", { email })
                .then(response => {
                    console.log(response);
                    if (response.data.success) {
                        alert(response.data.message);
                        setCode(response.data.code)
                    } else {
                        alert(response.data.message);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    const handleChangePass = async (e) => {
        e.preventDefault()
        if (newpassword === "") {
            alert("VUI LÒNG NHẬP MẬT KHẨU MỚI CỦA BẠN!");
        } else if (newpassword !== prepassword) {
            alert("MẬT KHẨU NHẬP LẠI KHÔNG CHÍNH XÁC!");
        } else if (newpassword.length < 6) {
            alert("MẬT KHẨU QUÁ NGẮN!");
        }else if (valicode !== code) {
            alert("MÃ XÁC NHẬN KHÔNG CHÍNH XÁC!");
        } else {
            axios
                .post(domain + "/api/account/" + email + "/" + newpassword)
                .then(response => {
                    console.log(response);
                    alert(response.data.message);
                    navigate("/login")
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    return (
        <React.Fragment>
            <div>
                <div className="container padding-bottom-3x mb-2">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10  border p-4 " style={{ marginTop: '120px', borderRadius: '10px' }}>
                            <h2>Quên mật khẩu?</h2>
                            <p>Thay đổi mật khẩu của bạn trong hai bước đơn giản. Điều này giúp giữ mật khẩu mới của bạn an toàn.</p>
                            <ol className="list-unstyled">
                                <li><span className="text-primary text-medium">1. </span>Điền địa chỉ email của bạn dưới đây.</li>
                                <li><span className="text-primary text-medium">2. </span>Chúng tôi sẽ gửi cho bạn mã OTP.</li>
                            </ol>
                            <form className="card mt-4">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label for="email-for-pass">Vui lòng nhập địa chỉ email của bạn:</label>
                                        <input className="form-control" type="text" id="email" required="" onChange={e => setEmail(e.target.value)} />
                                        <small className="form-text text-muted">Nhập địa chỉ email bạn đã sử dụng khi đăng ký. Sau đó, chúng tôi sẽ gửi mã OTP qua email đến địa chỉ này.</small>
                                        <br />
                                        <button className="btn btn-success px-4" type="submit" onClick={handleForgot}>GỬI MÃ</button>
                                    </div>
                                    <div className="form-group">
                                        <label for="email-for-pass">Mã xác nhận</label>
                                        <input className="form-control" type="text" id="newpassword" required="" onChange={e => setValiCode(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label for="email-for-pass">Mật khẩu mới</label>
                                        <input className="form-control" type="password" id="newpassword" required="" onChange={e => setNewPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label for="email-for-pass">Nhập mật khẩu mới</label>
                                        <input className="form-control" type="password" id="prepassword" required="" onChange={e => setPrePassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success px-4" type="submit" onClick={handleChangePass}>Đổi mật khẩu</button>
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