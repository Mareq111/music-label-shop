import { Link } from "react-router-dom";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";

export default function AccordionShoppingAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        <li>
          <Link
          
            aria-label="Go to return policy page"
            className="link-footer-big-card-answer"
            to="/shopping#return-policy"
          >
            <BtnAccordionAnswerFooter label={"Return Policy"} />
          </Link>
        </li>
        <li>
          <Link
           
            aria-label="Go to delivery page"
            className="link-footer-big-card-answer"
            to="/shopping#delivery"
          >
            <BtnAccordionAnswerFooter label={"Delivery"} />
          </Link>
        </li>
        <li>
          <Link
            
            aria-label="Go to payments page"
            className="link-footer-big-card-answer"
            to="/shopping#payments"
          >
            <BtnAccordionAnswerFooter label={"Payments"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
