/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import BtnContinue from "../Buttons/BtnContinue";
import { Link } from "react-router-dom";
import "./CardProductHomepage.scss";

export default function CardProductHomepage({ data }) {
  const {
    title,
    headline,
    description,
    buttonText,
    link,
    backgroundColor,
    img,
  } = data;

  return (
    <section
      className="product-big-section-homepage"
      style={{ backgroundColor }}
    >
      <div className="big-card-homepage">
        {/*  <Link
          className="link-to-into-big-card-homepage-Text"
          to={link}
          aria-label={`Check out ${title} page`}
        > */}
        <h2 className="big-card-homepage-pre-head">{title}</h2>
        {/*  </Link> */}
        {/* together img and h for 660px+ */}
        <div className="row-for-img-h-card-homepage">
          <div className="big-card-homepage-div-img">
            <div className="big-card-homepage-img-shape">
              <img
                className="big-card-img"
                src={img}
                alt={`Go to ${title} page`}
              />
            </div>
          </div>

          <h3 className="big-card-homepage-h">{headline}</h3>
        </div>
        <p className="big-card-homepage-p">{description}</p>
        <div className="btn-center-big-card-homepage">
          <Link
            aria-label={`Go to ${title} page`}
            className="link-to-into-big-card-homepage"
            to={link}
          >
            <BtnContinue continueBtnText={buttonText} />
          </Link>
        </div>
      </div>
    </section>
  );
}
