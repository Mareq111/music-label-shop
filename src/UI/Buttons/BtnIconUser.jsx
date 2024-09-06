/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* 
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
 */

/* import { useSelector } from "react-redux";
import IconUser from "../Icons/IconUser";
import IconUserAfter from "../Icons/IconUserAfter";
import "./BtnIconUser.scss";
import { useNavigate } from "react-router-dom";

export default function BtnIconUser({ handleUserProfileClick }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate("/user-profile-after");
    } else {
      navigate("/user-page");
    }
    handleUserProfileClick();
  };
  return (
    <button
      className="btn-icon-user"
      type="button"
      aria-label="go to User Profile"
      tabIndex={0}
      onClick={handleClick}
    >
   
      {isAuthenticated ? (
        <>
          <IconUserAfter
            id="mobile-icon-user-after"
            className="icon-user mobile"
          />
          <IconUserAfter
            id="desktop-icon-user-after"
            className="icon-user desktop"
          />
          <p className="p-icon-user-text">You're Back!</p>
        </>
      ) : (
        <>
          <IconUser id="mobile-icon-user" className="icon-user mobile" />
          <IconUser id="desktop-icon-user" className="icon-user desktop" />
          <p className="p-icon-user-text">Hi! Log in</p>
        </>
      )}
    </button>
  );
}
 */


import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconUser from "../Icons/IconUser";
import IconUserAfter from "../Icons/IconUserAfter";
import "./BtnIconUser.scss";
import { toggleUserProfileModal, setProfileView } from "../../store/userProfileSlice";

export default function BtnIconUser() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    // Set the correct profile view based on authentication status
    if (isAuthenticated) {
      dispatch(setProfileView("after-login"));
      navigate("/user-profile-after");
    } else {
      dispatch(setProfileView("login"));
      navigate("/user-profile");
    }
    // Toggle modal visibility
    dispatch(toggleUserProfileModal());
  };

  return (
    <button
      className="btn-icon-user"
      type="button"
      aria-label="go to User Profile"
      tabIndex={0}
      onClick={handleClick}
    >
      {isAuthenticated ? (
        <>
          <IconUserAfter
            id="mobile-icon-user-after"
            className="icon-user mobile"
          />
          <IconUserAfter
            id="desktop-icon-user-after"
            className="icon-user desktop"
          />
          <p className="p-icon-user-text">You're Back!</p>
        </>
      ) : (
        <>
          <IconUser id="mobile-icon-user" className="icon-user mobile" />
          <IconUser id="desktop-icon-user" className="icon-user desktop" />
          <p className="p-icon-user-text">Hi! Log in</p>
        </>
      )}
    </button>
  );
}
