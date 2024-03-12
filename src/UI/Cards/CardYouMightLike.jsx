/* eslint-disable react/prop-types */

import "./CardYouMightLike.scss";
export default function CardYouMightLike({
  imgItem,
  titleItem,
  titleArtist,
  priceItem,
}) {
  return (
    <div className="card__youMightLike">
      <div className="div-top-of-card">
        <div className="div-img-card__youMightLike">
          <img
            className="img-card__youMightLike"
            src={imgItem}
            alt={`${titleItem} By ${titleArtist}`}
          />
        </div>
      </div>
      <div className="div-bottom-of-card">
        <div className="two-titles-card">
          <div className="div-title-card__youMightLike">
            <h4 className="title-card__youMightLike">{titleItem}</h4>
          </div>
          <div className="div-title-card__youMightLike">
            <h5 className="titleArtist-card__youMightLike">{titleArtist}</h5>
          </div>
        </div>
        <h5 className="price-card__youMightLike">From {priceItem}€</h5>
      </div>
    </div>
  );
}
