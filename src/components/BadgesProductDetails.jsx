import React from "react";
import BadgeDeliveryInfo from "../UI/Badge/BadgeDeliveryInfo";
import BadgeReturnsInfo from "../UI/Badge/BadgeReturnsInfo";
import './BadgesProductDetails.scss'
export default function BadgesProductDetails() {
  return (
    <div className="two-badges-product-details">
      <BadgeDeliveryInfo />
      <BadgeReturnsInfo />
    </div>
  );
}
