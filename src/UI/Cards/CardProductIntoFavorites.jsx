/* eslint-disable react/prop-types */
/* import "./CardProductIntoFavorites.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import FavoritesProductActions from "../../components/FavoritesProductActions";

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

  // show product data
  console.log("Product in CardProductIntoFavorites:", product);

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails imgURL={imgURL} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">
            {/*   //dynamic title depends on which product are choosen 
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
} */



/* import "./CardProductIntoFavorites.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import FavoritesProductActions from "../../components/FavoritesProductActions";

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

  // show product data
  console.log("Product in CardProductIntoFavorites:", product);

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails imgURL={imgURL} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">
            {/*   //dynamic title depends on which product are choosen 
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
          product={product}
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
  
    // show product data
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
            product={product}
          />
        </div>
      </div>
    );
  }
  