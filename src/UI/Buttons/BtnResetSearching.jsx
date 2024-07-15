/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

/* import IconCircleX from "../Icons/IconCircleX";
import "./BtnResetSearching.scss";
export default function BtnResetSearching({ handleBtnReset }) {


  return (
    <button className="btn-reset-searching" onClick={handleBtnReset} type="button">
      <IconCircleX />
    </button>
  );
}
  */
import IconCircleX from "../Icons/IconCircleX";
import "./BtnResetSearching.scss";

export default function BtnResetSearching({ handleBtnReset }) {
  return (
    <button
      className="btn-reset-searching"
      onClick={handleBtnReset}
      type="button"
    >
      <IconCircleX />
    </button>
  );
}
