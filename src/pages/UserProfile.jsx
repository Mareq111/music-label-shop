/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useDispatch, useSelector } from "react-redux";
import { toggleUserProfileModal } from "../store/userProfileSlice"; // Import the toggleUserProfileModal action
import { useNavigate } from "react-router-dom";
import "./UserProfile.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";
import BtnOnUserProfile from "../UI/Buttons/BtnOnUserProfile.jsx";
import BadgeAnimatedStrimz from "../UI/Badge/BadgeAnimatedStrimz.jsx";

export default function UserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserProfileOpen = useSelector(
    (state) => state.userProfile.isUserProfileOpen
  );
  // Navigate to login page
  const handleSignInClick = () => {
    dispatch(toggleUserProfileModal());
    navigate("/login");
  };

  //Navigate to register page
  const handleRegisterClick = () => {
    dispatch(toggleUserProfileModal());
    navigate("/register"); //
  };

  // Close the modal when clicking outside the modal content
  const handleBackdropClick = () => {
    dispatch(toggleUserProfileModal());
  };

  if (!isUserProfileOpen) return null;

  return (
    <>
      <div
        className="backdrop-user-profile"
        onClick={handleBackdropClick}
      ></div>

      <aside className="aside-user-profile">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Profile"}
          showCloseButton={true}
          onClose={() => dispatch(toggleUserProfileModal())}
        />
        <hr className="user-profile-devider-separator" />
        <div className="all-content-of-user-profile">
          <div className="content-empty-user-profile">
            <div className="all-text-user-profile">
              <div id="log-in-userProfile" onClick={handleSignInClick}>
                <p className="p-text-user-profile">Are you already a member?</p>

                <BtnOnUserProfile
                  text={"Sign in"}
                  ariaText={"Go to log in page"}
                />
              </div>
              <div id="register-userProfile" onClick={handleRegisterClick}>
                <p className="p-text-user-profile">First time here?</p>

                <BtnOnUserProfile
                  text={"Join us"}
                  ariaText={"Go to register page"}
                />
              </div>
              <div className="badge-animated">
                <BadgeAnimatedStrimz />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
