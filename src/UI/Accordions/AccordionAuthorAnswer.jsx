import React from "react";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";
import { Link } from "react-router-dom";
export default function AccordionAuthorAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        <Link className="link-footer-big-card-answer" to="about-author">
          <BtnAccordionAnswerFooter label={"About author"} />
        </Link>
        <Link className="link-footer-big-card-answer" to="project-description">
          <BtnAccordionAnswerFooter label={"Project Description "} />
        </Link>
        <Link className="link-footer-big-card-answer" to="my-socials">
          <BtnAccordionAnswerFooter label={"My socials"} />
        </Link>
        <Link className="link-footer-big-card-answer" to="payments">
          <BtnAccordionAnswerFooter label={"Contact to me"} />
        </Link>
      </ul>
    </div>
  );
}
