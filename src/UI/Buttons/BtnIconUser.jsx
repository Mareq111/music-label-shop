/* eslint-disable react/prop-types */
import IconUser from "../Icons/IconUser";
import "./BtnIconUser.scss";
export default function BtnIconUser({ handleUserProfileClick }) {
  return (
    <button
      className="btn-icon-user"
      type="button"
      aria-label="go to User Profile"
      tabIndex={0}
      onClick={handleUserProfileClick}
      /* id="icon-user-text-div" */
    >
      <IconUser id="mobile-icon-user" />
      <IconUser id="desktop-icon-user" />
      <p className="p-icon-user-text">Hi! Log in</p>
    </button>
  );
}
