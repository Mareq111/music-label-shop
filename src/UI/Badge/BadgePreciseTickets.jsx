import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";
export default function BadgePreciseTickets() {
  return (
    <div>
      <ul className="ul-choose-precise-albums">
      <li className="list-choose-precise-albums">
          <BtnGoToCategories categoryPath="all-locations" nameOfCategory={"All Locations"} />
        </li>
        <li className="list-choose-precise-albums">
          <BtnGoToCategories categoryPath="poland" nameOfCategory={"Poland"} />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="czechia"
            nameOfCategory={"Czechia"}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="austria"
            nameOfCategory={"Austria"}
          />
        </li>
        <li className="list">
          <BtnGoToCategories categoryPath="italy" nameOfCategory={"Italy"} />
        </li>
      </ul>
    </div>
  );
}
