import IconLogoYoutube from "../Icons/Icon-Logo/IconLogoYoutube";
import IconLogoTikTok from "../Icons/Icon-Logo/IconLogoTikTok";
import IconLogoFacebook from "../Icons/Icon-Logo/IconLogoFacebook";
import IconLogoInstagram from "../Icons/Icon-Logo/IconLogoInstagram";
import "./BadgeAllSocials.scss";
import { Link } from "react-router-dom";
export default function BadgeAllSocials() {
  return (
    <section className="badgeAllSocials-all">
      <button className="badgeAllSocials-div">
        <Link
          className="focus-link-icon"
          to={"https://www.facebook.com/"}
          title="Go to Facebook"
        >
          <div className="wrapper-div-two-icons">
            <span className="first-logo">
              <IconLogoFacebook />
            </span>
            <span className="second-logo">
              <IconLogoFacebook />
            </span>
          </div>
        </Link>
        <Link
          className="focus-link-icon"
          title="Go to Instagram"
          to={"https://www.instagram.com/"}
        >
          <button className="wrapper-div-two-icons">
            <span className="first-logo">
              <IconLogoInstagram />
            </span>
            <span className="second-logo">
              <IconLogoInstagram />
            </span>
          </button>
        </Link>
        <Link
          className="focus-link-icon"
          title="Go to Youtube"
          to={"https://www.youtube.com/"}
        >
          <button className="wrapper-div-two-icons">
            <span className="first-logo">
              <IconLogoYoutube />
            </span>
            <span className="second-logo">
              <IconLogoYoutube />
            </span>
          </button>
        </Link>
        <Link
          className="focus-link-icon"
          title="Go to Tik Tok"
          to={"https://www.tiktok.com/"}
        >
          <button className="wrapper-div-two-icons">
            <span className="first-logo">
              <IconLogoTikTok />
            </span>
            <span className="second-logo">
              <IconLogoTikTok />
            </span>
          </button>
        </Link>
      </button>
    </section>
  );
}
