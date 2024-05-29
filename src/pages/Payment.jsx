import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import "./CartCheckoutPayment.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { useSelector } from "react-redux";
import AccordionCheckoutCart from "../UI/Accordions/AccordionCheckoutCart";
import AccordionCheckoutDetails from "../UI/Accordions/AccordionCheckoutDetails";

export default function Payment() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav nameOfNavPage={"Payment"} showCloseButton={true} />
      <hr className="cart-devider-separator" />
      <div className="content-fill-cart">
        <h1>Cart / Informartion / PAYMENT</h1>
        <AccordionCheckoutCart totalPrice={totalPrice} />
        <AccordionCheckoutDetails />

        <div>
          <Link className="btn-continue-div-wrapper" to={"/payment-greetings"}>
            <BtnContinue continueBtnText={"Payment"} />
          </Link>
        </div>
      </div>

      <hr className="cart-devider-separator-smaller" />
      <div className="all-content-of-cart">
        <div className="payment-disclaimer">
          <p className="p-text-cart-disclaimer">
            This page is part of a portfolio project. Please remember that it is
            not a real transaction.
          </p>
        </div>
      </div>
    </aside>
  );
}
