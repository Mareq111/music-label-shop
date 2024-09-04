import "./UserProfile.scss";

import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
export default function UserProfileAfter() {
  return (
    <>
      <div
        className="backdrop-user-profile"
        /*  onClick={} */
      ></div>

      {/* User Profile Sidebar */}
      <aside className="aside-user-profile">
        {/* Name of page with close button */}
        <BadgeTopOfAsideNav nameOfNavPage={"Profile"} showCloseButton={true} />
        <hr className="user-profile-devider-separator" />
        <div className="all-content-of-user-profile">
          <div className="content-empty-user-profile">AFTER</div>
        </div>
      </aside>
    </>
  );
}
