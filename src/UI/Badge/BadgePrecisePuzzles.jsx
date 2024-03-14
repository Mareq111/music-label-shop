import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";
export default function BadgePrecisePuzzles() {
  return (
    <div>
      <ul className="ul-choose-precise-albums">
        <li className="list-choose-precise-albums">
          <BtnGoToCategories
            categoryPath="all-brain-games"
            nameOfCategory={"All brain games"}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="el-double-m-puzzles"
            nameOfCategory={"El Double M"}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="jackie-ras-puzzles"
            nameOfCategory={"Jackie Ras"}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="molly-granoli-puzzles"
            nameOfCategory={"Molly Granoli"}
          />
        </li>
      </ul>
    </div>
  );
}
