import { createBrowserRouter } from "react-router-dom";
import Login from "../LoginRegister/Login/Login";
import App from "../App";
import Home from "../pages/Home/Home";
import SpotDetails from "../pages/SpotDetails/SpotDetails";
import Booking from "../pages/Booking/Booking";
import SharedLayout from "../Layouts/SharedLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:8000/spots')
      },
      {
        path: ':id',
        element: <SpotDetails></SpotDetails>,
        loader: ({ params }) => fetch(`http://localhost:8000/spots/${params.id}`)
      }
    ]
  },
  {
    path: 'layout',
    element: <SharedLayout></SharedLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'booking',
        element: <Booking></Booking>
      }
    ]
  }
]);

export default router;