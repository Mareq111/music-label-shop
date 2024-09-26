/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SubpagesInfoShoppingAuthorAccount.scss";
export default function Shopping() {
  const location = useLocation();
  const margin = 32; // 32px = 2rem

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - margin;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div className="subpage">
      <div className="head-of-subpage">
        <h3 className="h-text-subpage">Shopping</h3>
        <p className="p-subpage-description">
          Explore our Shopping section for easy payments, hassle-free returns,
          and efficient delivery. Your satisfaction is our priority.
        </p>
      </div>

      {/* all sections into page */}
      <div className="all-sections-subpage">
        {/* section contact */}

        <section
          tabIndex={0}
          className="content-section-subpage section-focus"
          id="return-policy"
        >
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">Return Policy</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage "> Our commitment </h5>
                <p className="p-into-subpage">
                  For customer satisfaction includes a generous 30-day window
                  for hassle-free exchanges and returns. However, please be
                  aware that this policy does not apply to opened or used sets
                  with records and individual records, as we strive to maintain
                  the quality and integrity of our products
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          tabIndex={0}
          className="content-section-subpage section-focus"
          id="delivery"
        >
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">Delivery</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">Shipping Methods</h5>
                <p className="p-into-subpage">
                  We offer three courier options for your convenience: DPD,
                  InPost, and FedEx Express. With DPD, your package will be
                  delivered within 2 days. InPost delivery typically takes 6
                  days, while FedEx Express ensures delivery within 4 days.
                  Select the courier that best fits your needs and schedule.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          tabIndex={0}
          className="content-section-subpage section-focus"
          id="payments"
        >
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">Payments</h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">Accepted Payment Methods</h5>
                <p className="p-into-subpage">
                  We offer two convenient payment methods for your transactions:
                  debit or credit card payments and PayPal. Choose the option
                  that best suits your preferences and enjoy secure and
                  hassle-free payments with us.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
