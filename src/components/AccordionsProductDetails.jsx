import React from "react";
import Accordion from "../UI/Accordions/Accordion";
import "./AccordionsProductDetail.scss";
import AccordionStreamingsContent from "../UI/Accordions/AccordionStreamingsContent";
import AccordionListenFree from "../UI/Accordions/AccordionListenFree";
import RadioStarRating from "../UI/Inputs/RadioStarRating";
export default function AccordionsProductDetails() {
  return (
    <div className="div-all-accordions">
      <Accordion
        titleAccordion={"Detailed information"}
        answerAccordion={
          "The Wave album is an exploratory journey that guides the listener through diverse landscapes and experiences."
        }
      />
      <Accordion
        titleAccordion={"Listen on streamings"}
        answerAccordion={<AccordionStreamingsContent />}
      />
      <Accordion
        titleAccordion={"Listen for free"}
        answerAccordion={<AccordionListenFree />}
      />
      <Accordion
        titleAccordion={"Ratings and reviews"}
        answerAccordion={
          <RadioStarRating />
        }
      />
    </div>
  );
}
