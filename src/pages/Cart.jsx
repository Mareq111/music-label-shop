/* eslint-disable react/no-unescaped-entities */
import "./Cart.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";
import BtnContinue from "../UI/Buttons/BtnContinue.jsx";
import { Link } from "react-router-dom";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart.jsx";
export default function Cart() {
  return (
    <aside className="aside-cart">
      {/* bagde with name of page and x to return */}
      <BadgeTopOfAsideNav nameOfNavPage={"Cart"} />
      <hr className="cart-devider-separator" />
      <div className="content-empty-cart">
        <div className="all-text-empty-cart">
          <p className="p-text-empty-cart">
            It looks like you're starting with a clean slate.
          </p>
          <h3 className="h-cta-empty-cart">Let's explore!</h3>
        </div>

        <div>
          <Link className="btn-continue-div-wrapper" to={".."} relative="path">
            <BtnContinue continueBtnText={"Continue Shopping"} />
          </Link>
        </div>
      </div>
      <hr className="cart-devider-separator-smaller" />
      <div className="all-content-of-cart">
        {/* Main mapping elements from array to separate all BtnNavTo */}
        <div className="customer-favorities-cart">
          <CustomerFavoritesCart />
        </div>
      </div>
    </aside>
  );
}
