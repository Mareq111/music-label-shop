import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";
export default function BadgePreciseTickets() {
  return (
    <div>
      <ul className="ul-choose-precise-albums">
        <li className="list-choose-precise-albums">
          <BtnGoToCategories
            categoryPath="all-locations"
            nameOfCategory={"All clothes"}
          />
        </li>
        <li className="list-choose-precise-albums">
          <BtnGoToCategories categoryPath="woman" nameOfCategory={"Woman"} />
        </li>
        <li className="list">
          <BtnGoToCategories categoryPath="men" nameOfCategory={"Men"} />
        </li>
        <li className="list">
          <BtnGoToCategories categoryPath="kids" nameOfCategory={"Kids"} />
        </li>
      </ul>
    </div>
  );
}
