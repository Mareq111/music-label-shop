import "./TopNav.scss";
import IconMenu from "./../UI/Icons/IconMenu";
import IconUser from "./../UI/Icons/IconUser";

import InputSearch from "./../UI/Inputs/InputSearch";
import { Link } from "react-router-dom";
import LogoStrimz from "../UI/Icons/Icon-Logo/LogoStrimz";
import BadgeCategoriesTop from "../UI/Badge/BadgeCategoriesTop";
import BtnIconCartMenu from "../UI/Buttons/BtnIconCartMenu";
import BtnIconFavoritesMenu from "../UI/Buttons/BtnIconFavoritesMenu";
import { useSelector } from "react-redux";

export default function TopNav() {
  const itemCountFav = useSelector((state) => state.favorites.totalQuantity);

  return (
    <header>
      <nav className="all-top-nav">
        <div className="up-nav">
          {/* left -logo */}
          <Link to="/" aria-label="Homepage / Logo" tabIndex={0}>
            <div className="div-logo">
              <LogoStrimz />
            </div>
          </Link>
          {/* search bar hidden for mobiles */}
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
          {/* right icon */}
          <div className="div-right-side-menu">
            <div className="icon-link-to">
              <Link to="user-profile" aria-label="User Profile" tabIndex={0}>
                <div className="div-icon-into-menu" id="icon-user-text-div">
                  <IconUser id="mobile-icon-user" />
                  <IconUser id="desktop-icon-user" />
                  <p className="p-icon-user-text">Hi! Log in</p>
                </div>
              </Link>
            </div>
            <div className="icon-link-to">
              <Link to="favorites" aria-label="Favorites" tabIndex={0}>
                <div className="div-icon-into-menu">
                  {/* <IconHeart /> */}
                  <BtnIconFavoritesMenu itemCountFav={itemCountFav} />
                </div>
              </Link>
            </div>
            <div className="icon-link-to">
              <Link to="cart" aria-label="Cart" tabIndex={0}>
                <BtnIconCartMenu itemCount={""} />
              </Link>
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
        {/* search bar / down nav for mobiles*/}
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
    </header>
  );
}
