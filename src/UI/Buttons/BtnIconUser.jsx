/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import IconUser from "../Icons/IconUser";
import IconUserAfter from "../Icons/IconUserAfter";
import "./BtnIconUser.scss";

export default function BtnIconUser({ handleUserProfileClick }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <button
      className="btn-icon-user"
      type="button"
      aria-label="go to User Profile"
      tabIndex={0}
      onClick={handleUserProfileClick}
    >
      {/* Display only one icon based on authentication status */}
      {isAuthenticated ? (
        <>
          <IconUserAfter id="icon-user-after" className="icon-user" />
          <p className="p-icon-user-text">You're Back!</p>
        </>
      ) : (
        <>
          <IconUser id="icon-user" className="icon-user" />
          <p className="p-icon-user-text">Hi! Log in</p>
        </>
      )}
    </button>
  );
}
