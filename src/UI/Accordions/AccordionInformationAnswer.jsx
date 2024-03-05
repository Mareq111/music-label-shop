import React from "react";
import { Link } from "react-router-dom";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";
export default function AccordionInformationAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        <li>
          <Link
            role="button"
            aria-label="Go to Contact page"
            className="link-footer-big-card-answer"
            to="contact"
          >
            <BtnAccordionAnswerFooter label={"Contact"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to About Us page"
            className="link-footer-big-card-answer"
            to="about-us"
          >
            <BtnAccordionAnswerFooter label={"About us"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to FAQ page"
            className="link-footer-big-card-answer"
            to="faq"
          >
            <BtnAccordionAnswerFooter label={"FAQ"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to Privacy policy page"
            className="link-footer-big-card-answer"
            to="privacy-policy"
          >
            <BtnAccordionAnswerFooter label={"Privacy policy"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
