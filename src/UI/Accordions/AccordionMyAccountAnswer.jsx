import React from "react";
import { Link } from "react-router-dom";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";

export default function AccordionMyAccountAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        <Link className="link-footer-big-card-answer" to="log-in">
          <BtnAccordionAnswerFooter label={"Log in"} />
        </Link>
        <Link className="link-footer-big-card-answer" to="register">
          <BtnAccordionAnswerFooter label={"Register"} />
        </Link>
        <Link className="link-footer-big-card-answer" to="cart">
          <BtnAccordionAnswerFooter label={"Cart"} />
        </Link>
        <Link className="link-footer-big-card-answer" to="favorites">
          <BtnAccordionAnswerFooter label={"Favorites"} />
        </Link>
      </ul>
    </div>
  );
}
``;
