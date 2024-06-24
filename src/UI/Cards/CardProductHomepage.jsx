/* eslint-disable react/no-unescaped-entities */
import arenaCover from "../../assets/img/coversMini/albums/arena_of_autumnn_EP-mini.jpg";
import BtnContinue from "../Buttons/BtnContinue";
import "./CardProductHomepage.scss";
export default function CardProductHomepage() {
  return (
    <div className="big-card-homepage">
      <h2 className="big-card-homepage-pre-head">Our albums collections</h2>
      <h3 className="big-card-homepage-h">Unleash the Music</h3>
      <p className="big-card-homepage-p">
        Dive into a world of sound with our complete album collection. From
        iconic classics to fresh new releases, there's a perfect tune for every
        listener. Click to explore and start your musical journey now!
      </p>
      <div className="btn-img-center-big-card-homepage">
        <BtnContinue continueBtnText={"Albums"} />

        <div className="big-card-homepage-div-img">
          <div className="big-card-homepage-img-shape">
            <img className="big-card-img" src={arenaCover} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
