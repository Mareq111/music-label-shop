/* eslint-disable react/prop-types */
import { useState } from "react";
import './BtnQuantitySelector.scss'
export default function BtnQuantitySelector({
  initialQuantity,
  onQuantityChange,
}) {
  const [quantityItems, setQuantityItems] = useState(initialQuantity || 1);

  const decreaseQuantity = () => {
    if (quantityItems > 1) {
      setQuantityItems(quantityItems - 1);
      onQuantityChange(quantityItems - 1);
      console.log('remove item')
    }
  };

  const increaseQuantity = () => {
    setQuantityItems(quantityItems + 1);
    onQuantityChange(quantityItems + 1);
    console.log('add item')

  };

  return (
    <div className="quantity-selector">
      <button className="btn-quantity-selector" onClick={decreaseQuantity}>
        -
      </button>
      <span className="quantity-selector-value">{quantityItems}</span>
      <button className="btn-quantity-selector" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
}
