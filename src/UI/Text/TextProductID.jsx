

// eslint-disable-next-line react/prop-types
export default function TextProductID({productID}) {
  return (
    <div className="productId-div">
      <h3 className="detailedInfo-h">Product ID:</h3>
      <p className="detailedInfo-p">{productID}</p>
    </div>
  );
}
