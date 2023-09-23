import React from "react";
import Home from "./user/Home";
import Login from "./user/Login";
import Cart from "./user/Cart";
import Product from "./user/Product";

import AdminDashBoard from "./admin/AdminDashBoard";

import TikiHome from "./tiki/TikiForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/account" element={<Login />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/products" element={<Product />}/>

      <Route path="/admin" element={<AdminDashBoard />}/>
      <Route path="/admin/accounts" element={<AdminDashBoard />}/>
      <Route path="/admin/shops" element={<AdminDashBoard />}/>
      <Route path="/admin/categories" element={<AdminDashBoard />}/>
      <Route path="/admin/products" element={<AdminDashBoard />}/>
      <Route path="/admin/storge" element={<AdminDashBoard />}/>

      <Route path="/tiki" element={<TikiHome />}/>
      <Route path="/tiki/account" element={<TikiHome />}/>
      <Route path="/tiki/cart" element={<TikiHome />}/>
    </Routes>
  );
}

export default App;
