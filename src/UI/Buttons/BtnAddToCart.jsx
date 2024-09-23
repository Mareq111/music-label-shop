/* eslint-disable react/prop-types */

import { useState } from "react";
import "./BtnAddToCart.scss";
import IconCircleFilled from "../Icons/IconCircleFilled";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import DialogAddToCart from "../Dialog/DialogAddToCart";

export default function BtnAddToCart({ item, selectedVersion, priceItem }) {
  const dispatch = useDispatch();
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isVersionSelected, setIsVersionSelected] = useState(true);

  const handleAddToCart = () => {
    if (selectedVersion) {
      dispatch(
        addItemToCart({
          ...item,
          selectedVersion,
          imgURL: item.imgURL,
          productId: item.productId,
          productPrice: item.productPrice,
        })
      );
      setIsItemAdded(true);
      setTimeout(() => {
        setIsItemAdded(false);
      }, 2000);
    } else {
      console.error("No version selected.");
      setIsVersionSelected(false);
      setTimeout(() => {
        setIsVersionSelected(true);
      }, 2000);
    }
  };

  return (
    <>
      <button
        tabIndex={0}
        onClick={() => {
          setIsItemAdded(false);
          setIsVersionSelected(true);
          handleAddToCart();
        }}
        className="btnAddToCart"
        type="button"
      >
        Add to cart <IconCircleFilled /> {priceItem}€
      </button>
      {isItemAdded && <DialogAddToCart isFill={isItemAdded} />}
      {!isVersionSelected && <DialogAddToCart isFill={false} />}
    </>
  );
}
