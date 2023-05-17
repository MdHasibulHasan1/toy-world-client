import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Footer from "../Pages/Shared/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Footer></Footer>,
      },
    ],
  },
]);

export default router;
