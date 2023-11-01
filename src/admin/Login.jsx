import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataLogin } from "../service/Actions";
import axios from "axios";
import { callAPI } from "../service/API";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async e => {
    console.log("US: " + username + " PW: " + password);
    const url = `/api/account/login?username=${username}&password=${password}`
    const response = await callAPI(url, "GET");
    console.log(response);
  };

  const login = useSelector(state => state.dataLogin);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className={`card mb-3`}>
        <label>THÔNG TIN ĐĂNG NHẬP:</label>
        <br />
      </div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => handleLogin()}
      >
        Đăng nhập
      </button>
    </React.Fragment>
  );
}

export default Login;
