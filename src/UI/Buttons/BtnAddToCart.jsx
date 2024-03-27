/* eslint-disable react/prop-types */

import "./BtnAddToCart.scss";
import IconCircleFilled from "../Icons/IconCircleFilled";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";

export default function BtnAddToCart({ item, selectedVersion }) {
  const dispatch = useDispatch();

  /*   const handleAddToCart = () => {
    dispatch(addItemToCart(item));
  }; */
  const handleAddToCart = () => {
    if (selectedVersion) {
      console.log(
        `Adding ${selectedVersion} of ${item.itemTitle} (ID: ${item.itemTitle
          .replace(/\s+/g, "_")
          .toLowerCase()}) to cart for $${item.itemPrice}`
      );
      dispatch(addItemToCart(item));
    } else {
      console.error("No version selected.");
    }
  };

  return (
    <button onClick={handleAddToCart} className="btnAddToCart" type="button">
      Add to cart <IconCircleFilled /> {item.itemPrice}€
    </button>
  );
}
