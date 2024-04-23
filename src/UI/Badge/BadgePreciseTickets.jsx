/* eslint-disable react/prop-types */
import BtnGoToCategories from "../Buttons/BtnGoToCategories";
import "./BadgePreciseAllPages.scss";

export default function BadgePreciseTickets({ onArtistSelect }) {
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
            onClick={() => handleArtistClick("Poland")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/czechia"
            nameOfCategory={"Czechia"}
            onClick={() => handleArtistClick("Czechia")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/austria"
            nameOfCategory={"Austria"}
            onClick={() => handleArtistClick("Austria")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/germany"
            nameOfCategory={"Germany"}
            onClick={() => handleArtistClick("Germany")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/netherlands"
            nameOfCategory={"Netherlands"}
            onClick={() => handleArtistClick("Netherlands")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/belgium"
            nameOfCategory={"Belgium"}
            onClick={() => handleArtistClick("Belgium")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/france"
            nameOfCategory={"France"}
            onClick={() => handleArtistClick("France")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/spain"
            nameOfCategory={"Spain"}
            onClick={() => handleArtistClick("Spain")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/italy"
            nameOfCategory={"Italy"}
            onClick={() => handleArtistClick("Italy")}
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
            onClick={() => handleArtistClick("Hungary")}
          />
        </li>
        <li className="list">
          <BtnGoToCategories
            categoryPath="/tickets/slovakia"
            nameOfCategory={"Slovakia"}
            onClick={() => handleArtistClick("Slovakia")}
          />
        </li>
      </ul>
    </div>
  );
}
