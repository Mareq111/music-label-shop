/* eslint-disable react/prop-types */
import "./BtnOnUserProfile.scss";

export default function BtnOnUserProfile({ text, ariaText }) {
  return (
    <button
      className="btn-into-user-profile"
      type="button"
      aria-label={ariaText}
      tabIndex={0}
    >
      <h3 className="h-user-profile">{text}</h3>
    </button>
  );
}
