/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import "./UserProfile.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";

export default function UserPage({ onClose }) {
  return (
    <aside className="aside-user-profile">
      {/* name of page with x -close btn  */}
      <BadgeTopOfAsideNav
        nameOfNavPage={"Profile"}
        showCloseButton={true}
        onClose={onClose}
      />
      <hr className="user-profile-devider-separator" />
      <div className="all-content-of-user-profile">
        <div className="content-empty-user-profile">
          <div className="all-text-user-profile">
            <div id="log-in">
              <p className="p-text-user-profile">Are you already a member?</p>
              <h3 className="h-user-profile">Sign in</h3>
            </div>
            <div id="register">
              <p className="p-text-user-profile">First time here?</p>

              <h3 className="h-user-profile">Join Us</h3>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
