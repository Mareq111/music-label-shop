/* eslint-disable react/prop-types */

import IconCheck from "../UI/Icons/IconCheck";
import "./StepCircle.scss";

export default function StepCircle({ stepsCompleted = [] }) {
  return (
    <div className="three-steps">
      <div className="all-circle-step">
        <div className="circle-step check">
          {stepsCompleted.includes(1) ? (
            <div className="circle-step-check">
              <IconCheck />
            </div>
          ) : (
            1
          )}
        </div>
        <p className="p-circle-step">Cart</p>
      </div>

      {/* divider */}
      <div className="divider-steps-all">
        <div
          className={`divider-steps ${
            stepsCompleted.includes(1)
              ? "divider-steps-check-cart-checkout"
              : ""
          }`}
        ></div>
      </div>

      <div className="all-circle-step">
        <div className="circle-step">
          {stepsCompleted.includes(2) ? (
            <div className="circle-step-check">
              <IconCheck />
            </div>
          ) : (
            2
          )}
        </div>
        <p className="p-circle-step">Checkout</p>
      </div>

      {/* divider */}
      <div className="divider-steps-all">
        <div
          className={`divider-steps ${
            stepsCompleted.includes(2)
              ? "divider-steps-check-checkout-payment"
              : ""
          }`}
        ></div>
      </div>

      <div className="all-circle-step">
        <div className="circle-step check">
          {stepsCompleted.includes(3) ? (
            <div className="circle-step-check">
              <IconCheck />
            </div>
          ) : (
            3
          )}
        </div>
        <p className="p-circle-step">Payment</p>
      </div>
    </div>
  );
}
