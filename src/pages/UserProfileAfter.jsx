import { useDispatch } from "react-redux";
import { logout as logoutProfile } from "../store/userProfileSlice"; // Importuj akcję logout
import { logout as logoutAuth } from "../store/authSlice"; // Importuj akcję logout z authSlice
import { Link, useNavigate } from "react-router-dom";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import BtnOnUserProfile from "../UI/Buttons/BtnOnUserProfile";
import "./UserProfile.scss";

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

      <aside className="aside-user-profile">
        <BadgeTopOfAsideNav nameOfNavPage={"Profile"} showCloseButton={true} />
        <hr className="user-profile-devider-separator" />
        <div className="all-content-of-user-profile">
          <div className="content-empty-user-profile">AFTER</div>

          <Link to={"/logout"}>
            <BtnOnUserProfile
              text={"Log out"}
              ariaText={"Go to log out"}
              onClick={handleLogout}
            />
          </Link>
        </div>
      </aside>
    </>
  );
}
