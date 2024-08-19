import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import PaymentSuccess from "../components/PaymentSuccess";
import { clearCart } from "../store/cartSlice";
import "./PaymentAfterGreetings.scss";

export default function PaymentAfterGreetings() {
  const [showCloseButton, setShowCloseButton] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCloseButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  //reset paymentAfterGreetings after payment
  const handleBackToHome = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="backdrop-paymentAfterGreetings"></div>
      <aside className="aside-paymentAfterGreetings">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Order summary "}
          showCloseButton={false}
        />
        <hr className="paymentAfterGreetings-devider-separator" />
        <div className="content-fill-paymentAfterGreetings">
          <PaymentSuccess />
          {showCloseButton && (
            <div>
              <Link
                className="btn-continue-div-wrapper"
                to={"/"}
                onClick={handleBackToHome}
              >
                <BtnContinue continueBtnText={"Back to Home"} />
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
