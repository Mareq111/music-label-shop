import { Link } from "react-router-dom";
import BtnContinue from "../Buttons/BtnContinue";
import "./CardPreorderHomepage.scss";

import preorderAlbum from "../../assets/img/coversMini/albums/red-path-to-zukunft-mini.jpg";
export default function CardPreorderpreorder() {
  return (
    <section className="product-big-section-preorder">
      <div className="big-card-preorder">
        <h2 className="big-card-preorder-pre-head">
          Red Path to Zukunft by El DM - Coming Soon in 2025
        </h2>

        {/* together img and h for 660px+ */}
        <div className="row-for-img-h-card-preorder">
          <div className="big-card-preorder-div-img">
            <div className="big-card-preorder-img-shape">
              <img
                className="big-card-img"
                src={preorderAlbum}
                alt={`Go to Pre Order page`}
              />
            </div>
          </div>

          <h3 className="big-card-preorder-h">Upcoming Album.</h3>
        </div>
        <div className="btn-center-big-card-preorder">
          <Link
            aria-label={`Go to Pre Order page`}
            className="link-to-into-big-card-preorder link-focus-btn-card"
            to="/albumRedPathToZukunft"
          >
            <BtnContinue continueBtnText="Preorder" />
          </Link>
        </div>
      </div>
    </section>
  );
}
