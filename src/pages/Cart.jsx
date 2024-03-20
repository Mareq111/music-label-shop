/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./Cart.scss";
import albumCover from "../assets/img/coversMini/albums/kuntry-mini.jpg";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";

export default function Cart() {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [products, setProducts] = useState([
    {
      id: 1,
      addedProductImg: albumCover,
      addedProductName: "Album Kuntry - El Double M",
      addedProductInfo: "Version: CD",
      addedProductId: "ABC123",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (newQuantity) => {
    setCartQuantity(newQuantity);
  };

  //if clicked BtnIconTrash , we change state of product card to 0 and after 5sec this card'll be removed
  const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== productId
      );
      setCartQuantity(0);
      setTimeout(() => {
        setProducts(updatedProducts);
      }, 5000);
      return updatedProducts;
    });
  };

  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav nameOfNavPage={"Cart"} />
      <hr className="cart-devider-separator" />

      <div className="content-fill-cart">
        <div className="all-text-cart">
          <p className="p-text-cart">
            You've added {cartQuantity} {cartQuantity === 1 ? "item" : "items"}{" "}
            to your cart.
          </p>
        </div>
        {/* product card */}
        {products.map((product) => (
          <div key={product.id}>
            <CardProductIntoCart
              addedProductImg={product.addedProductImg}
              addedProductName={product.addedProductName}
              addedProductInfo={product.addedProductInfo}
              addedProductId={product.addedProductId}
              initialQuantity={product.quantity}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(newQuantity)
              }
              onRemoveProduct={() => handleRemoveProduct(product.id)}
            />
          </div>
        ))}
        <div>
          <Link className="btn-continue-div-wrapper" to={"/checkout"}>
            <BtnContinue continueBtnText={"Continue to checkout"} />
          </Link>
        </div>
      </div>

      <hr className="cart-devider-separator-smaller" />
      <div className="all-content-of-cart">
        <div className="customer-favorities-cart">
          <CustomerFavoritesCart />
        </div>
      </div>
    </aside>
  );
}

//dobry kod dla pustego state

{
  /* change layout if cart has any item  */
}
{
  /*   {isEmptyCart ? (
        <div className="content-empty-cart">
          <div className="all-text-empty-cart">
            <p className="p-text-empty-cart">
              It looks like you're starting with a clean slate.
            </p>
            <h3 className="h-cta-empty-cart">Let's explore!</h3>
          </div>

          <div>
            <Link
              className="btn-continue-div-wrapper"
              to={".."}
              relative="path"
            >
              <BtnContinue continueBtnText={"Continue Shopping"} />
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h1>full cart</h1>
        </div>
      )} */
}
