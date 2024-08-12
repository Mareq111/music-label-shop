/* eslint-disable react/no-unescaped-entities */
/* import "./UserProfile.scss";

import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";
export default function UserPage() {
  return (
    <aside className="aside-user-profile">
      {/* bagde with name of page and x to return 
      <BadgeTopOfAsideNav nameOfNavPage={"Profile"} showCloseButton={true} />
      <hr className="user-profile-devider-separator" />
      <div className="all-content-of-user-profile">
        <div className="content-empty-user-profile">
          <div className="all-text-user-profile">
            {/* log in *
            <div id="log-in">
              <p className="p-text-user-profile">Are you already a member?</p>
              <h3 className="h-user-profile">Sign in</h3>
            </div>
            {/* register }
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
 */
/* 
import "./UserProfile.scss";
import ReactDOM from "react-dom";

import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";

export default function UserPage({ onClose }) {
  return ReactDOM.createPortal(
    <aside className="aside-user-profile">
      <BadgeTopOfAsideNav nameOfNavPage={"Profile"} showCloseButton={true} />
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
      
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </aside>,
    document.body 
  );
} */

/*   import "./UserProfile.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";

export default function UserPage({ onClose }) {
  return (
    <aside className="aside-user-profile">
      {/* Badge with name of page and 'X' to close 
      <BadgeTopOfAsideNav nameOfNavPage={"Profile"} showCloseButton={true} onClose={onClose} />
      <hr className="user-profile-devider-separator" />
      <div className="all-content-of-user-profile">
        <div className="content-empty-user-profile">
          <div className="all-text-user-profile">
            {/* Log in section 
            <div id="log-in">
              <p className="p-text-user-profile">Are you already a member?</p>
              <h3 className="h-user-profile">Sign in</h3>
            </div>
            {/* Register section 
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
 */

import "./UserProfile.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav.jsx";

export default function UserPage({ onClose }) {
  return (
    <aside className="aside-user-profile">
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
