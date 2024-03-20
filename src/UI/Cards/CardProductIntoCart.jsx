/* eslint-disable react/prop-types */
import CartProductActions from "../../components/CartProductActions";
import "./CardProductIntoCard.scss";

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
      <div className="div-all-text-product-into-cart">
        <h3 className="name-of-added-product">{addedProductName}</h3>
        <p className="p-info-added-product">{addedProductInfo}</p>
        <p className="p-info-added-product">ID: {addedProductId}</p>
        <CartProductActions
          initialQuantity={initialQuantity}
          onQuantityChange={onQuantityChange}
          onRemoveProduct={onRemoveProduct}
        />
      </div>
    </div>
  );
}
