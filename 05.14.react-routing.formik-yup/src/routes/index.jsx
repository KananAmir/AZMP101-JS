import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/Admin";
import ClientLayout from "../pages/Client";
import Home from "../pages/Client/Home";
import About from "../pages/Client/About";
import Products from "../pages/Client/Products/inde";
import Contact from "../pages/Client/Contact";
import Dashboard from "../pages/Admin/Dashboard";
import AdminProducts from "../pages/Admin/Products";
import AdminLogin from "../pages/Admin/Login";
import ProductDetails from "../pages/Client/ProductDetails";
import AddProduct from "../pages/Admin/AddProduct";

export const router = createBrowserRouter([
  //admin layout
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "products/add",
        element: <AddProduct />,
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
    ],
  },
  //client layout
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
        // children: [
        //   {
        //     path: "new",
        //     element: <ProductDetails />,
        //   },
        // ],
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
