/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SubpagesInfoShoppingAuthorAccount.scss";
export default function PurchaseHistory() {
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
        <h3 className="h-text-subpage">Purchase History</h3>
        <p className="p-subpage-description">
          Easily track your orders, view details, and manage returns or
          exchanges.
        </p>
      </div>

      {/* all sections into page */}
      <div className="all-sections-subpage">
        {/* section contact */}

        <section className="content-section-subpage" id="return-policy">
          <div className="inside-content-section-subpage">
            <h4 className="h-inside-content-section-subpage">
              Please log in to view your orders.
            </h4>
            <div className="content-into-section">
              <div className="div-h5-p-into-subpage">
                <h5 className="h5-into-subpage ">Your Orders </h5>
                <p className="p-into-subpage">
                  You don't have any orders yet. Orders will appear here once
                  payment is completed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
