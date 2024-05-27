/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import "./BtnQuantitySelector.scss";
import IconPlus from "../Icons/IconPlus";
import IconMinus from "../Icons/IconMinus";

export default function BtnQuantitySelector({
  initialQuantity,
  onQuantityChange,
}) {
  const [quantityItems, setQuantityItems] = useState(initialQuantity || 1);

  useEffect(() => {
    console.log("initialQuantity changed:", initialQuantity);
    setQuantityItems(initialQuantity);
  }, [initialQuantity]);

  const decreaseQuantity = () => {
    if (quantityItems > 1) {
      const newQuantity = quantityItems - 1;
      setQuantityItems(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const increaseQuantity = () => {
    const newQuantity = quantityItems + 1;
    setQuantityItems(newQuantity);
    onQuantityChange(newQuantity);
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
