import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./CartCheckoutPayment.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import AccordionCheckout from "../UI/Accordions/AccordionCheckout";
import FormDeliveryDetails from "../UI/Form/FormDeliveryDetails";
import { useSelector } from "react-redux";

export default function Checkout() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav nameOfNavPage={"Checkout"} />
      <hr className="cart-devider-separator" />
      <div className="content-fill-cart">
        <h1>Cart / INFORMATION / payment</h1>
        <AccordionCheckout totalPrice={totalPrice} />
        <FormDeliveryDetails />

       {/*  <ChooserDeliveryPage /> */}
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
