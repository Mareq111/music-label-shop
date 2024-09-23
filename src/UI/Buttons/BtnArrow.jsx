import IconArrow from "../Icons/IconArrow";
import "./BtnArrow.scss";

export default function BtnArrow() {
  return (
    <button tabIndex={0} className="btn-arrow" type="button" aria-label="Comeback icon">
      <IconArrow />
    </button>
  );
}
