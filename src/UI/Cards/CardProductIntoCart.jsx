/* eslint-disable react/prop-types */
import CartProductActions from "../../components/CartProductActions";
import MainImgProdDetails from "../Images/MainImgProdDetails";
import "./CardProductIntoCart.scss";

export default function CardProductIntoCart({
  productDetail,
  onQuantityChange,
  onRemoveProduct,
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

  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <MainImgProdDetails src={src} />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">{addedProductName}</h3>
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
        />
      </div>
    </div>
  );
}

/* //old code */
{
  /* <img
          className="img-of-added-product"
          src={addedProductImg}
          alt={`Added Product image: ${addedProductName}`}
        />  */
}
