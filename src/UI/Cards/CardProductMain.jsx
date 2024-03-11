/* eslint-disable react/prop-types */
import "./CardProductMain.scss";
export default function CardProductMain({
  imgItem,
  titleItem,
  titleArtist,
  priceItem,
}) {
  return (
    <div className="card__ProductMain">
      <div className="div-top-of-card">
        <div className="div-img-card__ProductMain">
          <img
            className="img-card__ProductMain"
            src={imgItem}
            alt={`${titleItem} By ${titleArtist}`}
          />
        </div>
      </div>
      <div className="div-bottom-of-card">
        {/* div titles */}
        <div className="two-titles-card">
          <div className="div-title-card__ProductMain">
            <h4 className="title-card__ProductMain">{titleItem}</h4>
          </div>
          <div className="div-title-card__ProductMain">
            <h5 className="titleArtist-card__ProductMain">{titleArtist}</h5>
          </div>
        </div>
        <h5 className="price-card__ProductMain">From {priceItem}€</h5>
        {/*  <h5 className="price-card__ProductMain old-price"> 12.99€ - 32.99€</h5> */}
      </div>
    </div>
  );
}
