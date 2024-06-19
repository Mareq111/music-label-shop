/* eslint-disable react/prop-types */

/* import { useState } from "react";
import { useDispatch } from "react-redux";
import "./BtnHeart.scss";
import {
  addItemToFavorites,
  removeItemFromFavorites,
} from "../../store/favoritesSlice";
import IconAddToFav from "../Icons/IconAddToFav";
import IconAddedToFav from "../Icons/IconAddedToFav";
import DialogAddToFav from "../Dialog/DialogAddToFav";

export default function BtnHeart({ product }) {
  const [isHeartFav, setIsHeartFav] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsHeartFav(!isHeartFav);
    if (!isHeartFav) {
      dispatch(addItemToFavorites(product));
    } else {
      dispatch(removeItemFromFavorites(product.itemId));
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
        className="btn-add-to-fav"
        type="button"
        aria-label="add to favorites"
      >
        {isHeartFav ? <IconAddedToFav /> : <IconAddToFav />}
      </button>
      {showDialog && <DialogAddToFav isFavorite={isHeartFav} />}
    </>
  );
}
 */

/* 
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
  const isFavorite = useSelector((state) =>
    state.favorites.items.some((item) => item.itemId === product.itemId)
  );
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addItemToFavorites(product));
    } else {
      dispatch(removeItemFromFavorites(product.itemId));
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
        className="btn-add-to-fav"
        type="button"
        aria-label="add to favorites"
      >
        {isFavorite ? <IconAddedToFav /> : <IconAddToFav />}
      </button>
      {showDialog && <DialogAddToFav isFavorite={isFavorite} />}
    </>
  );
} */

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
  const isFavorite = useSelector((state) =>
    state.favorites.items.some((item) => item.itemId === product.itemId)
  );
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addItemToFavorites(product));
    } else {
      dispatch(removeItemFromFavorites(product.itemId));
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
        className="btn-add-to-fav"
        type="button"
        aria-label="add to favorites"
      >
        {isFavorite ? <IconAddedToFav /> : <IconAddToFav />}
      </button>
      {showDialog && <DialogAddToFav isFavorite={isFavorite} />}
    </>
  );
}
