
import { Link } from "react-router-dom";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";

export default function AccordionShoppingAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        <li>
          <Link
            role="button"
            aria-label="Go to return policy page"
            className="link-footer-big-card-answer"
            to="return-policy"
          >
            <BtnAccordionAnswerFooter label={"Return Policy"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to delivery page"
            className="link-footer-big-card-answer"
            to="delivery"
          >
            <BtnAccordionAnswerFooter label={"Delivery"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to payments page"
            className="link-footer-big-card-answer"
            to="payments"
          >
            <BtnAccordionAnswerFooter label={"Payments"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
