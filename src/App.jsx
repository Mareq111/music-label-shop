import React from "react";
import "./App.scss";
import HomePage from "./pages/HomePage.jsx";
import Products from "./pages/Products.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        /* path: "", */
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      /* Dynamic path do show any products page with their details */
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
