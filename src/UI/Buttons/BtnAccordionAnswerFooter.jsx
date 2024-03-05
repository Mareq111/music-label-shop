import React from "react";
import "./BtnAccordionAnswerFooter.scss";
export default function BtnAccordionAnswerFooter({ label }) {
  return (
    <button className="btn-accordionAnswerFooter" aria-label={`Go to ${label}`}>
      {label}
    </button>
  );
}
