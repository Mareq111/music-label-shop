/* eslint-disable react/prop-types */


import { useSelector } from "react-redux";
import Accordion from "./Accordion.jsx";
import AccordionCartDetailsAnswer from "./AccordionCartDetailsAnswer.jsx";

export default function AccordionCheckoutCart() {
  const cartData = useSelector((state) => state.cart);
  const totalPrice = cartData.totalPrice;

  return (
    <div>
      <Accordion
        titleAccordion={`Check order in cart: ${totalPrice.toFixed(2)}€`}
        answerAccordion={<AccordionCartDetailsAnswer cartData={cartData} />}
      />
    </div>
  );
}
