/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AccordionWithNav.scss";
export default function AccordionWithNav({ titleAccordion, answerAccordion }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="simply-accordion-with-nav">
      <button
        tabIndex={0}
        className="btn-accordion-with-nav"
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
      >
        <span className="title-of-accordion-with-nav">{titleAccordion}</span>
      </button>
      <div
        className={`div-text-inside-with-nav ${accordionOpen ? "open" : "close"}`}
      >
        <div className="accordion-text-inside-with-nav">{answerAccordion}</div>
      </div>
    </div>
  );
}
