/* eslint-disable react/prop-types */
import "./BtnContinue.scss";
export default function BtnContinue({ continueBtnText }) {
  return (
    <button className="btnContinue" type="button">
      {continueBtnText}
    </button>
  );
}
