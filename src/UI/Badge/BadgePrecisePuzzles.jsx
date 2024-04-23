/* eslint-disable react/prop-types */
import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";

export default function BadgePrecisePuzzles({ onArtistSelect }) {
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
            categoryPath="/puzzles/all-levels"
            nameOfCategory={"All Levels"}
            onClick={() => handleArtistClick("All Levels")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/puzzles/easy"
            nameOfCategory={"Easy"}
            onClick={() => handleArtistClick("Easy")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/puzzles/medium"
            nameOfCategory={"Medium"}
            onClick={() => handleArtistClick("Medium")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/puzzles/hard"
            nameOfCategory={"Hard"}
            onClick={() => handleArtistClick("Hard")}
          />
        </li>
      </ul>
    </div>
  );
}
