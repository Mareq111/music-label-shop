import { useState } from "react";
import RadioDeliveryOptions from "../UI/Inputs/RadioDeliveryOptions";
import "./ChooserDeliveryOptions.scss";

export default function ChooserDeliveryOptions() {
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedDeliveryOption(option);
  };

  const deliveryOptions = [
    {
      carrier: "DPD",
      deliveryTime: 2,
      price: 12.99,
      id: "dpd",
    },
    {
      carrier: "Fedex Express",
      deliveryTime: 4,
      price: 9.99,
      id: "fedex-express",
    },
    {
      carrier: "Inpost",
      deliveryTime: 6,
      price: 8.99,
      id: "inpost",
    },
  ];

  return (
    <div className="delivery-page">
      <div className="shipping-method-div">
        <label>Shipping method - to your door</label>
      </div>
      <RadioDeliveryOptions
        onOptionChange={handleOptionChange}
        deliveryOptions={deliveryOptions}
      />
      <p className="selected-option-delivery">
        Selected option: {selectedDeliveryOption?.carrier}
      </p>
    </div>
  );
}
