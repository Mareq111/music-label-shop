
import "./BtnAccordionAnswerFooter.scss";
// eslint-disable-next-line react/prop-types
export default function BtnAccordionAnswerFooter({ label }) {
  return (
    <button className="btn-accordionAnswerFooter" aria-label={`Go to ${label}`}>
      {label}
    </button>
  );
}
