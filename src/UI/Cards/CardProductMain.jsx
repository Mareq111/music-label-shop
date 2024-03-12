/* eslint-disable react/prop-types */

/* import "./CardProductMain.scss";
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
        <div className="two-titles-card">
          <div className="div-title-card__ProductMain">
            <h4 className="title-card__ProductMain">{titleItem}</h4>
          </div>
          <div className="div-title-card__ProductMain">
            <h5 className="titleArtist-card__ProductMain">{titleArtist}</h5>
          </div>
        </div>
        <h5 className="price-card__ProductMain">From {priceItem}€</h5>
      </div>
    </div>
  );
} */

import "./CardProductMain.scss";

const CardProductMain = ({
  imgItem,
  titleItem,
  titleArtist,
  priceItem,
  layout,
}) => {
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
};

export default CardProductMain;

//grid
{
  /* <div className="card-product-main-grid">
          <img src={imgItem} alt={titleItem} className="img-product-main" />
          <div className="card-content-grid">
            <h3 className="title-item-grid">{titleItem}</h3>
            <h4 className="title-artist-grid">{titleArtist}</h4>
            <h5 className="price-item-grid">{priceItem} €</h5>
          </div>
        </div> */
}

//row
/*   <div className="card-product-main-list">
        <div className="img-container-list">
          <img src={imgItem} alt={titleItem} className="img-product-list" />
        </div>
        <div className="card-content-list">
          <h3 className="title-item-list">{titleItem}</h3>
          <h4 className="title-artist-list">{titleArtist}</h4>
          <h5 className="price-item-list">{priceItem} €</h5>
        </div>
      </div> */
