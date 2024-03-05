import React, { useState } from "react";
import "./BtnHeart.scss";
import IconAddToFav from "../Icons/IconAddToFav";
import IconAddedToFav from "../Icons/IconAddedToFav";

export default function BtnHeart() {
  const [isHeartFav, setIsHeartFav] = useState(true);

  const handleClick = () => {
    setIsHeartFav(!isHeartFav);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="btn-add-to-fav"
        type="button"
        aria-label="add to favorites"
      >
        {isHeartFav ? <IconAddToFav /> : <IconAddedToFav />}
      </button>
    </>
  );
}
