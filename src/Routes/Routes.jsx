import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import AddToyForm from "../Pages/AddToyForm";
import AllToys from "../Pages/AllToys/AllToys";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import SignUpPage from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign_up",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/add_a_toys",
        element: <AddToyForm></AddToyForm>,
      },
      {
        path: "/all_toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/my_toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
    ],
  },
]);

export default router;
