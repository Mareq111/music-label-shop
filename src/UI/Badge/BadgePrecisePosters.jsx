import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";
export default function BadgePrecisePosters() {
  return (
    <div>
      <ul className="ul-choose-precise-albums">
        <li className="list-choose-precise-albums">
          <BtnGoToCategories
            categoryPath="all-prints"
            nameOfCategory={"All prints"}
          />
        </li>
        <li className="list-choose-precise-albums">
          <BtnGoToCategories categoryPath="el-double-m-posters" nameOfCategory={"El Double M"} />
        </li>
        <li className="list">
          <BtnGoToCategories categoryPath="jackie-ras-posters" nameOfCategory={"Jackie Ras"} />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="molly-granoli-posters"
            nameOfCategory={"Molly Granoli"}
          />
        </li>
      </ul>
    </div>
  );
}
