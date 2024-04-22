/* eslint-disable react/prop-types */
import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";

export default function BadgePreciseTshirts({ onArtistSelect }) {
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
            categoryPath="/t-shirts/all-colors"
            nameOfCategory={"All colors"}
            onClick={() => handleArtistClick("All colors")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/t-shirts/white"
            nameOfCategory={"White"}
            onClick={() => handleArtistClick("White")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/t-shirts/beige"
            nameOfCategory={"Beige"}
            onClick={() => handleArtistClick("Beige")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/t-shirts/black"
            nameOfCategory={"Black"}
            onClick={() => handleArtistClick("Black")}
          />
        </li>

        <li className="list">
          <BtnGoToCategories
            categoryPath="/t-shirts/green"
            nameOfCategory={"Green"}
            onClick={() => handleArtistClick("Green")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/t-shirts/blue"
            nameOfCategory={"Blue"}
            onClick={() => handleArtistClick("Blue")}
          />
        </li>

        <li className="list">
          <BtnGoToCategories
            categoryPath="/t-shirts/colorful"
            nameOfCategory={"Colorful"}
            onClick={() => handleArtistClick("Colorful")}
          />
        </li>
      </ul>
    </div>
  );
}
