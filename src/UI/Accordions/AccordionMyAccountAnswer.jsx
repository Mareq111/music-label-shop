import { Link } from "react-router-dom";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";

export default function AccordionMyAccountAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        <li>
          <Link
            
            aria-label="Go to log In page"
            className="link-footer-big-card-answer"
            to="/login"
          >
            <BtnAccordionAnswerFooter label={"Log in"} />
          </Link>
        </li>
        <li>
          <Link
        
            aria-label="Go to register page"
            className="link-footer-big-card-answer"
            to="/register"
          >
            <BtnAccordionAnswerFooter label={"Register"} />
          </Link>
        </li>
        <li>
          <Link
           
            aria-label="Go to purchase history page"
            className="link-footer-big-card-answer"
            to="/purchase-history"
          >
            <BtnAccordionAnswerFooter label={"Purchase History"} />
          </Link>
        </li>
        <li>
          <Link
         
            aria-label="Go to my coupons page"
            className="link-footer-big-card-answer"
            to="/my-coupons"
          >
            <BtnAccordionAnswerFooter label={"My Coupons"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
``;
