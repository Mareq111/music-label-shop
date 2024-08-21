/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue.jsx";
import BtnHeart from "../UI/Buttons/BtnHeart.jsx";
import "./FavoritesProductActions.scss";
import { closeFavorites } from "../store/favoritesSlice"; // Import akcji zamykającej Favorites

export default function FavoritesProductActions({
  onRemoveProduct,
  onAddToCart,
  product,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handling with closing favorites and open product page from favorites
  const handleSelectOptionClick = () => {
    dispatch(closeFavorites());

    navigate(`/${product.key}`);
  };

  return (
    <div className="product-actions-fav">
      <BtnContinue
        className="btn-add-cart"
        continueBtnText={"Select option"}
        onClick={handleSelectOptionClick}
      />
      <BtnHeart product={product} />
    </div>
  );
}
