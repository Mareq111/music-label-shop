/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Accordion from "./Accordion.jsx";
export default function AccordionCheckoutDetails() {
  return (
    <div>
      <Link to="/checkout">
        <Accordion titleAccordion={`View your delivery details`} />
      </Link>
    </div>
  );
}
