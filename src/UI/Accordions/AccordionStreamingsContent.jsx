import React from "react";
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
        <div className="icon-wrapper">
          <IconLogoYoutube />
        </div>
        <div className="icon-wrapper">
          <IconLogoSpotify />
        </div>
        <div className="icon-wrapper">
          <IconLogoApple />
        </div>
        <div className="icon-wrapper">
          <IconLogoSoundcloud />
        </div>
        <div className="icon-wrapper">
          <IconLogoDeezer />
        </div>
      </div>
    </div>
  );
}
