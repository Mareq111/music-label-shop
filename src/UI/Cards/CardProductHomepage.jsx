/* eslint-disable react/no-unescaped-entities */
import ourCDS from "../../assets/img/others/our-shop-cds.jpg";
import BtnContinue from "../Buttons/BtnContinue";
import { Link } from "react-router-dom";
import "./CardProductHomepage.scss";
export default function CardProductHomepage() {
  return (
    <div className="big-card-homepage">
      <h2 className="big-card-homepage-pre-head">Our albums collections</h2>
      <div className="big-card-homepage-div-img">
          <div className="big-card-homepage-img-shape">
            <img className="big-card-img" src={ourCDS} alt="" />
          </div>
        </div>
      <h3 className="big-card-homepage-h">Unleash the Music.</h3>
      
      <p className="big-card-homepage-p">
        Dive into a world of sound with our complete album collection. From
        iconic classics to fresh new releases, there's a perfect tune for every
        listener. Click to explore and start your musical journey now!
      </p>
      <div className="btn-img-center-big-card-homepage">
        <Link className="link-to-into-big-card-homepage" to={"/albums/all-strimz-empire"}>
        <BtnContinue continueBtnText={"Albums"} />
        </Link>
        {/* <div className="big-card-homepage-div-img">
          <div className="big-card-homepage-img-shape">
            <img className="big-card-img" src={ourCDS} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
