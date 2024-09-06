import "./App.scss";

import HomePage from "./pages/HomePage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
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
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import firebaseConfig from "./firebaseConfig.js";
//subpages for albums
import ProductsAlbumsElDM from "./pages/subpages/product-albums/ProductsAlbumsElDM.jsx";
import ProductsAlbumsJackieRas from "./pages/subpages/product-albums/ProductsAlbumsJackieRas.jsx";
import ProductsAlbumsMollyGranoli from "./pages/subpages/product-albums/ProductsAlbumsMollyGranoli.jsx";
import ProductsAlbumsElKaptn from "./pages/subpages/product-albums/ProductsAlbumsElKaptn.jsx";
//subpages for tickets
import ProductsTicketsPoland from "./pages/subpages/product-tickets/ProductsTicketsPoland.jsx";
import ProductsTicketsCzechia from "./pages/subpages/product-tickets/ProductsTicketsCzechia.jsx";
import ProductsTicketsAustria from "./pages/subpages/product-tickets/ProductsTicketsAustria.jsx";
import ProductsTicketsGermany from "./pages/subpages/product-tickets/ProductsTicketsGermany.jsx";
import ProductsTicketsNetherlands from "./pages/subpages/product-tickets/ProductsTicketsNetherlands.jsx";
import ProductsTicketsBelgium from "./pages/subpages/product-tickets/ProductsTicketsBelgium.jsx";
import ProductsTicketsFrance from "./pages/subpages/product-tickets/ProductsTicketsFrance.jsx";
import ProductsTicketsSpain from "./pages/subpages/product-tickets/ProductsTicketsSpain.jsx";
import ProductsTicketsItaly from "./pages/subpages/product-tickets/ProductsTicketsItaly.jsx";
import ProductsTicketsCroatia from "./pages/subpages/product-tickets/ProductsTicketsCroatia.jsx";
import ProductsTicketsHungary from "./pages/subpages/product-tickets/ProductsTicketsHungary.jsx";
import ProductsTicketsSlovakia from "./pages/subpages/product-tickets/ProductsTicketsSlovakia.jsx";
//subpages for posters
import ProductsPostersElDM from "./pages/subpages/product-posters/ProductsPostersElDM.jsx";
import ProductsPostersJackieRas from "./pages/subpages/product-posters/ProductsPostersJackieRas.jsx";
import ProductsPostersMollyGranoli from "./pages/subpages/product-posters/ProductsPostersMollyGranoli.jsx";
import ProductsPostersElKaptn from "./pages/subpages/product-posters/ProductsPostersElKaptn.jsx";
// subpages for tshirts
import ProductsTshirtsBeige from "./pages/subpages/product-tshirts/ProductsTshirtsBeige.jsx";
import ProductsTshirtsWhite from "./pages/subpages/product-tshirts/ProductsTshirtsWhite.jsx";
import ProductsTshirtsBlack from "./pages/subpages/product-tshirts/ProductsTshirtsBlack.jsx";
import ProductsTshirtsBlue from "./pages/subpages/product-tshirts/ProductsTshirtsBlue.jsx";
import ProductsTshirtsGreen from "./pages/subpages/product-tshirts/ProductsTshirtsGreen.jsx";
import ProductsTshirtsColorful from "./pages/subpages/product-tshirts/ProductsTshirtsColorful.jsx";
//subpages for gadgets
import ProductsGadgetsMugs from "./pages/subpages/product-gadgets/ProductsGadgetsMugs.jsx";
import ProductsGadgetsBags from "./pages/subpages/product-gadgets/ProductsGadgetsBags.jsx";
import ProductsGadgetsBackpacks from "./pages/subpages/product-gadgets/ProductsGadgetsBackpacks.jsx";
import ProductsGadgetsStickers from "./pages/subpages/product-gadgets/ProductsGadgetsStickers.jsx";
//subpages for puzzles
import ProductsPuzzlesEasy from "./pages/subpages/products-puzzles/ProductsPuzzlesEasy.jsx";
import ProductsPuzzlesMedium from "./pages/subpages/products-puzzles/ProductsPuzzlesMedium.jsx";
import ProductsPuzzlesHard from "./pages/subpages/products-puzzles/ProductsPuzzlesHard.jsx";
import Payment from "./pages/Payment.jsx";
import PaymentAfterGreetings from "./pages/PaymentAfterGreetings.jsx";
import Information from "./pages/Information.jsx";
import Author from "./pages/Author.jsx";
/* import TopNav from "./components/TopNav.jsx"; */
import InputSearch from "./UI/Inputs/InputSearch.jsx";
import UserLogIn from "./pages/UserLogIn.jsx";
import UserRegister from "./pages/UserRegister.jsx";
import UserForgotPassword from "./pages/UserForgotPassword.jsx";

import WelcomePopup from "./pages/WelcomePopup.jsx";
import UserProfileAfter from "./pages/UserProfileAfter.jsx";
import LogOutPopup from "./pages/LogOutPopup.jsx";
//search bar

