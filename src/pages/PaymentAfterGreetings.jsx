import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import PaymentSuccess from "../components/PaymentSuccess";

export default function PaymentAfterGreetings() {
  const [showCloseButton, setShowCloseButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCloseButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav
        nameOfNavPage={"Order summary "}
        showCloseButton={showCloseButton}
      />
      <hr className="cart-devider-separator" />
      <div className="content-fill-cart">
        <PaymentSuccess />
        {showCloseButton && (
          <div>
            <Link className="btn-continue-div-wrapper" to={"/"}>
              <BtnContinue continueBtnText={"Back to Home"} />
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
