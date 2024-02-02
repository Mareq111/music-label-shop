import React from "react";
import Accordion from "../UI/Accordions/Accordion";
import './AccordionsProductDetail.scss'
export default function AccordionsProductDetails() {
  return (
    <div className="div-all-accordions">
      <Accordion
        titleAccordion={"Detailed Information"}
        answerAccordion={
          "The Wave album is an exploratory journey that guides the listener through diverse landscapes and experiences."
        }
      />
      <Accordion
        titleAccordion={"Ratings and Reviews"}
        answerAccordion={
          "The ship on the cover represents the voyager who is navigating the unknown, while the abstract sky shows the endless possibilities that are waiting to be discovered."
        }
      />
    </div>
  );
}
