/* eslint-disable react/prop-types */

 import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";

export default function BadgePreciseAlbums({ onArtistSelect }) {
  const handleArtistClick = (artistName) => {
    if (onArtistSelect) {
      onArtistSelect(artistName);
    }
  };

  return (
    <div>
      <ul className="ul-choose-precise-albums">
        <li className="list-choose-precise-albums">
          <BtnGoToCategories
            categoryPath="" 
            nameOfCategory={"All Strimz Empire"}
            onClick={() => handleArtistClick("All Strimz Empire")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="el-dm"
            nameOfCategory={"El DM"}
            onClick={() => handleArtistClick("El DM")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
             categoryPath="jackie-ras" 
            nameOfCategory={"Jackie Ras"}
            onClick={() => handleArtistClick("Jackie Ras")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
              categoryPath="molly-granoli" 
            nameOfCategory={"Molly Granoli"}
            onClick={() => handleArtistClick("Molly Granoli")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
              categoryPath="el-kaptn" 
            nameOfCategory={"El Kaptn"}
            onClick={() => handleArtistClick("El Kaptn")}
          />
        </li>
      </ul>
    </div>
  );
}

