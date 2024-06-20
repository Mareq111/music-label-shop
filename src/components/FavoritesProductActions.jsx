/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import BtnContinue from "../UI/Buttons/BtnContinue.jsx";
import BtnHeart from "../UI/Buttons/BtnHeart.jsx";
import "./FavoritesProductActions.scss";
import { Link } from "react-router-dom";

export default function FavoritesProductActions({
  onRemoveProduct,
  onAddToCart,
  product,
}) {
  return (
    <div className="product-actions-fav">
      <Link
        to={`/${product.key}`}
        aria-label="go to this product page and select option"
        title="Go to this product page and select option"
      >
        <BtnContinue
          className="btn-add-cart"
          continueBtnText={"Select option"}
        />
      </Link>
      <BtnHeart product={product} />
    </div>
  );
}
