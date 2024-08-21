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

  const handleAddToCart = (product) => {};

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
          <ul className="ul-product-list-fav">
            {favoriteProducts.map((product) => (
              <li key={product.titleItem}>
                <CardProductIntoFavorites
                  product={product}
                  onRemoveProduct={() =>
                    handleRemoveFavoriteProduct(product.itemId)
                  }
                  onAddToCart={() => handleAddToCart(product)}
                />
                <hr className="favorites-devider-separator-smaller" />
              </li>
            ))}
          </ul>

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

/* import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BtnContinue from "../UI/Buttons/BtnContinue";
import "./Favorites.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import {
  removeItemFromFavorites,
  closeFavorites,
} from "../store/favoritesSlice"; // Import closeFavorites
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

  const handleAddToCart = (product) => {};

  return (
    <aside className="aside-favorites">
      <BadgeTopOfAsideNav
        nameOfNavPage={"Favorites"}
        showCloseButton={true}
        onClose={() => dispatch(closeFavorites())} // Close when the button is clicked
      />
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
          <ul className="ul-product-list-fav">
            {favoriteProducts.map((product) => (
              <li key={product.titleItem}>
                <CardProductIntoFavorites
                  product={product}
                  onRemoveProduct={() =>
                    handleRemoveFavoriteProduct(product.itemId)
                  }
                  onAddToCart={() => handleAddToCart(product)}
                />
                <hr className="favorites-devider-separator-smaller" />
              </li>
            ))}
          </ul>

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
import { removeItemFromFavorites, closeFavorites } from "../store/favoritesSlice";
import CardProductIntoFavorites from "../UI/Cards/CardProductIntoFavorites.jsx";

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites.items);
  const favoriteQuantity = useSelector(
    (state) => state.favorites.totalQuantity
  );
  const isFavoritesOpen = useSelector((state) => state.favorites.isFavoritesOpen);
  const isEmptyFavorite = favoriteProducts.length === 0;

  const handleRemoveFavoriteProduct = (productId) => {
    dispatch(removeItemFromFavorites(productId));
  };

  const handleCloseFavorites = () => {
    dispatch(closeFavorites());
  };

  if (!isFavoritesOpen) return null;

  return (
    <>
      <div
        className="backdrop-favorites"
        onClick={handleCloseFavorites}
      ></div>

      <aside className="aside-favorites">
        <BadgeTopOfAsideNav
          nameOfNavPage={"Favorites"}
          showCloseButton={true}
          onClose={handleCloseFavorites} // Close when the close button is clicked
        />
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
            <ul className="ul-product-list-fav">
              {favoriteProducts.map((product) => (
                <li key={product.titleItem}>
                  <CardProductIntoFavorites
                    product={product}
                    onRemoveProduct={() =>
                      handleRemoveFavoriteProduct(product.itemId)
                    }
                    onAddToCart={() => handleAddToCart(product)}
                  />
                  <hr className="favorites-devider-separator-smaller" />
                </li>
              ))}
            </ul>

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
    </>
  );
}
