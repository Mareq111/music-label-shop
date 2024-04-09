import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./Cart.scss"; //! zmien na checkout
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import AccordionCheckout from "../UI/Accordions/AccordionCheckout";
import FormDeliveryDetails from "../UI/Form/FormDeliveryDetails";

export default function Checkout() {
  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav nameOfNavPage={"Checkout"} />
      <hr className="cart-devider-separator" />
      <div className="content-fill-cart">
        <h1>INFORMATION / shipping / payment</h1>
        <AccordionCheckout />
        <FormDeliveryDetails />

        <div className="all-text-cart">
          {/* <p className="p-text-cart">
            Your cart contains {cartQuantity}{" "}
            {cartQuantity === 1 ? "item" : "items"}.
          </p> */}
        </div>
        <h3 className="h-cart">
          Subtotal Price : {/* {calculateTotalPrice().toFixed(2)} */}22.99€
        </h3>
        <h3 className="h-cart">
          Subtotal Price : {/* {calculateTotalPrice().toFixed(2)} */}22.99€
        </h3>

        <div>
          <Link className="btn-continue-div-wrapper" to={"/checkout"}>
            <BtnContinue continueBtnText={"Continue to checkout"} />
          </Link>
        </div>
      </div>

      <hr className="cart-devider-separator-smaller" />
      <div className="all-content-of-cart">
        <div className="customer-favorities-cart">
          <CustomerFavoritesCart />
        </div>
      </div>
    </aside>
  );
}
