import React from "react";

export default function TextProdTitle({title}) {


  return (
    <div className="prodTitle-div">
      <h3 className="detailedInfo-h">Title:</h3>
      <p className="detailedInfo-p">{title}</p>
    </div>
  );
}
