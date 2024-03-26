/* eslint-disable react/prop-types */
import "./BtnAddToCart.scss";
import IconCircleFilled from "../Icons/IconCircleFilled";
export default function BtnAddToCart({ itemTitle, itemPrice, selectedVersion }) {
  const handleAddToCart = () => {
    if (selectedVersion) {
    /*   console.log(`Adding ${selectedVersion} to cart for $${itemPrice}`); */
    console.log(`Adding ${selectedVersion} of ${itemTitle} (ID: ${itemTitle.replace(/\s+/g, '_').toLowerCase()}) to cart for $${itemPrice}`);
    } else {
      console.error("No version selected.");
    }
  };

  return (
    <button onClick={handleAddToCart} className="btnAddToCart" type="button">
      Add to cart <IconCircleFilled /> {itemPrice}€
    </button>
  );
} 
