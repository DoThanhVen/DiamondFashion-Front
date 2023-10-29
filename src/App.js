import React from "react";
import Home from "./pages/user/Home";
import Login from "./pages/account/Login";
import Cart from "./pages/user/Cart";
import Product from "./pages/user/Product";
import Detail from "./pages/user/Detail"
import NewProducts from "./pages/user/NewProducts";

import OrderDetail from "./pages/user/OrderDetail"
import Checkout from "./pages/user/Checkout"
import Profile from "./pages/account/Profile"
import Order from "./pages/user/Order"

import SuggestedProducts from "./pages/user/SuggestedProducts";
import RecommendedProducts from "./pages/user/RecommendedProducts";


import Otp from "./pages/account/Otp";
import Register from "./pages/account/Register";
import SalesRegistration from "./pages/account/SalesRegistration";

import ContactInfo from "./pages/user/ContactInfo";
import Policy from "./pages/user/Policy";
import LikeProduct from "./pages/user/LikeProduct";

// import AdminDashBoard from "./componentadmin/AdminDashBoard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/category/:id" element={<Product />} exact />
      <Route path="/detail" element={<Detail/>}/>
      <Route path="/newProducts" element={<NewProducts/>}/>
      <Route path="/orderDetail" element={<OrderDetail/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/order" element={<Order/>}/>


       <Route path="/suggestedProducts" element={<SuggestedProducts/>}/>
       <Route path="/recommendedProducts" element={<RecommendedProducts />}/>
      
      <Route path="/otp" element={<Otp/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/salesRegistration" element={<SalesRegistration/>} />
      <Route path="/contact" element={<ContactInfo/>} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="/likeProduct" element={<LikeProduct/>} />

    </Routes>
  );
}

export default App;
