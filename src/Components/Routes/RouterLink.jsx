import React from "react";
import { Routes, Route } from "react-router";
import Login from "../Login/Login";
import Register from "../Register/Register";

const RouterLink = () => {
  return (
    <div>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default RouterLink;
