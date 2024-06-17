/* eslint-disable react/prop-types */
import IconHeart from "../Icons/IconHeart";
import "./BtnIconFavoritesMenu.scss";
export default function BtnIconFavoritesMenu({ itemCountFav }) {
  return (
    <button
      title="Favorites"
      className="btn-favorites-menu"
      type="button"
      aria-label="Go to favorites"
    >
      <IconHeart />
      {itemCountFav > 0 && (
        <span className="badge-favorites-count">{itemCountFav}</span>
      )}
    </button>
  );
}
