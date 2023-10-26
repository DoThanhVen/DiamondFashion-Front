import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const domain = process.env.REACT_APP_API || "http://localhost:8080";
  const handleLogin = async () => {
    axios
      .post(domain + "/api/account/login", { username, password })
      .then(response => {
        if (response.data.status === true) {
          Swal.fire({
            icon:"info",
            title: 'THÔNG BÁO !',
            text:'Bạn có đồng ý thay đổi thông tin sản phẩm ?',
            showCancelButton:true,
            confirmButtonText: 'Đồng Ý',
            confirmButtonColor:'green',
            cancelButtonText:'Từ Chối',
            cancelButtonColor:'red'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Thay đổi thông tin thành công !', '', 'success')
            } else if (result.isDismissed) {
              Swal.fire('Thay đổi thông tin thất bại', '', 'error')
            }
          })
        } else {
          alert("ĐĂNG NHẬP THẤT BẠI");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="text"
        id="username"
        onChange={e => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="text"
        id="password"
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <button className={`btn btn-primary mt-3`} onClick={handleLogin}>
        ĐĂNG NHẬP
      </button>
    </React.Fragment>
  );
}

export default Login;
