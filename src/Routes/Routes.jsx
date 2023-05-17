import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import AddToyForm from "../Pages/AddToyForm";
import SignUpPage from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/add_a_toys",
        element: <AddToyForm></AddToyForm>,
      },
    ],
  },
]);

export default router;
