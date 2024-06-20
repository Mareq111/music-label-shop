/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BtnHeart.scss";
import {
  addItemToFavorites,
  removeItemFromFavorites,
} from "../../store/favoritesSlice";
import IconAddToFav from "../Icons/IconAddToFav";
import IconAddedToFav from "../Icons/IconAddedToFav";
import DialogAddToFav from "../Dialog/DialogAddToFav";

export default function BtnHeart({ product }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  // Check if the product is in favorites
  const isProductInFavorites = favorites.some(
    (item) => item.titleItem === product.titleItem
  );

  // State to manage dialog visibility
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    if (!isProductInFavorites) {
      dispatch(addItemToFavorites(product));
    } else {
      dispatch(removeItemFromFavorites(product.titleItem));
    }
    setShowDialog(true);
    setTimeout(() => {
      setShowDialog(false);
    }, 2000);
  };

  return (
    <>
      <button
        title="favorites"
        onClick={handleClick}
        className={`btn-add-to-fav ${isProductInFavorites ? "active" : ""}`}
        type="button"
        aria-label="add to favorites"
      >
        {isProductInFavorites ? <IconAddedToFav /> : <IconAddToFav />}
      </button>
      {showDialog && <DialogAddToFav isFavorite={isProductInFavorites} />}
    </>
  );
}
