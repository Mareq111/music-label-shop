/* eslint-disable react/prop-types */


import "./BadgeTitlePriceAuthor.scss";
export default function BadgeTitlePriceAuthor({
  titleItem,
  priceItem,
  titleArtist,
}) {
  return (
    <div className="main-h1-and-p">
      <div className="first-line">
        <h1 className="h1-content-prod-details">{titleItem}</h1>
        <div className="price">
          <span className="price-of-item">{priceItem}€</span>
        </div>
      </div>
      <p className="p-content-prod-details">{titleArtist}</p>
    </div>
  );
}
