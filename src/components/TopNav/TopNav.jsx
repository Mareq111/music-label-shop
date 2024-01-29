import React from "react";
import "./TopNav.scss";
import logo from "../../assets/img/logo.png";
import IconMenu from "../../UI/Icons/IconMenu";
import IconUser from "../../UI/Icons/IconUser";
import IconHeart from "../../UI/Icons/IconHeart";
import IconShopBag from "../../UI/Icons/IconShopBag";
import IconSearch from "../../UI/Icons/IconSearch";
import InputSearch from "../../UI/Inputs/InputSearch";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <header>
      <nav className="all-top-nav">
        <div className="up-nav">
          {/* left -logo */}
          <Link to="/home">
            <div className="div-logo">
              <img id="logo" src={logo} alt="Logo Strimz Shop" />
            </div>
          </Link>
          {/* search bar hidden for mobiles */}
          <div className="up-nav-search">
            <InputSearch />
          </div>
          {/* right icon */}
          <div className="div-right-side-menu">
            <Link
              to="/user-profile"
              className="icon-link-to
          "
            >
              <div className="div-icon-into-menu" id="icon-user-text-div">
                <IconUser id="mobile-icon-user" />
                <IconUser id="desktop-icon-user" />
                <p className="p-icon-user-text">Hi! Log in</p>
              </div>
            </Link>
            <Link
              to="/favorites"
              className="icon-link-to
          "
            >
              <div className="div-icon-into-menu">
                <IconHeart />
              </div>
            </Link>
            <Link
              to="/shopping-bag"
              className="icon-link-to
          "
            >
              <div className="div-icon-into-menu">
                <IconShopBag />
              </div>
            </Link>
            <Link
              to="/menu"
              className="icon-link-to
          "
            >
              <div id="menu-mobile" className="div-icon-into-menu">
                <IconMenu />
              </div>
            </Link>
          </div>
        </div>
        {/* search bar / down nav*/}
        <Link className="Link-search" to="/search">
          <div className="down-nav-search">
            <InputSearch />
          </div>
        </Link>
      </nav>
    </header>
  );
}
