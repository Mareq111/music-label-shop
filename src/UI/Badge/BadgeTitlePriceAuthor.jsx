/* eslint-disable react/prop-types */

import './BadgeTitlePriceAuthor.scss'
export default function BadgeTitlePriceAuthor({
  itemTitle,
  itemPrice,
  itemAuthor,
}) {
  return (
    <>
      <div className="main-h1-and-p">
        <div className="first-line">
          <h1 className="h1-content-prod-details">{itemTitle}</h1>
          <div className="price">
            <span className="price-of-item">{itemPrice}€</span>
          </div>
        </div>
        <p className="p-content-prod-details">{itemAuthor}</p>
      </div>
    </>
  );
}
