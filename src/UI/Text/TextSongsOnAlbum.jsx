/* import "./TextSongsOnAlbum.scss";

export default function TextSongsOnAlbum({ songs }) {
  return (
    <article className="songs-on-album-article">
      <div className="title-songs-all-div">
        <h3 className="songs-on-album-h">Track list</h3>
        <ol className="songs-on-album-ol">
       
          {songs && Array.isArray(songs) ? (
            songs.map((song) => (
              <li key={song.numberOfSong} className="song-list">
                <span className="number-song">{`${song.numberOfSong}. `}</span>
                <p className="song-title">{song.songTitle}</p>
              </li>
            ))
          ) : (
            <li>No songs available</li>
          )}
        </ol>
      </div>
    </article>
  );
}  */

import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./TextSongsOnAlbum.scss";

export default function TextSongsOnAlbum({ albumKey }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    console.log("Album Key:", albumKey);
    console.log("Songs:", songs);
    const fetchSongsFromFirebase = async () => {
      try {
        if (!albumKey) return;

        const snapshot = await firebase
          .database()
          .ref(`categories/albums/products/${albumKey}/songs`)
          .once("value");

        const songsData = snapshot.val();

        if (songsData) {
          const songsArray = Object.values(songsData);
          setSongs(songsArray);
        } else {
          setSongs([]);
        }
      } catch (error) {
        console.error("Error fetching songs from Firebase:", error);
      }
    };

    fetchSongsFromFirebase();
  }, [albumKey]);

  return (
    <article className="songs-on-album-article">
      <div className="title-songs-all-div">
        <h3 className="songs-on-album-h">Track list</h3>
        <ol className="songs-on-album-ol">
          {songs.length > 0 ? (
            songs.map((song, index) => (
              <li key={index} className="song-list">
                <span className="number-song">{`${song.numberOfSong}. `}</span>
                <p className="song-title">{song.songTitle}</p>
              </li>
            ))
          ) : (
            <li>No songs available</li>
          )}
        </ol>
      </div>
    </article>
  );
}
 


/* do poprawy cale to */