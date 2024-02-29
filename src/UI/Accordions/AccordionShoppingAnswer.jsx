import React from "react";
import { Link } from "react-router-dom";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";

export default function AccordionShoppingAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        
        <Link className="link-footer-big-card-answer" to="return-policy">
          <BtnAccordionAnswerFooter label={"Return Policy"} />
        </Link>
        <Link className="link-footer-big-card-answer" to="delivery">
          <BtnAccordionAnswerFooter label={"Delivery"} />
        </Link>
        <Link className="link-footer-big-card-answer" to="payments">
          <BtnAccordionAnswerFooter label={"Payments"} />
        </Link>
      </ul>
    </div>
  );
}
