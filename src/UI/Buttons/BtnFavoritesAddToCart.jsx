/* eslint-disable react/prop-types */
import { useState } from "react";
import IconPlus from "../Icons/IconPlus";
import IconMinus from "../Icons/IconMinus";
export default function BtnFavoritesAddToCart({
  initialQuantity,
  onQuantityChange,
}) {
  const [quantityItems, setQuantityItems] = useState(initialQuantity || 1);

  const decreaseQuantity = () => {
    if (quantityItems > 1) {
      setQuantityItems(quantityItems - 1);
      onQuantityChange(quantityItems - 1);
      console.log("remove item");
    }
  };

  const increaseQuantity = () => {
    setQuantityItems(quantityItems + 1);
    onQuantityChange(quantityItems + 1);
    console.log("add item");
  };

  return (
    <div className="quantity-selector">
      <button
        aria-label="Decrease Quantity"
        className="btn-quantity-selector"
        onClick={decreaseQuantity}
      >Add to cart
      </button>
    </div>
  );
}
