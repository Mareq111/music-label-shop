/* eslint-disable react/prop-types */
import "./BadgeTopOfAsideNav.scss";
import BtnNormalX from "../Buttons/BtnNormalX";
import BtnIconCartMenu from "../Buttons/BtnIconCartMenu";
import BtnIconFavoritesMenu from "../Buttons/BtnIconFavoritesMenu";

export default function BadgeTopOfAsideNav({ nameOfNavPage }) {
  return (
    <div className="top-of-aside-nav">
      <h2 className="h-top-aside-nav">{nameOfNavPage}</h2>
      {/* if nameOfPage === Cart it add a BtnIcon */}
      {nameOfNavPage === "Cart" && <BtnIconCartMenu itemCount={10} />}
      {/* if nameOfPage === Favorites it add a BtnIcon */}
      {nameOfNavPage === "Favorites" && <BtnIconFavoritesMenu itemCountFav={10} />}

      <BtnNormalX />
    </div>
  );
}
