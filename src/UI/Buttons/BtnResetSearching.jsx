// eslint-disable-next-line react/prop-types

import IconCircleX from "../Icons/IconCircleX";
import "./BtnResetSearching.scss";
export default function BtnResetSearching({ onClick }) {
  return (
    <button className="btn-reset-searching" onClick={onClick} type="button">
      <IconCircleX />
    </button>
  );
}
