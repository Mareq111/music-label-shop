/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import BtnContinue from "../UI/Buttons/BtnContinue.jsx";
import BtnHeart from "../UI/Buttons/BtnHeart.jsx";
import "./FavoritesProductActions.scss";

export default function FavoritesProductActions({
  onRemoveProduct,
  onAddToCart,
  product,
}) {
  return (
    <div className="product-actions-fav">
      <BtnContinue className="btn-add-cart" continueBtnText={"Select option"} />
      <BtnHeart product={product} />
    </div>
  );
}
