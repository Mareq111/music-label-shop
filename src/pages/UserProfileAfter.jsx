import { useDispatch } from "react-redux";
import { logout as logoutProfile } from "../store/userProfileSlice";
import { logout as logoutAuth } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";

import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import BtnOnUserProfile from "../UI/Buttons/BtnOnUserProfile";
import "./UserProfileAfter.scss";

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
