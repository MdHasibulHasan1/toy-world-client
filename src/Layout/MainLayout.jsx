import React from "react";
import NavBar from "../Pages/Shared/NavBar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;