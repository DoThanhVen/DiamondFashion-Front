import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//REDUX
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { dataLogin, isLogin } from "./service/Reducers";

const allReducers = combineReducers({
  dataLogin,
  isLogin
});

const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
