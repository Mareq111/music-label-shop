/* eslint-disable react/prop-types */
import { useState } from "react";
import BtnQuantitySelector from "../UI/Buttons/BtnQuantitySelector";
import BtnIconTrash from "../UI/Buttons/BtnIconTrash";

export default function CartProductActions({
  initialQuantity,
  onQuantityChange,
  onRemoveProduct,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="product-actions">
      <BtnQuantitySelector
        initialQuantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <BtnIconTrash onClick={onRemoveProduct} />
    </div>
  );
}
