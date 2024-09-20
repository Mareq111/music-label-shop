
import "./BtnAccordionAnswerFooter.scss";
// eslint-disable-next-line react/prop-types
export default function BtnAccordionAnswerFooter({ label }) {
  return (
    <button tabIndex={0} className="btn-accordionAnswerFooter" aria-label={`Go to ${label}`}>
      {label}
    </button>
  );
}
