import React, { useState } from "react";
import { callAPI } from "./service/API";
import Cookies from "js-cookie";

function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await callAPI(`/api/account/login`, "POST", {
        username,
        password
      });
      if (response) {
        const data = {
          id_account: response.data.id,
          username: response.data.username,
          password: response.data.password,
          role: response.data.listRole.map(value => value.role.role_name)
        };

        if (response.data.infoAccount && response.data.infoAccount.fullname) {
          data.fullname = response.data.infoAccount.fullname;
        }

        if (response.data.infoAccount && response.data.infoAccount.image) {
          data.image = response.data.infoAccount.image;
        }

        if (response.data.infoAccount && response.data.infoAccount.id_card) {
          data.id_card = response.data.infoAccount.id_card;
        }

        if (response.data.infoAccount && response.data.infoAccount.phone) {
          data.phone = response.data.infoAccount.phone;
        }

        if (response.data.infoAccount && response.data.infoAccount.email) {
          data.email = response.data.infoAccount.email;
        }

        if (response.data.shop) {
          data.shop = response.data.shop;
        }

        if (response.data.address_account) {
          response.data.address_account.filter(value => {
            if (value.status === true) {
              return (data.address = value);
            }
          });
        }

        if (response.data.infoAccount && response.data.infoAccount.gender) {
          if (response.data.infoAccount.gender === 0) {
            data.gender = "Nam";
          } else if (response.data.infoAccount.gender === 1) {
            data.gender = "Nữ";
          } else {
            data.gender = "Khác";
          }
        }

        //ENCODE
        const base64String = utf8_to_b64(JSON.stringify(data));
        //DECODE
        const decodedString = decodeURIComponent(
          escape(window.atob(base64String))
        );

        const timeCookie = new Date();
        timeCookie.setTime(timeCookie.getTime() + 60 * 1000);
        Cookies.set("accountLogin", base64String, { expires: timeCookie });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <div className={`mb-3`}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <button className={`btn btn-primary`} onClick={() => handleLogin()}>
          ĐĂNG NHẬP
        </button>
      </div>
    </React.Fragment>
  );
}

export default Login;
