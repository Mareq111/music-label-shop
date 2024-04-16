import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgeCategoriesWithH.scss";

export default function BadgeCategoriesWithH() {
  return (
    <div className="footer-links-div-category">
      <h4 className="h-popular-categories">Categories</h4>
      <ul className="ul-list-of-pages">
        <li className="li-list-of-pages">
          <BtnGoToCategories categoryPath="/albums/all-strimz-empire" nameOfCategory={"Albums"} />
        </li>
        <li className="li-list-of-pages">
          <BtnGoToCategories
            categoryPath="/tickets"
            nameOfCategory={"Tickets"}
          />
        </li>
        <li className="li-list-of-pages">
          <BtnGoToCategories
            categoryPath="/t-shirts"
            nameOfCategory={"T-shirts"}
          />
        </li>
        <li className="li-list-of-pages">
          <BtnGoToCategories
            categoryPath="/gadgets"
            nameOfCategory={"Gadgets"}
          />
        </li>
        <li className="li-list-of-pages">
          <BtnGoToCategories
            categoryPath="/posters"
            nameOfCategory={"Posters"}
          />
        </li>
        <li className="li-list-of-pages">
          <BtnGoToCategories
            categoryPath="/puzzles"
            nameOfCategory={"Puzzles"}
          />
        </li>
      </ul>
    </div>
  );
}
