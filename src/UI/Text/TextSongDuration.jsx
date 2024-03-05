import React from "react";

export default function TextSongDuration({songDuration}) {
  return (
    <div className="durationSong-div">
      <h3 className="detailedInfo-h">Duration:</h3>
      <p className="detailedInfo-p">{songDuration}</p>
    </div>
  );
}
