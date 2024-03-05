import React from "react";
import IconDelivery from "../Icons/IconDelivery";
import "./BadgeDeliveryInfo.scss";
export default function BadgeDeliveryInfo() {
  return (
    <div className="text-with-icon-delivery">
      <IconDelivery />
      <p className="text-delivery">Free delivery on orders over 5€</p>
    </div>
  );
}
