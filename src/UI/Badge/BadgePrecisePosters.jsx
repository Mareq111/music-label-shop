/* eslint-disable react/prop-types */
import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";

export default function BadgePrecisePosters({ onArtistSelect }) {
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
            categoryPath="/posters/all-strimz-empire"
            nameOfCategory={"All Strimz Empire"}
            onClick={() => handleArtistClick("All Strimz Empire")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/posters/el-dm"
            nameOfCategory={"El DM"}
            onClick={() => handleArtistClick("El DM")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/posters/jackie-ras"
            nameOfCategory={"Jackie Ras"}
            onClick={() => handleArtistClick("Jackie Ras")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/posters/molly-granoli"
            nameOfCategory={"Molly Granoli"}
            onClick={() => handleArtistClick("Molly Granoli")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/posters/el-kaptn"
            nameOfCategory={"El Kaptn"}
            onClick={() => handleArtistClick("El Kaptn")}
          />
        </li>
      </ul>
    </div>
  );
}
