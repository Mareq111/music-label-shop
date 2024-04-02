/* eslint-disable react/prop-types */

import "./BtnAddToCart.scss";
import IconCircleFilled from "../Icons/IconCircleFilled";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import DialogAddToCart from "../Dialog/DialogAddToCart";
import { useState } from "react";
export default function BtnAddToCart({ item, selectedVersion, onAddToCart }) {
  const dispatch = useDispatch();
  //dialog
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleAddToCart = () => {
    if (selectedVersion) {
      console.log(
        `Adding ${selectedVersion} of ${item.itemTitle} (ID: ${item.itemTitle
          .replace(/\s+/g, "_")
          .toLowerCase()}__${item.radioId}) to cart for $${item.itemPrice}`
      );
      dispatch(addItemToCart({ ...item, selectedVersion }));
      setIsItemAdded(true);
      if (onAddToCart) {
        onAddToCart(item);
      }
    } else {
      console.error("No version selected.");
    }
  };

  return (
    <>
      <button onClick={handleAddToCart} className="btnAddToCart" type="button">
        Add to cart <IconCircleFilled /> {item.itemPrice}€
      </button>
      <DialogAddToCart isFill={isItemAdded} />
    </>
  );
}
