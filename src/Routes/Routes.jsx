import { createBrowserRouter } from "react-router-dom";
import Login from "../LoginRegister/Login/Login";
import App from "../App";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
           path:'/',
           element:<Home></Home>,
           loader:()=>fetch('http://localhost:8000/spots')
        }
      ]
    },
    {
        path:'login',
        element:<Login></Login>
    }
  ]);

export default router ;