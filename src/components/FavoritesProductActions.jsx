/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "./FavoritesProductActions.scss";
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
}
