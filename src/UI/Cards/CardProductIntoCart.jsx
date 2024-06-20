/* eslint-disable react/prop-types */

import "./CardProductIntoCart.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import CartProductActions from "../../components/CartProductActions";
import { Link } from "react-router-dom";

export default function CardProductIntoCart({
  product,
  onQuantityChange,
  onRemoveProduct,
  onAddToCart,
}) {
  const {
    selectedVersion,
    title,
    itemId,
    priceItem,
    quantity,
    imgURL,
    titleItem,
  } = product;

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails imgURL={imgURL} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <Link
            to={`/${product.key}`}
            aria-label="go to this product page"
            title="Go to this product page"
          >
            <h3 className="name-of-added-product">
              {titleItem} - {title}
            </h3>
          </Link>

          <p className="p-info-added-product">Version: {selectedVersion}</p>
          <p className="p-info-added-product">
            ID: {itemId}-{selectedVersion}
          </p>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">{priceItem}€</h3>
        </div>
        <CartProductActions
          initialQuantity={quantity}
          onQuantityChange={onQuantityChange}
          onRemoveProduct={onRemoveProduct}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
}
