/* 
import IconLogoYoutube from "../Icons/Icon-Logo/IconLogoYoutube.jsx";
import IconLogoSpotify from "../Icons/Icon-Logo/IconLogoSpotify.jsx";
import IconLogoApple from "../Icons/Icon-Logo/IconLogoApple.jsx";
import IconLogoSoundcloud from "../Icons/Icon-Logo/IconLogoSoundcloud.jsx";
import IconLogoDeezer from "../Icons/Icon-Logo/IconLogoDeezer.jsx";
import "./AccordionStreamingsContent.scss";

export default function AccordionStreamingsContent() {
  return (
    <div className="div-all-streaming-logos">
      <p className="p-streaming-logos">Pick your favorite streaming app.</p>
      <div className="streaming-logos-div">
        <button type="button" tabIndex={0} className="icon-wrapper">
          <IconLogoYoutube />
        </button>
        <button type="button" tabIndex={0} className="icon-wrapper">
          <IconLogoSpotify />
        </button>
        <button type="button" tabIndex={0} className="icon-wrapper">
          <IconLogoApple />
        </button>
        <button type="button" tabIndex={0} className="icon-wrapper">
          <IconLogoSoundcloud />
        </button>
        <button type="button" tabIndex={0} className="icon-wrapper">
          <IconLogoDeezer />
        </button>
      </div>
    </div>
  );
} */

import IconLogoYoutube from "../Icons/Icon-Logo/IconLogoYoutube.jsx";
import IconLogoSpotify from "../Icons/Icon-Logo/IconLogoSpotify.jsx";
import IconLogoApple from "../Icons/Icon-Logo/IconLogoApple.jsx";
import IconLogoSoundcloud from "../Icons/Icon-Logo/IconLogoSoundcloud.jsx";
import IconLogoDeezer from "../Icons/Icon-Logo/IconLogoDeezer.jsx";
import "./AccordionStreamingsContent.scss";

export default function AccordionStreamingsContent() {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="div-all-streaming-logos">
      <p className="p-streaming-logos">Pick your favorite streaming app.</p>
      <div className="streaming-logos-div">
        <button
          type="button"
          className="icon-wrapper"
          onClick={() => openLink("https://www.youtube.com")}
          tabIndex={0}
        >
          <IconLogoYoutube />
        </button>
        <button
          type="button"
          className="icon-wrapper"
          onClick={() => openLink("https://www.spotify.com")}
          tabIndex={0}
        >
          <IconLogoSpotify />
        </button>
        <button
          type="button"
          className="icon-wrapper"
          onClick={() => openLink("https://www.apple.com/apple-music/")}
          tabIndex={0}
        >
          <IconLogoApple />
        </button>
        <button
          type="button"
          className="icon-wrapper"
          onClick={() => openLink("https://soundcloud.com")}
          tabIndex={0}
        >
          <IconLogoSoundcloud />
        </button>
        <button
          type="button"
          className="icon-wrapper"
          onClick={() => openLink("https://www.deezer.com")}
          tabIndex={0}
        >
          <IconLogoDeezer />
        </button>
      </div>
    </div>
  );
}
