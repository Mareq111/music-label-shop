/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Accordion from "../Accordions/Accordion.jsx";
export default function AccordionCheckout({ totalPrice }) {
  return (
    <div>
      <Link to="/cart">
        <Accordion
          titleAccordion={`Check order in cart: ${totalPrice.toFixed(2)}€`}
        />
      </Link>
    </div>
  );
}
