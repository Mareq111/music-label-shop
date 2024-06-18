/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

/* import "./FavoritesProductActions.scss";
import BtnHeart from "../UI/Buttons/BtnHeart.jsx";
import BtnContinue from "../UI/Buttons/BtnContinue.jsx";

export default function FavoritesProductActions({ onRemoveProduct }) {
  const handleHeartClick = (isHeartFav) => {
    console.log("Heart clicked, isHeartFav:", isHeartFav);
  };

  return (
    <div className="product-actions-fav">
      <BtnContinue className="btn-add-cart" continueBtnText={"Add to cart"} />
      <BtnHeart isHeartFav={true} onClick={handleHeartClick} />
    </div>
  );
} */
import React from "react";
import "./FavoritesProductActions.scss";
import BtnHeart from "../UI/Buttons/BtnHeart.jsx";
import BtnAddToCart from "../UI/Buttons/BtnAddToCart.jsx";
import BtnContinue from "../UI/Buttons/BtnContinue.jsx";

export default function FavoritesProductActions({
  onRemoveProduct,
  onAddToCart,
}) {
  const handleHeartClick = (isHeartFav) => {
    console.log("Heart clicked, isHeartFav:", isHeartFav);
  };

  return (
    <div className="product-actions-fav">
      {/* <BtnAddToCart onAddToCart={onAddToCart} /> */}
      <BtnContinue className="btn-add-cart" continueBtnText={"Select option"} />

      <BtnHeart isHeartFav={true} onClick={handleHeartClick} />
    </div>
  );
}
