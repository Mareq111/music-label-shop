/* eslint-disable react/prop-types */
import "./BtnContinue.scss";

export default function BtnContinue({ continueBtnText, onClick }) {
  return (
    <button
      className="btnContinue"
      type="button"
      onClick={onClick}
      tabIndex={0}
    >
      {continueBtnText}
    </button>
  );
}
