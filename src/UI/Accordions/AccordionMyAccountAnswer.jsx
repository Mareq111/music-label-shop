import React from "react";
import { Link } from "react-router-dom";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";

export default function AccordionMyAccountAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        <li>
          <Link
            role="button"
            aria-label="Go to log In page"
            className="link-footer-big-card-answer"
            to="log-in"
          >
            <BtnAccordionAnswerFooter label={"Log in"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to register page"
            className="link-footer-big-card-answer"
            to="register"
          >
            <BtnAccordionAnswerFooter label={"Register"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to cart page"
            className="link-footer-big-card-answer"
            to="cart"
          >
            <BtnAccordionAnswerFooter label={"Cart"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to favorites page"
            className="link-footer-big-card-answer"
            to="favorites"
          >
            <BtnAccordionAnswerFooter label={"Favorites"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
``;
