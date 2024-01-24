import React from "react";
import "./TopNav.scss";
import logo from "../../assets/img/logo.png";
import IconMenu from "../../UI/Icons/IconMenu";
import IconUser from "../../UI/Icons/IconUser";
import IconHeart from "../../UI/Icons/IconHeart";
import IconShopBag from "../../UI/Icons/IconShopBag";
import IconSearch from "../../UI/Icons/IconSearch";
import InputSearch from "../../UI/Inputs/InputSearch";

export default function TopNav() {
  return (
    <nav className="all-top-nav">
      <div className="up-nav">
        {/* left -logo */}

        <div className="div-logo">
          <img id="logo" src={logo} alt="Logo Strimz Shop" />
        </div>
        {/* search bar hidden for mobiles */}
        <div className="up-nav-search">
          <InputSearch />
        </div>
        {/* right icon */}
        <div className="div-right-side-menu">
          <a className="icon-link-to
          " href="#">
            <div className="div-icon-into-menu" id="icon-user-text-div">
              <IconUser id="mobile-icon-user" />
              <IconUser id="desktop-icon-user" />
              <p className="p-icon-user-text">Hi! Log in</p>
            </div>
          </a>
          <a className="icon-link-to
          " href="#">
            <div className="div-icon-into-menu">
              <IconHeart />
            </div>
          </a>
          <a className="icon-link-to
          " href="#">
            <div className="div-icon-into-menu">
              <IconShopBag />
            </div>
          </a>
          <a className="icon-link-to
          " href="#">
            <div id="menu-mobile" className="div-icon-into-menu">
              <IconMenu />
            </div>
          </a>
        </div>
      </div>
      {/* search bar / down nav*/}
      <div className="down-nav-search">
        <InputSearch />
      </div>
    </nav>
  );
}
