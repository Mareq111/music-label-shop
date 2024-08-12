/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import IconNormalX from "../Icons/IconNormalX.jsx";
import "./BtnNormalX.scss";
export default function BtnNormalX({ onClick }) {
  return (
    <Link to=".." relative="path">
      <button title="Close" className="btn-normal-x" onClick={onClick}>
        <IconNormalX />
      </button>
    </Link>
  );
}
