/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import CustomerFavoritesCart from "../components/CustomerFavoritesCart";
import "./Cart.scss";
import albumCover from "../assets/img/coversMini/albums/kuntry-mini.jpg";
import flashbackCover from "../assets/img/coversMini/albums/deluxe_edition_flashback_from_2001-mini.jpg";
import introToCover from "../assets/img/other-members/albums/into-to-different-dimension.jpg";
import CardProductIntoCart from "../UI/Cards/CardProductIntoCart.jsx";

export default function Cart() {
  const [cartQuantity, setCartQuantity] = useState(1);
  //true = empty page, false = fill page with items
  const [isEmptyCart, setIsEmptyCart] = useState(true);
  const [products, setProducts] = useState([
    {
      id: 1,
      addedProductImg: albumCover,
      addedProductName: "Album Kuntry - El Double M",
      addedProductInfo: "Version: CD",
      addedProductId: "ABC123",
      quantity: 1,
      addedProductPrice: "11.99",
    },
    {
      id: 2,
      addedProductImg: introToCover,
      addedProductName: "Album Intro To Different Dimension - Molly Granoli",
      addedProductInfo: "Version: Usb-stick",
      addedProductId: "ABC124",
      quantity: 1,
      addedProductPrice: "9.99",
    },
    {
      id: 3,
      addedProductImg: flashbackCover,
      addedProductName:
        "Album Flashback From 2001 Deluxe Edition - El Double M",
      addedProductInfo: "Version: Usb-stick",
      addedProductId: "ABC125",
      quantity: 1,
      addedProductPrice: "15.99",
    },
  ]);

  const handleQuantityChange = (newQuantity) => {
    setCartQuantity(newQuantity);
  };

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

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + product.addedProductPrice * product.quantity;
    }, 0);
  };

  return (
    <aside className="aside-cart">
      <BadgeTopOfAsideNav nameOfNavPage={"Cart"} />
      <hr className="cart-devider-separator" />

      {/* Conditional rendering based on isEmptyCart state */}
      {isEmptyCart ? (
        <div className="content-empty-cart">
          <div className="all-text-cart">
            <p className="p-text-cart">
              It looks like you're starting with a clean slate.
            </p>
            <h3 className="h-cart">Let's explore!</h3>
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
        <div className="content-fill-cart">
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
              <hr className="cart-devider-separator-smaller" />
            </div>
          ))}

          <div className="all-text-cart">
            <p className="p-text-cart">
              Your cart contains {cartQuantity}{" "}
              {cartQuantity === 1 ? "item" : "items"}.
            </p>
          </div>
          <h3 className="h-cart">
            Subtotal Price : {calculateTotalPrice().toFixed(2)}€
          </h3>

          <div>
            <Link className="btn-continue-div-wrapper" to={"/checkout"}>
              <BtnContinue continueBtnText={"Continue to checkout"} />
            </Link>
          </div>
        </div>
      )}

      <hr className="cart-devider-separator-smaller" />
      <div className="all-content-of-cart">
        <div className="customer-favorities-cart">
          <CustomerFavoritesCart />
        </div>
      </div>
    </aside>
  );
}
