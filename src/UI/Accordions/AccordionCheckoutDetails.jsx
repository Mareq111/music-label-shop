/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import Accordion from "./Accordion.jsx";
import AccordionCheckoutDetailsAnswer from "./AccordionCheckoutDetailsAnswer.jsx";

export default function AccordionCheckoutDetails() {
  const formData = useSelector((state) => state.form);

  return (
    <div>
      <Accordion
        titleAccordion={`View your delivery details`}
        answerAccordion={<AccordionCheckoutDetailsAnswer formData={formData} />}
      />
    </div>
  );
}
