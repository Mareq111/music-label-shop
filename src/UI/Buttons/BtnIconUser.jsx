/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconUser from "../Icons/IconUser";
import IconUserAfter from "../Icons/IconUserAfter";
import "./BtnIconUser.scss";
import {
  toggleUserProfileModal,
  setProfileView,
} from "../../store/userProfileSlice";

export default function BtnIconUser() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //checking if user is logged or not
  const handleClick = () => {
    if (isAuthenticated) {
      dispatch(setProfileView("after-login"));
      navigate("/user-profile-after");
    } else {
      dispatch(setProfileView("login"));
      dispatch(toggleUserProfileModal());
      navigate("/user-profile");
    }
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
          {/* <IconUserAfter
            id="mobile-icon-user-after"
            className="icon-user mobile"
          /> */}
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
