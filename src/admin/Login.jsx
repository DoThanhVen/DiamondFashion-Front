import React, { useState } from "react";
import axios from "axios";
import ThongBao from "../service/ThongBao";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (title, status) => {
    ThongBao(title, status);
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
      <button
        className={`btn btn-primary mt-3`}
        onClick={() => handleLogin("Xin chào?", "success")}
      >
        ĐĂNG NHẬP
      </button>
    </React.Fragment>
  );
}

export default Login;
