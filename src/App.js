import React from "react";
import Home from "./components/user/Home";
import Login from "./components/user/Login";
import Cart from "./components/user/Cart";
import Product from "./components/user/Product";
import Detail from "./components/user/Detail"
import Register from "./components/user/Register"
import OrderDetail from "./components/user/OrderDetail"
import Checkout from "./components/user/Checkout"
import Profile from "./components/user/Profile"

// import AdminDashBoard from "./componentadmin/AdminDashBoard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/account" element={<Login />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/products" element={<Product />}/>
      <Route path="/detail" element={<Detail/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/orderDetail" element={<OrderDetail/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/profile" element={<Profile/>}/>
    
    </Routes>
  );
}

export default App;
