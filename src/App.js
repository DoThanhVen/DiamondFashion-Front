import React from "react";
import AdminDashBoard from "./admin/AdminDashBoard";
import BusinessDashBoard from "./business/BusinessDashBoard";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminDashBoard />}/>
      <Route path="/business/*" element={<BusinessDashBoard />}/>
    </Routes>
  );
}

export default App;
