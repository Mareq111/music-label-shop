/* 
import { useSelector } from "react-redux";
import "./BadgeTopOfAsideNav.scss";
import BtnNormalX from "../Buttons/BtnNormalX";
import BtnIconCartMenu from "../Buttons/BtnIconCartMenu";
import BtnIconFavoritesMenu from "../Buttons/BtnIconFavoritesMenu";

export default function BadgeTopOfAsideNav({
  nameOfNavPage,
  showCloseButton,
  onClose,
}) {
  const itemCountFav = useSelector((state) => state.favorites.totalQuantity);
  const itemCountCart = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="top-of-aside-nav">
      <div className="page-name-and-dynamic-icon">
        <h2 className="h-top-aside-nav">{nameOfNavPage}</h2>
        {/* if nameOfPage === Cart it add a BtnIcon 
        {nameOfNavPage === "Cart" && (
          <span className="btn-not-clickable">
            <BtnIconCartMenu itemCount={itemCountCart} />
          </span>
        )}
        {/* if nameOfPage === Favorites it add a BtnIcon 
        {nameOfNavPage === "Favorites" && (
          <span className="btn-not-clickable">
            <BtnIconFavoritesMenu itemCountFav={itemCountFav} />
          </span>
        )}
      </div>
      {showCloseButton && <BtnNormalX onClick={onClose} />}
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
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function BadgeTopOfAsideNav({
  nameOfNavPage,
  showCloseButton,
  onClose,
  linkTo,
}) {
  const itemCountFav = useSelector((state) => state.favorites.totalQuantity);
  const itemCountCart = useSelector((state) => state.cart.totalQuantity);

  const handleCloseClick = () => {
    if (onClose) {
      onClose(); // Execute the onClose callback if provided
    } else if (linkTo) {
      window.location.href = linkTo; // Redirect to the specified link
    }
  };

  return (
    <div className="top-of-aside-nav">
      <div className="page-name-and-dynamic-icon">
        <h2 className="h-top-aside-nav">{nameOfNavPage}</h2>
        {/* if nameOfPage === Cart it add a BtnIcon */}
        {nameOfNavPage === "Cart" && (
          <span className="btn-not-clickable">
            <BtnIconCartMenu itemCount={itemCountCart} />
          </span>
        )}
        {/* if nameOfPage === Favorites it add a BtnIcon */}
        {nameOfNavPage === "Favorites" && (
          <span className="btn-not-clickable">
            <BtnIconFavoritesMenu itemCountFav={itemCountFav} />
          </span>
        )}
      </div>
      {showCloseButton &&
        (linkTo ? (
          <Link to={linkTo} className="btn-close-link">
            <BtnNormalX />
          </Link>
        ) : (
          <BtnNormalX onClick={handleCloseClick} />
        ))}
    </div>
  );
}
