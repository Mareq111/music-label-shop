import { useState, useEffect } from "react";
import IconCheck from "../UI/Icons/IconCheck";
import "./PaymentSuccess.scss";

export default function PaymentSuccess() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="payment-success-div">
      {isLoading ? (
        <>
          <div className="loader">
            <div className="loader-dot loader-dot1"></div>
            <div className="loader-dot loader-dot2"></div>
            <div className="loader-dot loader-dot3"></div>
          </div>
          <p className="p-payment">
            Your payment is being processed. Please wait.
          </p>
        </>
      ) : (
        <>
          <div className="success-icon">
            <div className="checkmark-circle-outer-max">
              <div className="checkmark-circle-outer">
                <div className="checkmark-circle-inner">
                  <IconCheck />
                </div>
              </div>
            </div>
          </div>
          <h1 className="h-payment">Payment successful!</h1>
          <p className="p-payment">
            The order confirmation has been sent to your email.
          </p>
        </>
      )}
    </div>
  );
}
