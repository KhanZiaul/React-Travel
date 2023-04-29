import { createBrowserRouter } from "react-router-dom";
import Navigation from "../pages/Navigation/Navigation";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
           
        }
      ]
    },
    {
        path:'login',
        element:<Login></Login>
    }
  ]);

export default router ;