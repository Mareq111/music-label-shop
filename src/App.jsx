import "./App.scss";
import HomePage from "./pages/HomePage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Favorites from "./pages/Favorites.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Cart from "./pages/Cart.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import MenuHamburger from "./pages/MenuHamburger.jsx";
import ProductsAlbums from "./pages/ProductsAlbums.jsx";
import ProductsTickets from "./pages/ProductsTickets.jsx";
import ProductsTshirts from "./pages/ProductsTshirts.jsx";
import ProductsGadgets from "./pages/ProductsGadgets.jsx";
import ProductsPosters from "./pages/ProductsPosters.jsx";
import ProductsPuzzles from "./pages/ProductsPuzzles.jsx";
import Checkout from "./pages/Checkout.jsx";





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
        path: "albums",
        element: <ProductsAlbums />,
      },
      {
        path: "tickets",
        element: <ProductsTickets />,
      },
      {
        path: "t-shirts",
        element: <ProductsTshirts />,
      },
      {
        path: "gadgets",
        element: <ProductsGadgets />,
      },
      {
        path: "posters",
        element: <ProductsPosters />,
      },
      {
        path: "puzzles",
        element: <ProductsPuzzles />,
      },
      // Dynamic path do showing any products page with their details
      { path: "products/:productId", element: <ProductDetails /> },
      // Other sections of the page
      { path: "favorites", element: <Favorites /> },
      { path: "user-profile", element: <UserProfile /> },
      { path: "cart", element: <Cart /> },
      { path: "search", element: <SearchResult /> },
      { path: "menu", element: <MenuHamburger /> },
      { path: "checkout", element: <Checkout/> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
