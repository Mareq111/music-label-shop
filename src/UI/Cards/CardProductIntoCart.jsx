/* eslint-disable react/prop-types */
/*
import CartProductActions from "../../components/CartProductActions";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import "./CardProductIntoCart.scss";

export default function CardProductIntoCart({
  productDetail,
  onQuantityChange,
  onRemoveProduct,
  selectedVersion,
}) {
  //all props in one spot
  const {
    src,
    addedProductName,
    addedProductInfo,
    addedProductId,
    initialQuantity,
    addedProductPrice,
  } = productDetail;
  console.log("Selected version:", selectedVersion);
  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails src={src} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">{selectedVersion}{addedProductName}</h3>
          <p className="p-info-added-product">{addedProductInfo}</p>
          <p className="p-info-added-product">ID: {addedProductId}</p>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">{addedProductPrice}€</h3>
        </div>

        <CartProductActions
          initialQuantity={initialQuantity}
          onQuantityChange={onQuantityChange}
          onRemoveProduct={onRemoveProduct}
          selectedVersion={selectedVersion}
        />
      </div>
    </div>
  );
} */

/* import "./CardProductIntoCart.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import CartProductActions from "../../components/CartProductActions";

export default function CardProductIntoCart({
  productDetail,
  onQuantityChange,
  onRemoveProduct,
  selectedVersion,
  productId,
  productPrice,
}) {
  const {
    addedProductName,
    addedProductInfo,
    addedProductId,
    addedProductPrice,
    initialQuantity,
    productId,
    productPrice,
    imgURL,
  } = productDetail;

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails imgURL={imgURL} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">
            {selectedVersion}
            {addedProductName}
          </h3>
          <p className="p-info-added-product">{addedProductInfo}</p>
          <p className="p-info-added-product">ID: {productId}</p>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">{productPrice}€</h3>
        </div>
        <CartProductActions
          initialQuantity={initialQuantity}
          onQuantityChange={onQuantityChange}
          onRemoveProduct={onRemoveProduct}
          selectedVersion={selectedVersion}
        />
      </div>
    </div>
  );
}
 */

/* 
import "./CardProductIntoCart.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import CartProductActions from "../../components/CartProductActions";

export default function CardProductIntoCart({
  productDetail,
  onQuantityChange,
  onRemoveProduct,
  selectedVersion,
  cartProductId, // zmiana nazwy zmiennej productId na cartProductId
  cartProductPrice,
}) {
  const {
    addedProductName,
    addedProductInfo,
  addedProductId,
    addedProductPrice, 
    initialQuantity,
    imgURL,
  } = productDetail;

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails imgURL={imgURL} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">
            {selectedVersion}
            {addedProductName}
          </h3>
          <p className="p-info-added-product">{addedProductInfo}</p>
          <p className="p-info-added-product">ID: {cartProductId}</p>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">{cartProductPrice}€</h3> 
        </div>
        <CartProductActions
          initialQuantity={initialQuantity}
          onQuantityChange={onQuantityChange}
          onRemoveProduct={onRemoveProduct}
          selectedVersion={selectedVersion}
        />
      </div>
    </div>
  );
} */

/* import "./CardProductIntoCart.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import CartProductActions from "../../components/CartProductActions";
export default function CardProductIntoCart({
  product,
  onQuantityChange,
  onRemoveProduct,
  onAddToCart,
}) {
  const {
    productDescription,
     key, 
    itemId,
    priceItem,
    initialQuantity,
    imgURL,
    titleArtist,
    location,
    color,
    itemTitle,
    itemLevel,
  } = product;

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails imgURL={imgURL} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">
            {titleArtist || location || color || itemTitle || itemLevel}
          </h3>
          <p className="p-info-added-product">{productDescription}</p>
          <p className="p-info-added-product">ID: {itemId}</p>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">{priceItem}€</h3>
        </div>
        <CartProductActions
          initialQuantity={initialQuantity}
          onQuantityChange={onQuantityChange}
          onRemoveProduct={onRemoveProduct}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
} */

import "./CardProductIntoCart.scss";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import CartProductActions from "../../components/CartProductActions";

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
    initialQuantity,
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
          <h3 className="name-of-added-product">
            {titleItem} - {title}
          </h3>
          <p className="p-info-added-product">Version: {selectedVersion}</p>

          <p className="p-info-added-product">
            ID: {itemId}-{selectedVersion}
          </p>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">{priceItem}€</h3>
        </div>
        <CartProductActions
          initialQuantity={initialQuantity}
          onQuantityChange={onQuantityChange}
          onRemoveProduct={onRemoveProduct}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
}
