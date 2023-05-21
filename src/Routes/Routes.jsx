import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import AddToyForm from "../Pages/AddToyForm";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetail from "../Pages/AllToys/ToyDetail";
import BlogPage from "../Pages/BlogPage/BlogPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import SignUpPage from "../Pages/SignUp/SignUp";
import SubCategories from "../Pages/SubCategories";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <AddToyForm></AddToyForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/all_toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/my_toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },

      {
        path: "/subCategories/:id",
        element: (
          <PrivateRoute>
            <SubCategories></SubCategories>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-hasib7143-gmailcom.vercel.app/sub-categories`
          ),
      },
      {
        path: "/toy/:Id",
        element: (
          <PrivateRoute>
            <ToyDetail></ToyDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-marketplace-server-xi.vercel.app/toys`),
      },
    ],
  },
]);

export default router;
