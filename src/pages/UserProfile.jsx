/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

/* import { useDispatch, useSelector } from "react-redux";
import { toggleUserProfileModal } from "../store/userProfileSlice";
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
 */

/* import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserProfileModal } from "../store/userProfileSlice";
import { useNavigate } from "react-router-dom";
import "./UserProfile.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";
import BtnOnUserProfile from "../UI/Buttons/BtnOnUserProfile.jsx";
import BadgeAnimatedStrimz from "../UI/Badge/BadgeAnimatedStrimz.jsx";

export default function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserProfileOpen = useSelector(
    (state) => state.userProfile.isUserProfileOpen
  );
  const modalRef = useRef(null);

  const handleSignInClick = () => {
    dispatch(toggleUserProfileModal());
    navigate("/login");
  };

  const handleRegisterClick = () => {
    dispatch(toggleUserProfileModal());
    navigate("/register");
  };

  const handleBackdropClick = () => {
    dispatch(toggleUserProfileModal());
  };

  // Trap focus inside modal when it's open
  useEffect(() => {
    if (isUserProfileOpen) {
      const focusableElements = modalRef.current.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            // Shift + Tab (backward)
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab (forward)
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      // Focus on the first focusable element when modal opens
      firstElement?.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isUserProfileOpen]);

  if (!isUserProfileOpen) return null;

  return (
    <>
      <div
        className="backdrop-user-profile"
        onClick={handleBackdropClick}
      ></div>

      <aside className="aside-user-profile" ref={modalRef}>
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
} */

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserProfileModal } from "../store/userProfileSlice";
import { useNavigate } from "react-router-dom";
import "./UserProfile.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";
import BtnOnUserProfile from "../UI/Buttons/BtnOnUserProfile.jsx";
import BadgeAnimatedStrimz from "../UI/Badge/BadgeAnimatedStrimz.jsx";

export default function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserProfileOpen = useSelector(
    (state) => state.userProfile.isUserProfileOpen
  );
  const modalRef = useRef(null); // Ref do modalu

  // Nawigacja do strony logowania
  const handleSignInClick = () => {
    dispatch(toggleUserProfileModal());
    navigate("/login");
  };

  // Nawigacja do strony rejestracji
  const handleRegisterClick = () => {
    dispatch(toggleUserProfileModal());
    navigate("/register");
  };

  // Zamknięcie modalu po kliknięciu w tło
  const handleBackdropClick = () => {
    dispatch(toggleUserProfileModal());
  };

  // Pułapka fokusowa w modalu
  useEffect(() => {
    if (isUserProfileOpen) {
      const focusableElements = modalRef.current.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            // Shift + Tab (wstecz)
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab (do przodu)
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      // Skieruj fokus na pierwszy element focusowalny po otwarciu modalu
      firstElement?.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isUserProfileOpen]);

  if (!isUserProfileOpen) return null;

  return (
    <>
      <div
        className="backdrop-user-profile"
        onClick={handleBackdropClick}
      ></div>

      <aside className="aside-user-profile" ref={modalRef}>
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
