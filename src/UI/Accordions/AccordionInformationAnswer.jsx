import { Link } from "react-router-dom";
import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";

export default function AccordionInformationAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        <li>
          <Link
            aria-label="Go to Contact section into information page"
            className="link-footer-big-card-answer"
            to="/information#information-contact"
          >
            <BtnAccordionAnswerFooter label={"Contact"} />
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to About Us section into information page"
            className="link-footer-big-card-answer"
            to="/information#information-about-us"
          >
            <BtnAccordionAnswerFooter label={"About Us"} />
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to FAQ section into information page"
            className="link-footer-big-card-answer"
            to="/information#information-faq"
          >
            <BtnAccordionAnswerFooter label={"FAQ"} />
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to Privacy policy section into information page"
            className="link-footer-big-card-answer"
            to="/information#information-privacy-policy"
          >
            <BtnAccordionAnswerFooter label={"Privacy Policy"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
