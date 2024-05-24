/* eslint-disable react/prop-types */
/* /* eslint-disable react/prop-types */
import { useState } from "react";
import "./BtnQuantitySelector.scss";
import IconPlus from "../Icons/IconPlus";
import IconMinus from "../Icons/IconMinus";
export default function BtnQuantitySelector({
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
      >
        <IconMinus />
      </button>
      <span className="quantity-selector-value">{quantityItems}</span>
      <button
        aria-label="Increase Quantity"
        className="btn-quantity-selector"
        onClick={increaseQuantity}
      >
        <IconPlus />
      </button>
    </div>
  );
}
