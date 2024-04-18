import "./App.scss";
import HomePage from "./pages/HomePage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
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
/* firebase */
import { useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "./firebaseConfig.js";
//subpages for albums
import ProductsAlbumsElDM from "./pages/subpages/product-albums/ProductsAlbumsElDM.jsx";
import ProductsAlbumsJackieRas from "./pages/subpages/product-albums/ProductsAlbumsJackieRas.jsx";
import ProductsAlbumsMollyGranoli from "./pages/subpages/product-albums/ProductsAlbumsMollyGranoli.jsx";
import ProductsAlbumsElKaptn from "./pages/subpages/product-albums/ProductsAlbumsElKaptn.jsx";
//redux
/* import { Provider } from "react-redux";
import store from "./store/index.js"; */

function App() {
  //firebase
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  // retrieve redux state from ui and check if cartIsVisible is set to true
  const showCart = useSelector((state) => state.ui.cartIsVisible);

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
          path: "albums/all-strimz-empire",
          element: <ProductsAlbums />, 
    

        },
        //!subpages for albums
        {
          path: "albums/el-dm",
          element: <ProductsAlbumsElDM />,
        },
        {
          path: "albums/jackie-ras",
          element: <ProductsAlbumsJackieRas />,
        },
        {
          path: "albums/molly-granoli",
          element: <ProductsAlbumsMollyGranoli />,
        },
        {
          path: "albums/el-kaptn",
          element: <ProductsAlbumsElKaptn />,
        },
        //! end of album subpages
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
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);

  return (
   <RouterProvider router={router}>{showCart && <Cart />}</RouterProvider>
  );
}

export default App;
