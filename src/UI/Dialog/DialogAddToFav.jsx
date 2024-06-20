/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import "./DialogAddToCart.scss";

export default function DialogAddToFav({ isFavorite }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isFavorite !== null) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000); // hide after 2 seconds
    }
  }, [isFavorite]);

  return (
    <dialog
      role="dialog"
      className={`dialog-fav ${isVisible ? "visible" : ""}  ${
        isFavorite ? "dialog-cart-fill" : "dialog-cart-empty"
      }`}
    >
      {isFavorite ? (
        <div className="dialog-content">
          <p className="p-dialog-cart" id="p-add-to-fav">
            Item added to favorites!
          </p>
        </div>
      ) : (
        <div className="dialog-content">
          <p className="p-dialog-cart" id="p-dialog-fav-red">
            Item removed from favorites.
          </p>
        </div>
      )}
    </dialog>
  );
}
