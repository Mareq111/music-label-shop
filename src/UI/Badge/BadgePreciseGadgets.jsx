/* eslint-disable react/prop-types */
import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";

export default function BadgePreciseGadgets({ onArtistSelect }) {
  const handleArtistClick = (artistName) => {
    if (onArtistSelect) {
      onArtistSelect(artistName);
    }
  };

  return (
    <div>
      <ul className="ul-choose-precise">
        <li className="list-choose-precise">
          <BtnGoToCategories
            categoryPath="/gadgets/all-items"
            nameOfCategory={"All items"}
            onClick={() => handleArtistClick("All items")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/gadgets/mugs"
            nameOfCategory={"Mugs"}
            onClick={() => handleArtistClick("Mugs")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/gadgets/bags"
            nameOfCategory={"Bags"}
            onClick={() => handleArtistClick("Bags")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/gadgets/stickers"
            nameOfCategory={"Stickers"}
            onClick={() => handleArtistClick("Stickers")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/gadgets/backpacks"
            nameOfCategory={"Backpacks"}
            onClick={() => handleArtistClick("Backpacks")}
          />
        </li>
      </ul>
    </div>
  );
}
