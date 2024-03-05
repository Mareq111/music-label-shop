
import "./App.scss";
import HomePage from "./pages/HomePage.jsx";
import Products from "./pages/Products.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Favorites from "./pages/Favorites.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import ShoppingBag from "./pages/ShoppingBag.jsx";

//configure, routing and main layout,initially page index: true is HomePage,
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // children for main path, various pages
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      // Dynamic path do showing any products page with their details
      { path: "products/:productId", element: <ProductDetails /> },
      // Other sections of the page
      { path: "favorites", element: <Favorites /> },
      { path: "user-profile", element: <UserProfile /> },
      { path: "shopping-bag", element: <ShoppingBag /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
