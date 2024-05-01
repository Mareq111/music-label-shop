/* eslint-disable react/prop-types */

export default function TextAlbumDuration({albumDuration}) {
  return (
    <div className="durationSong-div">
      <h3 className="detailedInfo-h">Duration:</h3>
      <p className="detailedInfo-p">{albumDuration}</p>
    </div>
  );
}
