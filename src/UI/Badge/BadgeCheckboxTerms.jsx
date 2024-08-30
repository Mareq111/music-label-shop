import { Link } from "react-router-dom";
import InputCheckboxRegister from "../Inputs/InputCheckboxRegister";
import "./BadgeCheckboxTerms.scss";
export default function BadgeCheckboxTerms() {
  return (
    <div className="badge-checkbox-container">
      <InputCheckboxRegister />
      <p className="p-text-terms">
        I have read and accept the{" "}
        <Link target="_blank" to={"/terms"} aria-label="go to terms">
          <span className="span-text-link">Terms and Conditions</span>
        </Link>{" "}
        of the online store, including the data protection rules contained
        therein.*.
      </p>
    </div>
  );
}
