
import "./CardFooterSmall.scss";
import BadgeAnimatedStrimz from "../Badge/BadgeAnimatedStrimz";
import BtnGoToCategories from "../Buttons/BtnGoToCategories";
export default function CardFooterSmall() {
  return (
    <div className="card-footer-small">
      <BadgeAnimatedStrimz />
      <div className="footer-links-div-category">
        <h4 className="h-popular-categories">Popular categories</h4>
        <ul className="ul-list-of-pages">
          <li className="li-list-of-pages">
            <BtnGoToCategories
              categoryPath="albums"
              nameOfCategory={"Albums"}
            />
          </li>
          <li className="li-list-of-pages">
            <BtnGoToCategories
              categoryPath="tickets"
              nameOfCategory={"Tickets"}
            />
          </li>
          <li className="li-list-of-pages">
            <BtnGoToCategories
              categoryPath="t-shirts"
              nameOfCategory={"T-shirts"}
            />
          </li>
          <li className="li-list-of-pages">
            <BtnGoToCategories
              categoryPath="gadgets"
              nameOfCategory={"Gadgets"}
            />
          </li>
          <li className="li-list-of-pages">
            <BtnGoToCategories
              categoryPath="posters"
              nameOfCategory={"Posters"}
            />
          </li>
          <li className="li-list-of-pages">
            <BtnGoToCategories
              categoryPath="puzzled"
              nameOfCategory={"Puzzles"}
            />
          </li>
        </ul>
      </div>
      
      {/* <BadgeAllSocials/> */}
     {/*  <p className="text-rights-footer-card">
        © 2024 All Rights Reserved, Strimz Empire.
      </p> */}
    </div>
  );
}
