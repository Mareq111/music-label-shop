/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./DialogAddToCart.scss";

export default function DialogAddToCart({ isFill }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isFill) {
      setIsVisible(true);
    }
  }, [isFill]);
  console.log("isFill:", isFill);
  return (
    <dialog
      role="dialog"
      className={`dialog-cart ${isVisible ? "visible" : ""} ${
        isFill ? "dialog-cart-fill" : "dialog-cart-empty"
      }`}
    >
      {isFill ? (
        <div className="dialog-content">
          <p className="p-dialog-cart">You add item to the cart!</p>
        </div>
      ) : (
        <div className="dialog-content">
          <p className="p-dialog-cart" id="p-dialog-cart-red">
            No item was added to the cart.
          </p>
        </div>
      )}
    </dialog>
  );
}
