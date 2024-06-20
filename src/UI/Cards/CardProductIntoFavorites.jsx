/* eslint-disable react/prop-types */

import "./CardProductIntoFavorites.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import FavoritesProductActions from "../../components/FavoritesProductActions";
import { Link } from "react-router-dom";

export default function CardProductIntoFavorites({
  product,
  onRemoveProduct,
  onAddToCart,
}) {
  const {
    titleArtist,
    location,
    color,
    itemTitle,
    itemLevel,
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
              {titleItem} -{" "}
              {titleArtist || location || color || itemTitle || itemLevel}
            </h3>
          </Link>
        </div>

        <div className="div-price-product">
          <h3 className="h-price-of-item">{priceItem}€</h3>
          {/*  <p className="p-info-added-product">ID: {titleItem}</p> */}
        </div>
        <FavoritesProductActions
          initialQuantity={quantity}
          onRemoveProduct={onRemoveProduct}
          onAddToCart={onAddToCart}
          product={product}
        />
      </div>
    </div>
  );
}
