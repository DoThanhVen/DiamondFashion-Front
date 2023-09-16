import React from "react";
import Home from "./user/Home";
import Login from "./user/Login";
import Cart from "./user/Cart";
import Product from "./user/Product";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/account" element={<Login />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/products" element={<Product />}/>
    </Routes>
  );
}

export default App;
