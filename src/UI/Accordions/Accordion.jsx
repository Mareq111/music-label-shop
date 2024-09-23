/* eslint-disable react/prop-types */
/* import { useState } from "react";
import IconCircleX from "../Icons/IconCircleX.jsx";
import "./Accordion.scss";
export default function Accordion({ titleAccordion, answerAccordion }) {
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
        <IconCircleX />
      </button>
      <div className={`div-text-inside ${accordionOpen ? "open" : "close"}`}>
        <div className="accordion-text-inside">{answerAccordion}</div>
      </div>
    </div>
  );
} */
/* eslint-disable react/prop-types */
import { useState } from "react";
import IconCircleX from "../Icons/IconCircleX.jsx";
import "./Accordion.scss";

export default function Accordion({ titleAccordion, answerAccordion }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  // fucus, handling Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setAccordionOpen(!accordionOpen);
    }
  };

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
        onKeyDown={handleKeyDown}
      >
        <span className="title-of-accordion">{titleAccordion}</span>
        <IconCircleX />
      </button>
      <div className={`div-text-inside ${accordionOpen ? "open" : "close"}`}>
        <div className="accordion-text-inside">{answerAccordion}</div>
      </div>
    </div>
  );
}
