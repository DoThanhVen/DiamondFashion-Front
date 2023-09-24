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
      <Route path="/admin/categories" element={<AdminDashBoard />}/>
      <Route path="/admin/products" element={<AdminDashBoard />}/>
      <Route path="/admin/storge" element={<AdminDashBoard />}/>

      <Route path="/business" element={<BusinessDashBoard />}/>
    </Routes>
  );
}

export default App;
