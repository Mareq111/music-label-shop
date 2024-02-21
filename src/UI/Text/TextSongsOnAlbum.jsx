import React from "react";
import "./TextSongsOnAlbum.scss";
export default function TextSongsOnAlbum({ songs }) {
  return (
    <article className="songs-on-album-article">
      <div className="title-songs-all-div">
        <h3 className="songs-on-album-h">Track list</h3>
        <ol className="songs-on-album-ol">
          {/* mapping each song from prodData into dynamic tracklist  */}
          {songs.map((song) => (
            <li key={song.numberOfSong} className="song-list">
              <span className="number-song">{`${song.numberOfSong}. `}</span>
              <p className="song-title">{song.songTitle}</p>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
