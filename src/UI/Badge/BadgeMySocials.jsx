import IconLogoInstagram from "../Icons/Icon-Logo/IconLogoInstagram";
import "./BadgeAllSocials.scss";
import { Link } from "react-router-dom";
import IconLogoGithub from "../Icons/Icon-Logo/IconLogoGithub";
import IconLogoLinkedin from "../Icons/Icon-Logo/IconLogoLinkedin";
export default function BadgeMySocials() {
  return (
    <section className="badgeAllSocials-all">
      <div className="badgeAllSocials-div">
        <Link to={"https://github.com/Mareq111"} title="Go to my Github">
          <div className="wrapper-div-two-icons">
            <span className="first-logo">
              <IconLogoGithub />
            </span>
            <span className="second-logo">
              <IconLogoGithub />
            </span>
          </div>
        </Link>
        <Link
          title="Go to my Linkedin"
          to={"https://www.linkedin.com/in/marek-szulc-156307247/"}
        >
          <div className="wrapper-div-two-icons">
            <span className="first-logo">
              <IconLogoLinkedin />
            </span>
            <span className="second-logo">
              <IconLogoLinkedin />
            </span>
          </div>
        </Link>
        <Link
          title="Go to my Instagram"
          to={"https://www.instagram.com/mrq_szulc/"}
        >
          <div className="wrapper-div-two-icons">
            <span className="first-logo">
              <IconLogoInstagram />
            </span>
            <span className="second-logo">
              <IconLogoInstagram />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
