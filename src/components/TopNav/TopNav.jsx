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
    <div className="all-top-nav">
      <div className="up-nav">
        {/* left -logo */}

        <div className="div-logo">
          <img id="logo" src={logo} alt="logo" />
        </div>
        {/* right icon */}
        <div className="div-right-side-menu-mobile">
          <div className="div-icon-into-menu">
            <IconUser />
          </div>
          <div className="div-icon-into-menu">
            <IconHeart />
          </div>
          <div className="div-icon-into-menu">
            <IconShopBag />
          </div>
          <div className="div-icon-into-menu">
            <IconMenu />
          </div>
        </div>
      </div>
      {/* search bar / down nav*/}
      <div className="down-nav">
        <InputSearch />
      </div>
    </div>
  );
}
