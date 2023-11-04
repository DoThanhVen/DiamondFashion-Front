import React from "react";
import AdminDashBoard from "./admin/AdminDashBoard";
import BusinessDashBoard from "./business/BusinessDashBoard";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashBoard />}/>
      <Route path="/admin/accounts" element={<AdminDashBoard />}/>
      <Route path="/admin/shops" element={<AdminDashBoard />}/>
      <Route path="/admin/shop/shopdetail" element={<AdminDashBoard />}/>
      <Route path="/admin/categories" element={<AdminDashBoard />}/>
      <Route path="/admin/products" element={<AdminDashBoard />}/>
      <Route path="/admin/bills" element={<AdminDashBoard />}/>
      <Route path="/admin/bills/billdetail" element={<AdminDashBoard />}/>
      <Route path="/admin/statistical" element={<AdminDashBoard />}/>

      <Route path="/business" element={<BusinessDashBoard />}/>
      <Route path="/business/bill" element={<BusinessDashBoard />}/>
      <Route path="/business/product" element={<BusinessDashBoard />}/>
      <Route path="/business/storge" element={<BusinessDashBoard />}/>
      <Route path="/business/shop" element={<BusinessDashBoard />}/>
    </Routes>
  );
}

export default App;
