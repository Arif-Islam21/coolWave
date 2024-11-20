import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardMain from "../Page/Dashboard/DashboardMain";
import AddProduct from "../Page/Dashboard/AddProduct";

const router = createBrowserRouter([
  // HOME LAYOUT
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  // LOGIN AND REGISTRATION
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // DASHBOARD LAYOUT
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardMain />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
