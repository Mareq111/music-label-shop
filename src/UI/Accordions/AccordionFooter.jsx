import React, { useState } from "react";
import "./AccordionFooter.scss";
export default function AccordionFooter({ titleAccordion, answerAccordion }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="simply-accordion-footer">
      <button
        tabIndex={0}
        className="btn-accordion-footer"
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
      >
        <span className="title-of-accordion-footer">{titleAccordion}</span>
      </button>
      <div
        className={`div-text-inside-footer ${accordionOpen ? "open" : "close"}`}
      >
        <div className="accordion-text-inside-footer">{answerAccordion}</div>
      </div>
    </div>
  );
}
