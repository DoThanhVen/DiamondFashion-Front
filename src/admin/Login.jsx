import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataLogin } from "../service/Actions";

function Login() {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");

  const login = useSelector(state => state.dataLogin);
  const dispatch = useDispatch();

  const data = {
    username: username,
    password: password
  };

  const handleLogin = () => {
    dispatch(getDataLogin(data));
  };

  return (
    <React.Fragment>
      <div>
        SHOW {login.username}
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
