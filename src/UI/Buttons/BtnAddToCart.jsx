/* eslint-disable react/prop-types */
/* /* eslint-disable react/prop-types */

/* import "./BtnAddToCart.scss";
import IconCircleFilled from "../Icons/IconCircleFilled";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import DialogAddToCart from "../Dialog/DialogAddToCart";
import { useState } from "react";

export default function BtnAddToCart({ item, selectedVersion, onAddToCart }) {
  const dispatch = useDispatch();
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isVersionSelected, setIsVersionSelected] = useState(true);

  const handleAddToCart = () => {
    // show item added dialog
    if (selectedVersion) {
      console.log(
        `Adding ${selectedVersion} of ${item.itemTitle} (ID: ${item.itemTitle
          .replace(/\s+/g, "_")
          .toLowerCase()}__${item.radioId}) to cart for $${item.itemPrice}`
      );
      dispatch(addItemToCart({ ...item, selectedVersion }));
      setIsItemAdded(true);

      setTimeout(() => {
        setIsItemAdded(false);
      }, 2000);

      if (onAddToCart) {
       
        onAddToCart({...item, selectedVersion})
      }
    } else {
      // show no item added dialog
      console.error("No version selected.");
      setIsVersionSelected(false);
      setTimeout(() => {
        setIsVersionSelected(true);
      }, 2000);
    }
  };

  return (
    <>
     {/*  btn with reset isVersionSelected after any click 
      <button
        onClick={() => {
          setIsItemAdded(false);
          setIsVersionSelected(true);
          handleAddToCart();
        }}
        className="btnAddToCart"
        type="button"
      >
        Add to cart <IconCircleFilled /> {item.itemPrice}€
      </button>
      {isItemAdded && <DialogAddToCart isFill={isItemAdded} />}
      {!isVersionSelected && <DialogAddToCart isFill={false} />}
    </>
  );
}
 */

/* import { useState } from "react";
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
    // show item added dialog
    if (selectedVersion) {
      console.log(
        `Adding ${selectedVersion} of ${item.itemTitle} (ID: ${item.itemTitle
          .replace(/\s+/g, "_")
          .toLowerCase()}__${item.radioId}) to cart for $${item.itemPrice}`
      );
      dispatch(addItemToCart({ ...item, selectedVersion }));
      setIsItemAdded(true);

      setTimeout(() => {
        setIsItemAdded(false);
      }, 2000);
    } else {
      // show no item added dialog
      console.error("No version selected.");
      setIsVersionSelected(false);
      setTimeout(() => {
        setIsVersionSelected(true);
      }, 2000);
    }
  };

  return (
    <>
       btn with reset isVersionSelected after any click 
      <button
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
} */
/* import { useState, useEffect } from "react";
import "./BtnAddToCart.scss";
import IconCircleFilled from "../Icons/IconCircleFilled";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import DialogAddToCart from "../Dialog/DialogAddToCart";

export default function BtnAddToCart({ item, selectedVersion, priceItem }) {
  const dispatch = useDispatch();
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isVersionSelected, setIsVersionSelected] = useState(true);

  useEffect(() => {
    console.log("Selected Version:", selectedVersion);
  }, [selectedVersion]);

  const handleAddToCart = () => {
    if (selectedVersion) {
      console.log("Adding item to cart:", item, selectedVersion);
      dispatch(addItemToCart({ ...item, selectedVersion }));
      setIsItemAdded(true);

      setTimeout(() => {
        setIsItemAdded(false);
      }, 2000);
    } else {
      setIsVersionSelected(false);
      setTimeout(() => {
        setIsVersionSelected(true);
      }, 2000);
    }
  };

  return (
    <>
      <button
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
 */

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
