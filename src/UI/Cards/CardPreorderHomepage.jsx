/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BtnContinue from "../Buttons/BtnContinue";
import "./CardPreorderHomepage.scss";

// eslint-disable-next-line react/prop-types
export default function CardPreorderpreorder({
  hPreorder,
  preHead,
  srcImg,
  imgAlt,
  dynamicLink,
  dynamicTextBtn,
}) {
  return (
    <section className="product-big-section-preorder">
      <div className="big-card-preorder">
        <h2 className="big-card-preorder-pre-head">{preHead}</h2>

        {/* together img and h for 660px+ */}
        <div className="row-for-img-h-card-preorder">
          <div className="big-card-preorder-div-img">
            <div className="big-card-preorder-img-shape">
              <img className="big-card-img" src={srcImg} alt={imgAlt} />
            </div>
          </div>

          <h3 className="big-card-preorder-h">{hPreorder}</h3>
        </div>
        <div className="btn-center-big-card-preorder">
          <Link
            aria-label={`Go to Pre Order page`}
            className="link-to-into-big-card-preorder link-focus-btn-card"
            to={dynamicLink}
          >
            <BtnContinue continueBtnText={dynamicTextBtn} />
          </Link>
        </div>
      </div>
    </section>
  );
}
