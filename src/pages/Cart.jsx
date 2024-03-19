/* eslint-disable react/no-unescaped-entities */
import "./Cart.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";
import BtnContinue from "../UI/Buttons/BtnContinue.jsx";
import { Link } from "react-router-dom";
import YouMightLikeCart from "../components/YouMightLikeCart.jsx";
export default function Cart() {
  return (
    <aside className="aside-cart">
      {/* bagde with name of page and x to return */}
      <BadgeTopOfAsideNav nameOfNavPage={"Cart"} />
      <hr className="cart-devider-separator" />
      <div className="content-empty-cart">
        <div className="all-text-empty-cart">
          <p className="p-text-empty-cart">Looks like you're starting fresh.</p>
          <h3 className="h-cta-empty-cart">Let's dive in!</h3>
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
        {/*  <h3 className="h-categories-cart">You might also like</h3> */}
        {/*   <div className="cart-you-also-like">
        <YouMightLikeCart/>
        </div> */}
      </div>
    </aside>
  );
}
