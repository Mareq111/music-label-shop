/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* import ourCDS from "../../assets/img/others/our-shop-cds.jpg";
import BtnContinue from "../Buttons/BtnContinue";
import { Link } from "react-router-dom";
import "./CardProductHomepage.scss";
export default function CardProductHomepage() {
  return (
    <section className="product-big-section-homepage">
      <div className="big-card-homepage">
        <h2 className="big-card-homepage-pre-head">Our albums collections</h2>
        together img and h for 660px+ 
        <div className="row-for-img-h-card-homepage">
          <div className="big-card-homepage-div-img">
            <div className="big-card-homepage-img-shape">
              <img
                className="big-card-img"
                src={ourCDS}
                alt="albums collection"
              />
            </div>
          </div>

          <h3 className="big-card-homepage-h">Unleash the Music.</h3>
        </div>
        <p className="big-card-homepage-p">
          Dive into a world of sound with our complete album collection. From
          iconic classics to fresh new releases, there's a perfect tune for
          every listener. Click to explore and start your musical journey now!
        </p>
        <div className="btn-img-center-big-card-homepage">
          <Link
            className="link-to-into-big-card-homepage"
            to={"/albums/all-strimz-empire"}
          >
            <BtnContinue continueBtnText={"Albums"} />
          </Link>
        </div>
      </div>
    </section>
  );
} */

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
        <Link
          className="link-to-into-big-card-homepage-Text"
          to={link}
          aria-label={`Check out ${title} page`}
        >
          <h2 className="big-card-homepage-pre-head">{title}</h2>
        </Link>
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
          <Link
            aria-label={`Check out ${title} page`}
            className="link-to-into-big-card-homepage-Text"
            to={link}
          >
            <h3 className="big-card-homepage-h">{headline}</h3>
          </Link>
        </div>
        <p className="big-card-homepage-p">{description}</p>
        <div className="btn-img-center-big-card-homepage">
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
