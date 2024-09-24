/* eslint-disable react/prop-types */

import IconTrash from "../Icons/IconTrash";
import "./BtnIconTrash.scss";

export default function BtnIconTrash({ onRemove }) {
  const handleClick = () => {
    if (onRemove) {
      onRemove();
      console.log("trash = remove");
    }
  };

  return (
    <button tabIndex={0}
      onClick={handleClick}
      title="remove"
      className="btn-trash"
      type="button"
    >
      <IconTrash />
    </button>
  );
}
