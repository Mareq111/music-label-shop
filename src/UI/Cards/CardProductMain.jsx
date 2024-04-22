/* eslint-disable react/prop-types */

import "./CardProductMain.scss";

export default function CardProductMain({ product, layout }) {
  //descruturing the product object of location if its not an album
  const {
    titleItem,
    titleArtist = product.location,
    priceItem,
    imgURL,
  } = product;

  const renderCardContent = () => {
    if (layout === "grid") {
      return (
        <div className="card__Product-list">
          <div className="div-top-of-card-Product-list">
            <div className="div-img-card__Product-list">
              <img
                className="product-image"
                src={imgURL}
                alt={`${titleItem} by ${titleArtist}`}
              />
            </div>
          </div>
          <div className="div-bottom-of-card-Product-list">
            <div className="two-titles-card-Product-list">
              <div className="div-title-card__Product-list">
                <h4 className="title-card__Product-list">{titleItem}</h4>
              </div>
              <div className="div-title-card__Product-list">
                <h5 className="titleArtist-card__Product-list">
                  {titleArtist}
                </h5>
              </div>
            </div>
            <h5 className="price-card__Product-list">From {priceItem}€</h5>
          </div>
        </div>
      );
    } else if (layout === "list") {
      return (
        <div className="card__Product-grid">
          <div className="div-top-of-card-Product-grid">
            <div className="div-img-card__Product-grid">
              <img
                className="product-image"
                src={imgURL}
                alt={`${titleItem} by ${titleArtist}`}
              />
            </div>
          </div>
          <div className="div-bottom-of-card-Product-grid">
            <div className="two-titles-card-Product-grid">
              <div className="div-title-card__Product-grid">
                <h4 className="title-card__Product-grid">{titleItem}</h4>
              </div>
              <div className="div-title-card__Product-grid">
                <h5 className="titleArtist-card__Product-grid">
                  {titleArtist}
                </h5>
              </div>
            </div>
            <h5 className="price-card__Product-grid">From {priceItem}€</h5>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="card-product-main-container">{renderCardContent()}</div>
  );
}
