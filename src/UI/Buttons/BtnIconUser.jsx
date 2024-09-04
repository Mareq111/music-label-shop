/* eslint-disable react/prop-types */
/* import IconUser from "../Icons/IconUser";
import "./BtnIconUser.scss";
export default function BtnIconUser({ handleUserProfileClick }) {
  return (
    <button
      className="btn-icon-user"
      type="button"
      aria-label="go to User Profile"
      tabIndex={0}
      onClick={handleUserProfileClick}
    
    >
      <IconUser id="mobile-icon-user" />
      <IconUser id="desktop-icon-user" />
      <p className="p-icon-user-text">Hi! Log in</p>
    </button>
  );
} */

/* import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import IconUser from "../Icons/IconUser";

import "./BtnIconUser.scss";
import IconUserAfter from "../Icons/IconUserAfter";

export default function BtnIconUser({ handleUserProfileClick }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Check if the user is authenticated

  return (
    <button
      className="btn-icon-user"
      type="button"
      aria-label="go to User Profile"
      tabIndex={0}
      onClick={handleUserProfileClick}
    >
      {/* Icon for logged-in users or not 
      {isAuthenticated ? (
        <>
          <IconUserAfter id="mobile-icon-user-after" />
          <IconUserAfter id="desktop-icon-user-after" />
          <p className="p-icon-user-text">You're Back!</p>
        </>
      ) : (
        <>
          <IconUser id="mobile-icon-user" /> <IconUser id="desktop-icon-user" />
          <p className="p-icon-user-text">Hi! Log in</p>
        </>
      )}
    </button>
  );
}
 */

import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import IconUser from "../Icons/IconUser";
import IconUserAfter from "../Icons/IconUserAfter";
import "./BtnIconUser.scss";

export default function BtnIconUser({ handleUserProfileClick }) {
  // Use useSelector to access the auth state from Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Log the authentication status for debugging
  console.log("isAuthenticated:", isAuthenticated);

  return (
    <button
      className="btn-icon-user"
      type="button"
      aria-label="go to User Profile"
      tabIndex={0}
      onClick={handleUserProfileClick}
    >
      {/* Display icons and text based on authentication status */}
      {isAuthenticated ? (
        <>
          <IconUserAfter id="mobile-icon-user-after" />
          <IconUserAfter id="desktop-icon-user-after" />
          <p className="p-icon-user-text">You're Back!</p>
        </>
      ) : (
        <>
          <IconUser id="mobile-icon-user" />
          <IconUser id="desktop-icon-user" />
          <p className="p-icon-user-text">Hi! Log in</p>
        </>
      )}
    </button>
  );
}
