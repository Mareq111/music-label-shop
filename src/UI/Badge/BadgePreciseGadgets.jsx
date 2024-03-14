import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";
export default function BadgePreciseGadgets() {
  return (
    <div>
      <ul className="ul-choose-precise-albums">
        <li className="list-choose-precise-albums">
          <BtnGoToCategories
            categoryPath="all-accessories"
            nameOfCategory={"All accessories"}
          />
        </li>
        <li className="list-choose-precise-albums">
          <BtnGoToCategories categoryPath="mugs" nameOfCategory={"Mugs"} />
        </li>
        <li className="list">
          <BtnGoToCategories categoryPath="bags" nameOfCategory={"Bags"} />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="stickers"
            nameOfCategory={"Stickers"}
          />
        </li>
      </ul>
    </div>
  );
}
