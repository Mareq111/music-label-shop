/* eslint-disable react/prop-types */

import "./BadgeIdAndArrowBack.scss";
import BtnArrow from "../Buttons/BtnArrow.jsx";

export default function BadgeIdAndArrowBack({ productId }) {
  // Function to handle going back in history so when you click arrow you return to spot when you move for this product page
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="badge-id-and-arrow-back">
        <div className="div-id-and-text">
          <p className="text-id">Product ID: {productId}</p>
        </div>
        <div className="div-link-btn-comeback">
          <span className="link-arrow-back" onClick={handleGoBack}>
            <BtnArrow />
          </span>
        </div>
      </div>
    </div>
  );
}
