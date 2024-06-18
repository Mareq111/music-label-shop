/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

/* import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import "./Favorites.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { removeItemFromFavorites } from "../store/favoritesSlice";
import CardProductIntoFavorites from "../UI/Cards/CardProductIntoFavorites.jsx";

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites.items);
  const favoriteQuantity = useSelector(
    (state) => state.favorites.totalQuantity
  );
  const isEmptyFavorite = favoriteProducts.length === 0;

  const handleRemoveFavoriteProduct = (productId) => {
    dispatch(removeItemFromFavorites(productId));
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
            <div key={product.itemId}>
              <CardProductIntoFavorites
                key={product.itemId} // Ensure key is unique and consistent
                favoriteProductImg={product.favoriteProductImg}
                favoriteProductName={product.favoriteProductName}
                favoriteProductInfo={product.favoriteProductInfo}
                favoriteProductId={product.favoriteProductId}
                initialQuantity={product.quantity}
                onRemoveProduct={() =>
                  handleRemoveFavoriteProduct(product.itemId)
                }
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
} */

/* import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import "./Favorites.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { removeItemFromFavorites } from "../store/favoritesSlice";
import CardProductIntoFavorites from "../UI/Cards/CardProductIntoFavorites.jsx";

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites.items);
  const favoriteQuantity = useSelector((state) => state.favorites.totalQuantity);
  const isEmptyFavorite = favoriteProducts.length === 0;

  const handleRemoveFavoriteProduct = (productId) => {
    dispatch(removeItemFromFavorites(productId));
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
            <Link className="btn-continue-div-wrapper" to={".."} relative="path">
              <BtnContinue continueBtnText={"Continue Exploring"} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="content-fill-favorites">
          {favoriteProducts.map((product) => (
            <div key={product.itemId}>
              <CardProductIntoFavorites
                product={product}
                onRemoveProduct={() => handleRemoveFavoriteProduct(product.itemId)}
                onAddToCart={() => handleAddToCart(product)}
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
 */



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import "./Favorites.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import { removeItemFromFavorites } from "../store/favoritesSlice";
import CardProductIntoFavorites from "../UI/Cards/CardProductIntoFavorites.jsx";

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites.items);
  const favoriteQuantity = useSelector((state) => state.favorites.totalQuantity);
  const isEmptyFavorite = favoriteProducts.length === 0;

  const handleRemoveFavoriteProduct = (productId) => {
    dispatch(removeItemFromFavorites(productId));
  };

  const handleAddToCart = (product) => {
    // Implementacja dodawania produktu do koszyka
  };

  // Logowanie danych produktów
  console.log("Favorite Products in Favorites component:", favoriteProducts);

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
            <Link className="btn-continue-div-wrapper" to={".."} relative="path">
              <BtnContinue continueBtnText={"Continue Exploring"} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="content-fill-favorites">
          {favoriteProducts.map((product) => (
            <div key={product.itemId}>
              <CardProductIntoFavorites
                product={product}
                onRemoveProduct={() => handleRemoveFavoriteProduct(product.itemId)}
                onAddToCart={() => handleAddToCart(product)}
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
