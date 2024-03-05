import React from "react";

export default function TextReleaseDate({releaseDate}) {
  return (
    <div className="releaseDate-div">
      <h3 className="detailedInfo-h">Release date:</h3>
      <p className="detailedInfo-p">{releaseDate}</p>
    </div>
  );
}
