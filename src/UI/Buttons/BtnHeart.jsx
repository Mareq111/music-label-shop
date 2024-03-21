/* eslint-disable react/prop-types */

import { useState } from "react";
import "./BtnHeart.scss";
import IconAddToFav from "../Icons/IconAddToFav";
import IconAddedToFav from "../Icons/IconAddedToFav";

export default function BtnHeart({ onClick }) {
  const [isHeartFav, setIsHeartFav] = useState(true);

  const handleClick = () => {
    const updatedIsHeartFav = !isHeartFav;
    setIsHeartFav(updatedIsHeartFav);
    onClick(updatedIsHeartFav);
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
    </>
  );
}
