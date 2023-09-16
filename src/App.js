import React from "react";
import Home from "./user/Home";
import Account from "./user/SignIn";
import Cart from "./user/Cart";
import Product from "./user/Product";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/account" element={<Account />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/products" element={<Product />}/>
    </Routes>
  );
}

export default App;
