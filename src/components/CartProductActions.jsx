  /* eslint-disable react/prop-types */

/* import { useState, useEffect } from "react";
import BtnQuantitySelector from "../UI/Buttons/BtnQuantitySelector";
import BtnIconTrash from "../UI/Buttons/BtnIconTrash";
import './CartProductActions.scss';

export default function CartProductActions({
  initialQuantity,
  onQuantityChange,
  onRemoveProduct,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
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
 */

/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import BtnQuantitySelector from "../UI/Buttons/BtnQuantitySelector";
import BtnIconTrash from "../UI/Buttons/BtnIconTrash";
import './CartProductActions.scss';

export default function CartProductActions({
  initialQuantity,
  onQuantityChange,
  onRemoveProduct,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    console.log("CartProductActions initialQuantity:", initialQuantity);
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
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
