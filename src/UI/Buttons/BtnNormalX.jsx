import { Link } from "react-router-dom";
import IconNormalX from "../Icons/IconNormalX.jsx";
import "./BtnNormalX.scss";
export default function BtnNormalX() {
  return (
    <Link to='..' relative="path">
    <button title="Close" className="btn-normal-x">
     <IconNormalX />
    </button>
    </Link>
  );
}
