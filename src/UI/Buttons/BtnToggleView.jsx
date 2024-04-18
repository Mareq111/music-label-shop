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

/* import { useSelector, useDispatch } from "react-redux";
import { setLayoutView } from "../../store/layoutSlice";
import IconGridView from "../Icons/IconGridView";
import IconListView from "../Icons/IconListView";
import "./BtnToggleView.scss";

export default function BtnToggleView() {
  const dispatch = useDispatch();
  const layoutView = useSelector((state) => state.layout.layoutView);

  const handleLayoutChange = () => {
    const newLayout = layoutView === "grid" ? "list" : "grid";
    dispatch(setLayoutView(newLayout));
  };

  function getActiveIcon() {
    return layoutView === "grid" ? <IconGridView /> : <IconListView />;
  }

  return (
    <div className="icons-view-chooser">
      <button
        title="Change view of products"
        onClick={handleLayoutChange}
        className={`btn-toggle-view ${
          layoutView === "grid" ? "grid-view" : "list-view"
        } active`}
      >
        {getActiveIcon()}
      </button>
    </div>
  );
} */
