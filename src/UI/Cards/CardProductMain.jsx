/* eslint-disable react/prop-types */

import "./CardProductMain.scss";
export default function CardProductMain({
  imgItem,
  titleItem,
  titleArtist,
  priceItem,
  layout,
}) {
  const renderCardContent = () => {
    // grid view icon visible
    if (layout === "grid") {
      return (
        <div className="card__Product-list">
          <div className="div-top-of-card-Product-list">
            <div className="div-img-card__Product-list">
              <img
                className="img-card__Product-list"
                src={imgItem}
                alt={`${titleItem} By ${titleArtist}`}
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
      // list view icon visible
    } else if (layout === "list") {
      return (
        <div className="card__Product-grid">
          <div className="div-top-of-card-Product-grid">
            <div className="div-img-card__Product-grid">
              <img
                className="img-card__Product-grid"
                src={imgItem}
                alt={`${titleItem} By ${titleArtist}`}
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
