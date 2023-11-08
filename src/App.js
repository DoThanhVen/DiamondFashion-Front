import React from "react";
import AdminDashBoard from "./admin/AdminDashBoard";
import BusinessDashBoard from "./business/BusinessDashBoard";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const isLogin = localStorage.getItem("isLogin");

  return (
    <Routes>
      <Route path="/admin/*" element={<AdminDashBoard />}/>
      <Route path="/business/*" element={<BusinessDashBoard />}/>
    </Routes>
  );
}

export default App;
