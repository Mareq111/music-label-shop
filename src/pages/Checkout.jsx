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

        <p>delivery chooser</p>
        <div>
          <Link className="btn-continue-div-wrapper" to={"/checkout"}>
            <BtnContinue continueBtnText={"Proceed to pay"} />
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
