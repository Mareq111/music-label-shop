import React, { useState } from "react";
import "./AccordionFooter.scss";
export default function AccordionFooter({ titleAccordion, answerAccordion }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="simply-accordion">
      <button
        tabIndex={0}
        className={`btn-accordion-with-x ${
          accordionOpen ? "rotate-icon-back" : "rotate-icon"
        }`}
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
      >
        <span className="title-of-accordion">{titleAccordion}</span>
      </button>
      <div className={`div-text-inside ${accordionOpen ? "open" : "close"}`}>
        <p className="accordion-text-inside">{answerAccordion}</p>
      </div>
    </div>
  );
}
