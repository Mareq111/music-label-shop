/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import IconGridView from "../Icons/IconGridView";
import IconListView from "../Icons/IconListView";
import "./BtnToggleView.scss";

export default function BtnToggleView({ onLayoutChange }) {
  const [gridView, setGridView] = useState(false);

  useEffect(() => {
    // perform layout change after the component has rendered
    onLayoutChange(gridView ? "list" : "grid");
  }, [gridView, onLayoutChange]);

  function handleLayoutChange() {
    setGridView((prevGridView) => !prevGridView);
  }

  function getActiveIcon() {
    return gridView ? <IconListView /> : <IconGridView />;
  }

  return (
    <div className="icons-view-chooser">
      <button
        title="Change view of products"
        onClick={handleLayoutChange}
        className={`btn-toggle-view ${
          gridView ? "grid-view active" : "list-view active"
        }`}
      >
        {getActiveIcon()}
      </button>
    </div>
  );
}
