/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import BtnEditEnteredData from "../Buttons/BtnEditEnteredData";
import "./AccordionDetailedInfo.scss";

export default function AccordionCartDetailsAnswer({ cartData }) {
  return (
    <div className="parameters-div">
      {cartData.items.map((item, index) => (
        <div key={item.itemId} className="cart-item">
          <h3 className="detailedInfo-h">
            Product {index + 1}:{" "}
            <p className="detailedInfo-p">
              {item.titleItem} - {item.title}
            </p>
          </h3>
          <h3 className="detailedInfo-h">
            Version: <p className="detailedInfo-p">{item.selectedVersion}</p>
          </h3>
          <h3 className="detailedInfo-h">
            Price: <p className="detailedInfo-p">{item.priceItem}€</p>
          </h3>
          <h3 className="detailedInfo-h">
            Quantity: <p className="detailedInfo-p">{item.quantity}</p>
          </h3>
          <hr className="cart-devider-separator" />
        </div>
      ))}
      <h4 className="detailedInfo-h">
        Cart total quantity:{" "}
        <p className="detailedInfo-p">{cartData.totalQuantity}</p>
      </h4>
      <h4 className="detailedInfo-h">
        Cart total price:{" "}
        <p className="detailedInfo-p">{cartData.totalPrice.toFixed(2)}€</p>
      </h4>
      <div className="edit-data-div-payment">
        <Link to={"/cart"}>
          <BtnEditEnteredData />
        </Link>
      </div>
    </div>
  );
}
