import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardMain from "../Page/Dashboard/DashboardMain";
import AddProduct from "../Page/Dashboard/AddProduct";
import ViewProduct from "../Page/Dashboard/viewProduct";
import UpdateProduct from "../Page/Dashboard/UpdateProduct";
import PrivateRoute from "../Private/PrivateRoute";
import SellerRoute from "../Private/SellerRoute";
import AdminRoute from "../Private/AdminRoute";
import ManageUsers from "../Page/Dashboard/ManageUsers";

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
        element: (
          <PrivateRoute>
            <DashboardMain />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/view-product",
        element: (
          <SellerRoute>
            <ViewProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/update-product/:id",
        element: (
          <SellerRoute>
            <UpdateProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
