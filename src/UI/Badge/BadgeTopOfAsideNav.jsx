/* eslint-disable react/prop-types */

/* import "./BadgeTopOfAsideNav.scss";
import BtnNormalX from "../Buttons/BtnNormalX";
import BtnIconCartMenu from "../Buttons/BtnIconCartMenu";
import BtnIconFavoritesMenu from "../Buttons/BtnIconFavoritesMenu";

export default function BadgeTopOfAsideNav({ nameOfNavPage, showCloseButton }) {
  return (
    <div className="top-of-aside-nav">
      <h2 className="h-top-aside-nav">{nameOfNavPage}</h2>
      {/* if nameOfPage === Cart it add a BtnIcon 
      {nameOfNavPage === "Cart" && <BtnIconCartMenu itemCount={10} />}
      {/* if nameOfPage === Favorites it add a BtnIcon 
      {nameOfNavPage === "Favorites" && (
        <BtnIconFavoritesMenu  itemCountFav={'10'} />
      )}

      {showCloseButton && <BtnNormalX />}
    </div>
  );
}
 */

/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "./BadgeTopOfAsideNav.scss";
import BtnNormalX from "../Buttons/BtnNormalX";
import BtnIconCartMenu from "../Buttons/BtnIconCartMenu";
import BtnIconFavoritesMenu from "../Buttons/BtnIconFavoritesMenu";

export default function BadgeTopOfAsideNav({ nameOfNavPage, showCloseButton }) {
  const itemCountFav = useSelector((state) => state.favorites.totalQuantity);
  const itemCountCart = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="top-of-aside-nav">
      <h2 className="h-top-aside-nav">{nameOfNavPage}</h2>
      {/* if nameOfPage === Cart it add a BtnIcon */}
      {nameOfNavPage === "Cart" && (
        <BtnIconCartMenu itemCount={itemCountCart} />
      )}
      {/* if nameOfPage === Favorites it add a BtnIcon */}
      {nameOfNavPage === "Favorites" && (
        <BtnIconFavoritesMenu itemCountFav={itemCountFav} />
      )}

      {showCloseButton && <BtnNormalX />}
    </div>
  );
}
