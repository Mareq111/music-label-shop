
import { useParams, Link } from "react-router-dom";
import BtnArrow from "../Buttons/BtnArrow.jsx";
import "./BadgeIdAndArrowBack.scss";
export default function BadgeIdAndArrowBack() {
  const params = useParams();
  return (
    <div>
      <div className="badge-id-and-arrow-back">
        <div className="div-id-and-text">
          <p className="text-id">Product ID: {params.productId}</p>
        </div>
        <div className="div-link-btn-comeback">
          <Link className="link-arrow-back" to=".." relative="path">
            <BtnArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}
