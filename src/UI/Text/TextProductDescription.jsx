
import "./TextProductDescription.scss";
export default function TextProductDescription() {
  //temporary text
  const productDescription =
    "The Wave album is an exploratory journey that guides the listener through diverse landscapes and experiences. The ship on the cover represents the voyager who is navigating the unknown, while the abstract sky shows the endless possibilities that are waiting to be discovered.";
  return (
    <article className="product-description-text">
      <p className="p-product-description-text">{productDescription}</p>
    </article>
  );
}
