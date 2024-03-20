/* eslint-disable react/prop-types */
import CartProductActions from "../../components/CartProductActions";
import "./CardProductIntoCart.scss";

export default function CardProductIntoCart({
  addedProductImg,
  addedProductName,
  addedProductInfo,
  addedProductId,
  initialQuantity,
  onQuantityChange,
  onRemoveProduct,
}) {
  return (
    <div className="card-product-into-cart">
      <div className="div-img-of-added-product">
        <img
          className="img-of-added-product"
          src={addedProductImg}
          alt={`Added Product image: ${addedProductName}`}
        />
      </div>
      <div className="div-all-content-product-into-cart">
        <div className="div-all-text-product-info">
          <h3 className="name-of-added-product">{addedProductName}</h3>
          <p className="p-info-added-product">{addedProductInfo}</p>
          <p className="p-info-added-product">ID: {addedProductId}</p>
        </div>
        <div className="div-price-product">
          <h3 className="h-price-of-item">11.99€</h3>
        </div>

        {/* <div className="wrapper-cart-product-actions"> */}
        <CartProductActions
          initialQuantity={initialQuantity}
          onQuantityChange={onQuantityChange}
          onRemoveProduct={onRemoveProduct}
        />
        {/*    </div> */}
      </div>
    </div>
  );
}
