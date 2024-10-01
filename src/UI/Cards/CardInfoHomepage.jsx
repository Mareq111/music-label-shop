/* eslint-disable react/prop-types */
import "./CardInfoHomepage.scss";

import BtnContinue from "../Buttons/BtnContinue";
import { Link } from "react-router-dom";

export default function CardInfoHomepage({ imgSrc, buttonText, dynamicLink }) {
  return (
    <article className="card-info-homepage" tabIndex={0}>
      <div className="div-card-info-homepage">
        <img src={imgSrc} alt="Posters Set" />

        <div className="wrap-btn-info-homepage">
          {/* change link for sets */}
          <Link to={dynamicLink} className="link-focus-btn-card">
            <BtnContinue continueBtnText={buttonText} />
          </Link>
        </div>
      </div>
    </article>
  );
}