function App() {
  //firebase
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  // retrieve redux state from ui and check if cartIsVisible is set to true
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  //search input bar
  const [searchResults, setSearchResults] = useState([]);

  //!BEFORE I USE BROWSERROUTER but now hash router
  //configure, routing and main layout,initially page index: true is HomePage,
  const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      // children for main path, various pages
      children: [
        {
          index: "/",
          element: <HomePage />,
        },
        //search pages
        {
          path: "search",
          element: <SearchResult searchResults={searchResults} />,
        },
        {
          path: "search/q",
          element: <SearchResult searchResults={searchResults} />,
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
        // end of album subpages
        {
          path: "tickets/all-locations",
          element: <ProductsTickets />,
        },
        //!subpages for tickets
        {
          path: "tickets/poland",
          element: <ProductsTicketsPoland />,
        },
        {
          path: "tickets/czechia",
          element: <ProductsTicketsCzechia />,
        },
        {
          path: "tickets/austria",
          element: <ProductsTicketsAustria />,
        },
        {
          path: "tickets/germany",
          element: <ProductsTicketsGermany />,
        },
        {
          path: "tickets/netherlands",
          element: <ProductsTicketsNetherlands />,
        },
        {
          path: "tickets/belgium",
          element: <ProductsTicketsBelgium />,
        },
        {
          path: "tickets/france",
          element: <ProductsTicketsFrance />,
        },
        {
          path: "tickets/spain",
          element: <ProductsTicketsSpain />,
        },
        {
          path: "tickets/italy",
          element: <ProductsTicketsItaly />,
        },
        {
          path: "tickets/croatia",
          element: <ProductsTicketsCroatia />,
        },
        {
          path: "tickets/hungary",
          element: <ProductsTicketsHungary />,
        },
        {
          path: "tickets/slovakia",
          element: <ProductsTicketsSlovakia />,
        },
        // end of tickets subpages

        //!subpages for tshirts
        {
          path: "t-shirts/all-colors",
          element: <ProductsTshirts />,
        },
        {
          path: "t-shirts/beige",
          element: <ProductsTshirtsBeige />,
        },
        {
          path: "t-shirts/black",
          element: <ProductsTshirtsBlack />,
        },
        {
          path: "t-shirts/blue",
          element: <ProductsTshirtsBlue />,
        },
        {
          path: "t-shirts/green",
          element: <ProductsTshirtsGreen />,
        },
        {
          path: "t-shirts/white",
          element: <ProductsTshirtsWhite />,
        },
        {
          path: "t-shirts/colorful",
          element: <ProductsTshirtsColorful />,
        },
        //!subpages for gadgets
        {
          path: "gadgets/all-items",
          element: <ProductsGadgets />,
        },
        {
          path: "gadgets/mugs",
          element: <ProductsGadgetsMugs />,
        },
        {
          path: "gadgets/bags",
          element: <ProductsGadgetsBags />,
        },
        {
          path: "gadgets/stickers",
          element: <ProductsGadgetsStickers />,
        },
        {
          path: "gadgets/backpacks",
          element: <ProductsGadgetsBackpacks />,
        },

        // end of tickets subpages

        //!subpages for tickets
        {
          path: "posters/all-strimz-empire",
          element: <ProductsPosters />,
        },
        {
          path: "posters/el-dm",
          element: <ProductsPostersElDM />,
        },
        {
          path: "posters/jackie-ras",
          element: <ProductsPostersJackieRas />,
        },
        {
          path: "posters/molly-granoli",
          element: <ProductsPostersMollyGranoli />,
        },
        {
          path: "posters/el-kaptn",
          element: <ProductsPostersElKaptn />,
        },
        // end of tickets subpages

        //!subpages for puzzles
        {
          path: "puzzles/all-levels",
          element: <ProductsPuzzles />,
        },
        {
          path: "puzzles/easy",
          element: <ProductsPuzzlesEasy />,
        },
        {
          path: "puzzles/medium",
          element: <ProductsPuzzlesMedium />,
        },
        {
          path: "puzzles/hard",
          element: <ProductsPuzzlesHard />,
        },
        // Dynamic path do showing any products page with their details
        { path: "/:productId", element: <ProductDetails /> },
        /*  { path: "/:productId", element: <ProductDetails /> }, */
        // Other sections of the page
        { path: "favorites", element: <Favorites /> },
        { path: "user-profile", element: <UserProfile /> },
        { path: "user-profile-after", element: <UserProfileAfter /> },
        { path: "cart", element: <Cart /> },
        { path: "search", element: <SearchResult /> },
        { path: "menu", element: <MenuHamburger /> },
        { path: "checkout", element: <Checkout /> },
        { path: "payment", element: <Payment /> },
        { path: "payment-greetings", element: <PaymentAfterGreetings /> },
        // Other subpages into menu
        { path: "information", element: <Information /> },
        { path: "author", element: <Author /> },
        //login and register and forgotpassword pages for user profile
        { path: "login", element: <UserLogIn /> },
        { path: "register", element: <UserRegister /> },
        { path: "forgot-password", element: <UserForgotPassword /> },
        //welcome page or log out
        { path: "welcome-page", element: <WelcomePopup /> },
        { path: "logout", element: <LogOutPopup /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      {/*  <TopNav setSearchResults={setSearchResults} /> */}
      <InputSearch setSearchResults={setSearchResults} />
      <SearchResult searchResults={searchResults} />
      {showCart && <Cart />}
    </RouterProvider>
  );
}

export default App;
