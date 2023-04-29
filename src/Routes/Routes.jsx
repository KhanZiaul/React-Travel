import { createBrowserRouter } from "react-router-dom";
import Navigation from "../pages/Navigation/Navigation";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);

export default router ;