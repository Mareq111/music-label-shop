/* eslint-disable no-undef */
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import BtnContinue from "../UI/Buttons/BtnContinue";
import "./Favorites.scss";
import BadgeTopOfAsideNav from "../UI/Badge/BadgeTopOfAsideNav";
import {
  removeItemFromFavorites,
  closeFavorites,
} from "../store/favoritesSlice";
import { toggleCart } from "../store/cartSlice.js";
import CardProductIntoFavorites from "../UI/Cards/CardProductIntoFavorites.jsx";

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorites.items);
  const favoriteQuantity = useSelector(
    (state) => state.favorites.totalQuantity
  );
  const isFavoritesOpen = useSelector(
    (state) => state.favorites.isFavoritesOpen
  );
  const isEmptyFavorite = favoriteProducts.length === 0;

  const modalRef = useRef(null);

  const handleRemoveFavoriteProduct = (productId) => {
    dispatch(removeItemFromFavorites(productId));
  };

  const handleCloseFavorites = () => {
    dispatch(closeFavorites());
  };

  const handleInspectCartClickOrClose = () => {
    handleCloseFavorites();
    dispatch(toggleCart());
  };

  // Trap focus inside modal when it's open
  useEffect(() => {
    if (isFavoritesOpen) {
      const focusableElements = modalRef.current.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            // Shift + Tab (backward)
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab (forward)
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      // Focus on the first focusable element when modal opens
      firstElement?.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isFavoritesOpen]);

  if (!isFavoritesOpen) return null;

  return (
    <>
      <div className="backdrop-favorites" onClick={handleCloseFavorites}></div>

      <aside className="aside-favorites" ref={modalRef}>
        <BadgeTopOfAsideNav
          nameOfNavPage={"Favorites"}
          showCloseButton={true}
          onClose={handleCloseFavorites}
        />
        <hr className="favorites-devider-separator" />

        {isEmptyFavorite ? (
          <div className="content-empty-favorites">
            <div className="all-text-favorites">
              <p className="p-text-favorites">
                Sign in to save your favorites.
              </p>
              <h3 className="h-favorites">
                Explore and add amazing items to your list.
              </h3>
            </div>
            <div>
              <BtnContinue
                continueBtnText={"Continue Exploring"}
                onClick={handleCloseFavorites}
              />
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
              <BtnContinue
                continueBtnText={"Inspect cart"}
                onClick={handleInspectCartClickOrClose}
              />
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
