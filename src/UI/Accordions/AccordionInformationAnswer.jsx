import React from "react";
import { Link } from "react-router-dom";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";
export default function AccordionInformationAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
      <Link className="link-footer-big-card-answer" to="contact">
          <BtnAccordionAnswerFooter label={"Contact"} />
        </Link>
      <Link className="link-footer-big-card-answer" to="about-us">
          <BtnAccordionAnswerFooter label={"About us"} />
        </Link>
        <Link className="link-footer-big-card-answer" to="faq">
          <BtnAccordionAnswerFooter label={"FAQ"} />
        </Link>
        <Link className="link-footer-big-card-answer" to="privacy-policy">
          <BtnAccordionAnswerFooter label={"Privacy policy"} />
        </Link>
      </ul>
    </div>
  );
}
