/* import { useDispatch } from "react-redux";
import { logout as logoutProfile } from "../store/userProfileSlice";
import { logout as logoutAuth } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";

import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import BtnOnUserProfile from "../UI/Buttons/BtnOnUserProfile";
import "./UserProfileAfter.scss";
import BtnAccordionAnswerFooter from "../UI/Buttons/BtnAccordionAnswerFooter";

export default function UserProfileAfter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutProfile());

    dispatch(logoutAuth());

    navigate("/logout");
  };

  return (
    <>
      <div className="backdrop-user-profile"></div>

      <aside className="aside-user-profile-after">
        <BadgeTopOfAsideNav nameOfNavPage={"Profile"} showCloseButton={true} />
        <hr className="user-profile-devider-separator" />
        <div className="all-content-of-user-profile-after">
          <div className="content-empty-user-profile">
            <ul className="accordion-footer-answer-ul">
              <li>
                <Link
                  role="button"
                  aria-label="Go to purchase history page"
                  className="link-footer-big-card-answer"
                  to="/purchase-history"
                >
                  <BtnAccordionAnswerFooter label={"Purchase History"} />
                </Link>
              </li>
              <li>
                <Link
                  role="button"
                  aria-label="Go to my coupons page"
                  className="link-footer-big-card-answer"
                  to="/my-coupons"
                >
                  <BtnAccordionAnswerFooter label={"My Coupons"} />
                </Link>
              </li>
            </ul>
            <div id="log-in-userProfile-after">
              <p className="p-text-user-profile-after">Ready to leave?</p>

              <Link to={"/logout"}>
                <BtnOnUserProfile
                  text={"Log out"}
                  ariaText={"Go to log out"}
                  onClick={handleLogout}
                />
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
} */
  import { useEffect, useRef } from "react";
  import { useDispatch } from "react-redux";
  import { logout as logoutProfile } from "../store/userProfileSlice";
  import { logout as logoutAuth } from "../store/authSlice";
  import { Link, useNavigate } from "react-router-dom";
  import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
  import BtnOnUserProfile from "../UI/Buttons/BtnOnUserProfile";
  import "./UserProfileAfter.scss";
  import BtnAccordionAnswerFooter from "../UI/Buttons/BtnAccordionAnswerFooter";
  
  export default function UserProfileAfter() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const modalRef = useRef(null);
  
    const handleLogout = () => {
      dispatch(logoutProfile());
      dispatch(logoutAuth());
      navigate("/logout");
    };
  
    const handleBackdropClick = () => {
      // Assuming you want to close the modal if the backdrop is clicked.
      // This should be handled by a function if the modal close logic is implemented.
    };
  
    useEffect(() => {
      if (modalRef.current) {
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
        firstElement?.focus();
  
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }
    }, []);
  
    return (
      <>
        <div
          className="backdrop-user-profile"
          onClick={handleBackdropClick}
        ></div>
  
        <aside className="aside-user-profile-after" ref={modalRef}>
          <BadgeTopOfAsideNav nameOfNavPage={"Profile"} showCloseButton={true} linkTo={'/..'} />
          <hr className="user-profile-devider-separator" />
          <div className="all-content-of-user-profile-after">
            <div className="content-empty-user-profile">
              <ul className="accordion-footer-answer-ul">
                <li>
                  <Link
                    role="button"
                    aria-label="Go to purchase history page"
                    className="link-footer-big-card-answer"
                    to="/purchase-history"
                  >
                    <BtnAccordionAnswerFooter label={"Purchase History"} />
                  </Link>
                </li>
                <li>
                  <Link
                    role="button"
                    aria-label="Go to my coupons page"
                    className="link-footer-big-card-answer"
                    to="/my-coupons"
                  >
                    <BtnAccordionAnswerFooter label={"My Coupons"} />
                  </Link>
                </li>
              </ul>
              <div id="log-in-userProfile-after">
                <p className="p-text-user-profile-after">Ready to leave?</p>
  
               <Link to={"/logout"}> 
                  <BtnOnUserProfile
                    text={"Log out"}
                    ariaText={"Go to log out"}
                    onClick={handleLogout}
                  />
               </Link>
              </div>
            </div>
          </div>
        </aside>
      </>
    );
  }
  