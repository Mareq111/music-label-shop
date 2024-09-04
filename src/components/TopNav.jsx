/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import "./TopNav.scss";
import IconMenu from "./../UI/Icons/IconMenu";
import InputSearch from "./../UI/Inputs/InputSearch";
import { Link } from "react-router-dom";
import LogoStrimz from "../UI/Icons/Icon-Logo/LogoStrimz";
import BadgeCategoriesTop from "../UI/Badge/BadgeCategoriesTop";
import BtnIconCartMenu from "../UI/Buttons/BtnIconCartMenu";
import BtnIconFavoritesMenu from "../UI/Buttons/BtnIconFavoritesMenu";
import { useSelector, useDispatch } from "react-redux";
import { toggleUserProfileModal } from "../store/userProfileSlice";
import UserPage from "../pages/UserProfile";
import Cart from "../pages/Cart";
import BtnIconUser from "../UI/Buttons/BtnIconUser";

import { toggleFavorites, closeFavorites } from "../store/favoritesSlice.js";
import Favorites from "../pages/Favorites";

export default function TopNav() {
  const itemCountFav = useSelector((state) => state.favorites.totalQuantity);
  const isUserProfileOpen = useSelector(
    (state) => state.userProfile.isUserProfileOpen
  );
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const isFavoritesOpen = useSelector(
    (state) => state.favorites.isFavoritesOpen
  ); // Add this line
  const dispatch = useDispatch();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setNavVisible(scrollPosition > currentScrollPos || currentScrollPos < 10);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleUserProfileClick = () => {
    dispatch(toggleUserProfileModal());
  };

  const handleFavoritesClick = () => {
    dispatch(toggleFavorites());
  };

  return (
    <>
      <nav className={`all-top-nav ${navVisible ? "visible" : "hidden"}`}>
        <div className="up-nav">
          <Link to="/" aria-label="Homepage / Logo" tabIndex={0}>
            <div className="div-logo">
              <LogoStrimz />
            </div>
          </Link>
          <Link
            className="link-search"
            to="search"
            aria-label="Search"
            tabIndex={0}
          >
            <div className="up-nav-search">
              <InputSearch />
            </div>
          </Link>
          <div className="div-right-side-menu">
            <div className="icon-link-to">
              <BtnIconUser handleUserProfileClick={handleUserProfileClick} />
            </div>
            <div className="icon-link-to">
              <div
                className="div-icon-into-menu"
                onClick={handleFavoritesClick} // Toggle favorites when clicked
              >
                <BtnIconFavoritesMenu itemCountFav={itemCountFav} />
              </div>
            </div>
            <div className="icon-link-to">
              <div className="icon-link-to">
                <BtnIconCartMenu itemCount={""} tabIndex={0} />
              </div>
            </div>
            <div className="icon-link-to">
              <Link to="menu" aria-label="Menu" tabIndex={0}>
                <div id="menu-mobile" className="div-icon-into-menu">
                  <IconMenu />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Link
          className="link-search"
          to="search"
          aria-label="Search"
          tabIndex={0}
        >
          <div className="down-nav-search">
            <InputSearch />
          </div>
        </Link>
        <div className="badge-categories-div-top-nav">
          <BadgeCategoriesTop />
        </div>
      </nav>
      <div className="content-margin">
        {/*   page content starts here because it's only margin   */}
      </div>
      {isUserProfileOpen && <UserPage onClose={handleUserProfileClick} />}
      {isCartOpen && <Cart />}
      {isFavoritesOpen && <Favorites />} {/* Render the Favorites component */}
    </>
  );
}
