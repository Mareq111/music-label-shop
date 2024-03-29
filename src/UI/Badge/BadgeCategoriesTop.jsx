import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgeCategoriesTop.scss";

export default function BadgeCategoriesTop() {
  return (
    <div className="footer-links-div-category-top">
      {/* <h4 className="h-popular-categories">Categories</h4> */}
      <ul className="ul-list-of-pages-top">
        <li className="li-list-of-pages-top">
          <BtnGoToCategories categoryPath="albums" nameOfCategory={"Albums"} />
        </li>
        <li className="li-list-of-pages-top">
          <BtnGoToCategories
            categoryPath="tickets"
            nameOfCategory={"Tickets"}
          />
        </li>
        <li className="li-list-of-pages-top">
          <BtnGoToCategories
            categoryPath="t-shirts"
            nameOfCategory={"T-shirts"}
          />
        </li>
        <li className="li-list-of-pages-top">
          <BtnGoToCategories
            categoryPath="gadgets"
            nameOfCategory={"Gadgets"}
          />
        </li>
        <li className="li-list-of-pages-top">
          <BtnGoToCategories
            categoryPath="posters"
            nameOfCategory={"Posters"}
          />
        </li>
        <li className="li-list-of-pages-top">
          <BtnGoToCategories
            categoryPath="puzzles"
            nameOfCategory={"Puzzles"}
          />
        </li>
      </ul>
    </div>
  );
}
