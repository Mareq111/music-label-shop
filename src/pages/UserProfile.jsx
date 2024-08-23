/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useDispatch, useSelector } from "react-redux";
import { toggleUserProfileModal } from "../store/userProfileSlice"; // Import the toggleUserProfileModal action
import { useNavigate } from "react-router-dom";
import "./UserProfile.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";

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

      {/* User Profile Sidebar */}
      <aside className="aside-user-profile">
        {/* Name of page with close button */}
        <BadgeTopOfAsideNav
          nameOfNavPage={"Profile"}
          showCloseButton={true}
          onClose={() => dispatch(toggleUserProfileModal())}
        />
        <hr className="user-profile-devider-separator" />
        <div className="all-content-of-user-profile">
          <div className="content-empty-user-profile">
            <div className="all-text-user-profile">
              <div id="log-in" onClick={handleSignInClick}>
                <p className="p-text-user-profile">Are you already a member?</p>
                <h3 className="h-user-profile">Sign in</h3>
              </div>
              <div id="register" onClick={handleRegisterClick}>
                <p className="p-text-user-profile">First time here?</p>
                <h3 className="h-user-profile">Join Us</h3>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
