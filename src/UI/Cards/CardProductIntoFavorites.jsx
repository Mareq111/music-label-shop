/* eslint-disable react/prop-types */
/*  import FavoritesProductActions from "../../components/FavoritesProductActions";
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
} */

/* import "./CardProductIntoFavorites.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import FavoritesProductActions from "../../components/FavoritesProductActions";

export default function CardProductIntoFavorites({
  product,
  onRemoveProduct,
  onAddToCart,
}) {
  const { title, priceItem, quantity, imgURL, titleItem } = product;

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails imgURL={imgURL} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">
            {titleItem} - {title}
          </h3>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">{priceItem}€</h3>
        </div>
        <FavoritesProductActions
          initialQuantity={quantity}
          onRemoveProduct={onRemoveProduct}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
}
 */

/* import "./CardProductIntoFavorites.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import FavoritesProductActions from "../../components/FavoritesProductActions";

export default function CardProductIntoFavorites({
  product,
  onRemoveProduct,
  onAddToCart,
}) {
  const { title, priceItem, quantity, imgURL, titleItem } = product;

  // Log the product object to ensure it contains the necessary properties
  console.log("Product in CardProductIntoFavorites:", product);

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails imgURL={imgURL} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">
            {titleItem} - {title}
          </h3>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">{priceItem}€</h3>
        </div>
        <FavoritesProductActions
          initialQuantity={quantity}
          onRemoveProduct={onRemoveProduct}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
} */

import "./CardProductIntoFavorites.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import FavoritesProductActions from "../../components/FavoritesProductActions";

export default function CardProductIntoFavorites({
  product,
  onRemoveProduct,
  onAddToCart,
}) {
  //dynamic title depends on which product are choosen
  /*    titleArtist={
      productData.titleArtist ||
      productData.location ||
      productData.color ||
      productData.itemTitle ||
      productData.itemLevel
    } */
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

  // Logowanie danych produktu
  console.log("Product in CardProductIntoFavorites:", product);

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails imgURL={imgURL} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">
            {/*   //dynamic title depends on which product are choosen */}
            {titleItem} -{" "}
            {titleArtist || location || color || itemTitle || itemLevel}
          </h3>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">{priceItem}€</h3>
        </div>
        <FavoritesProductActions
          initialQuantity={quantity}
          onRemoveProduct={onRemoveProduct}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
}
