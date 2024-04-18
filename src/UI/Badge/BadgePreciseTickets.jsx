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
      <ul className="ul-choose-precise">
        <li className="list-choose-precise">
          <BtnGoToCategories
            categoryPath="/tickets/all-locations"
            nameOfCategory={"All locations"}
            onClick={() => handleArtistClick("All locations")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/poland"
            nameOfCategory={"Poland"}
            onClick={() => handleArtistClick("PL")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/czechia"
            nameOfCategory={"Czechia"}
            onClick={() => handleArtistClick("CZ")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/austria"
            nameOfCategory={"Austria"}
            onClick={() => handleArtistClick("Vienna, AT")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/germany"
            nameOfCategory={"Germany"}
            onClick={() => handleArtistClick("DE")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/netherlands"
            nameOfCategory={"Netherlands"}
            onClick={() => handleArtistClick("NL")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/belgium"
            nameOfCategory={"Belgium"}
            onClick={() => handleArtistClick("BE")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/france"
            nameOfCategory={"France"}
            onClick={() => handleArtistClick("FR")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/spain"
            nameOfCategory={"Spain"}
            onClick={() => handleArtistClick("ES")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/italy"
            nameOfCategory={"Italy"}
            onClick={() => handleArtistClick("IT")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/croatia"
            nameOfCategory={"Croatia"}
            onClick={() => handleArtistClick("Croatia")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/hungary"
            nameOfCategory={"Hungary"}
            onClick={() => handleArtistClick("HU")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/slovakia"
            nameOfCategory={"Slovakia"}
            onClick={() => handleArtistClick("SK")}
          />
        </li>
      </ul>
    </div>
  );
}
