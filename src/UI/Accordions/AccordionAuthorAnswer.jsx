import BtnAccordionAnswerFooter from "../Buttons/BtnAccordionAnswerFooter";
import { Link } from "react-router-dom";
export default function AccordionAuthorAnswer() {
  return (
    <div className="accordion-footer-answer-div">
      <ul className="accordion-footer-answer-ul">
        <li>
          <Link
            role="button"
            aria-label="Go to about author page"
            className="link-footer-big-card-answer"
            to="about-author"
          >
            <BtnAccordionAnswerFooter label={"About author"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to project info page"
            className="link-footer-big-card-answer"
            to="project-info"
          >
            <BtnAccordionAnswerFooter label={"Project Info "} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to my socials page"
            className="link-footer-big-card-answer"
            to="my-socials"
          >
            <BtnAccordionAnswerFooter label={"My socials"} />
          </Link>
        </li>
        <li>
          <Link
            role="button"
            aria-label="Go to contact to me page"
            className="link-footer-big-card-answer"
            to="payments"
          >
            <BtnAccordionAnswerFooter label={"Contact to me"} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
