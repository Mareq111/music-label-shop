import "./CardInfoHomepage.scss";
import setElDM from "../../assets/img/others/set-eldm.jpg";
import setElDMTWO from "../../assets/img/others/set2-eldm.jpg";
import BtnContinue from "../Buttons/BtnContinue";

export default function CardInfoHomepage() {
  return (
    <article className="card-info-homepage" tabIndex={0}>
      {/*  <div className="div-card-info-homepage">
        <h3 className="h-card-info-homepage">TEST INFO</h3>
      </div> */}
      <div className="div-card-info-homepage">
        <img src={setElDM} alt="" />
        {/*    <h3 className="h-card-info-homepage">TEST INFO</h3> */}
        <div className="wrap-btn-info-homepage">
          <BtnContinue continueBtnText={"View 3 Posters Set"} />
        </div>
      </div>
    </article>
  );
}
