import React from "react";
import NavBar from "../Pages/Shared/NavBar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        {navigation.state === "loading" && (
          <div className="mx-auto pt-20 flex justify-center">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          </div>
        )}
      </div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
