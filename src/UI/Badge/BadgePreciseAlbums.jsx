import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";
export default function BadgePreciseAlbums() {
  return (
    <div>
      <ul className="ul-choose-precise-albums">
        <li className="list-choose-precise-albums">
          <BtnGoToCategories
            categoryPath="all"
            nameOfCategory={"All Strimz Empire"}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="el-double-m"
            nameOfCategory={"El Double M"}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="jackie-ras"
            nameOfCategory={"Jackie Ras"}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="molly-granoli"
            nameOfCategory={"Molly Granoli"}
          />
        </li>
      </ul>
    </div>
  );
}
