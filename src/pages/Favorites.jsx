/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import "./Favorites.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { useState } from "react";
import "./Favorites.scss";
import albumCover from "../assets/img/coversMini/albums/kuntry-mini.jpg";
import flashbackCover from "../assets/img/coversMini/albums/deluxe_edition_flashback_from_2001-mini.jpg";
import introToCover from "../assets/img/other-members/albums/into-to-different-dimension.jpg";
import CardProductIntoFavorites from "../UI/Cards/CardProductIntoFavorites.jsx";

export default function Favorites() {
  const [favoriteQuantity, setFavoriteQuantity] = useState(1);
  const [isEmptyFavorite, setIsEmptyFavorite] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([
    {
      id: 1,
      favoriteProductImg: albumCover,
      favoriteProductName: "Favorite Album - Artist",
      favoriteProductInfo: "Version: CD",
      favoriteProductId: "ABC123",
      quantity: 1,
      favoriteProductPrice: "11.99",
    },
    {
      id: 2,
      favoriteProductImg: introToCover,
      favoriteProductName: "Favorite Intro To Different Dimension - Artist",
      favoriteProductInfo: "Version: USB-stick",
      favoriteProductId: "ABC124",
      quantity: 1,
      favoriteProductPrice: "9.99",
    },
    {
      id: 3,
      favoriteProductImg: flashbackCover,
      favoriteProductName: "Favorite Flashback Deluxe Edition - Artist",
      favoriteProductInfo: "Version: USB-stick",
      favoriteProductId: "ABC125",
      quantity: 1,
      favoriteProductPrice: "15.99",
    },
  ]);

  const handleQuantityChange = (newQuantity) => {
    setFavoriteQuantity(newQuantity);
  };

  const handleRemoveFavoriteProduct = (productId) => {
    setFavoriteProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== productId
      );
      setFavoriteQuantity(0);
      setTimeout(() => {
        setFavoriteProducts(updatedProducts);
      }, 5000);
      return updatedProducts;
    });
  };

  const calculateTotalPrice = () => {
    return favoriteProducts.reduce((total, product) => {
      return total + product.favoriteProductPrice * product.quantity;
    }, 0);
  };

  return (
    <aside className="aside-favorites">
      <BadgeTopOfAsideNav nameOfNavPage={"Favorites"} showCloseButton={true} />
      <hr className="favorites-devider-separator" />

      {isEmptyFavorite ? (
        <div className="content-empty-favorites">
          <div className="all-text-favorites">
            <p className="p-text-favorites">Sign in to save your favorites.</p>
            <h3 className="h-favorites">
              Explore and add amazing items to your list.
            </h3>
          </div>

          <div>
            <Link
              className="btn-continue-div-wrapper"
              to={".."}
              relative="path"
            >
              <BtnContinue continueBtnText={"Continue Exploring"} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="content-fill-favorites">
          {favoriteProducts.map((product) => (
            <div key={product.id}>
              <CardProductIntoFavorites
                favoriteProductImg={product.favoriteProductImg}
                favoriteProductName={product.favoriteProductName}
                favoriteProductInfo={product.favoriteProductInfo}
                favoriteProductId={product.favoriteProductId}
                initialQuantity={product.quantity}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(newQuantity)
                }
                onRemoveProduct={() => handleRemoveFavoriteProduct(product.id)}
              />
              <hr className="favorites-devider-separator-smaller" />
            </div>
          ))}

          <div className="all-text-favorites">
            <p className="p-text-favorites" id="summary-p-text-favorites">
              Your favorites list contains {favoriteQuantity}{" "}
              {favoriteQuantity === 1 ? "item" : "items"}.
            </p>
          </div>

          <div>
            <Link className="btn-continue-div-wrapper" to={"/cart"}>
              <BtnContinue continueBtnText={"Inspect cart"} />
            </Link>
          </div>
        </div>
      )}
    </aside>
  );
}
