/* eslint-disable react/prop-types */

import "./TextProductDescription.scss";
export default function TextProductDescription({ productDescription }) {
  return (
    <article className="product-description-text">
      <p className="p-product-description-text">{productDescription}</p>
    </article>
  );
}
