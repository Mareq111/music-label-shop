/* eslint-disable react/prop-types */
import FavoritesProductActions from "../../components/FavoritesProductActions";
import "./CardProductIntoFavorites.scss";

export default function CardProductIntoCart({
  favoriteProductImg,
  favoriteProductName,
  favoriteProductInfo,
  favoriteProductId,
  initialQuantity,
  onQuantityChange,
  onRemoveProduct,
}) {
  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <img
          className="img-of-added-product"
          src={favoriteProductImg}
          alt={`Added Product image: ${favoriteProductName}`}
        />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">{favoriteProductName}</h3>
          <p className="p-info-added-product">{favoriteProductInfo}</p>
          <p className="p-info-added-product">ID: {favoriteProductId}</p>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">11.99€</h3>
        </div>

        <FavoritesProductActions
          initialQuantity={initialQuantity}
          onQuantityChange={onQuantityChange}
          onRemoveProduct={onRemoveProduct}
        />
      </div>
    </div>
  );
}
