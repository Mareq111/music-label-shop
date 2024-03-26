/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import RadioInput from "./../UI/Inputs/RadioInput";
import "./ChooserVersionRadio.scss";
export default function ChooserVersionRadio({ onVersionChange }) {
  const [selectedVersion, setSelectedVersion] = useState(null);

  const handleVersionChange = (event) => {
    const version = event.target.value;
    setSelectedVersion(version);
    onVersionChange(version);
    console.log("Selected version:", version);
  };

  return (
    <div className="div-chooser-text-all">
      <h2 className="h2-radio-chooser">Choose Your Version</h2>

      <div className="div-radio-chooser">
        <RadioInput
          radioLabel="CD"
          radioId="radio1"
          radioName="version"
          radioValue="CD"
          radioAriaLabel="Radio 1"
          radioKey="1"
          onChange={handleVersionChange}
        />
        <RadioInput
          radioLabel="Digital"
          radioId="radio2"
          radioName="version"
          radioValue="Digital"
          radioAriaLabel="Radio 2"
          radioKey="2"
          onChange={handleVersionChange}
        />

        <RadioInput
          radioLabel="Usb card"
          radioId="radio3"
          radioName="version"
          radioValue="Usb card"
          radioAriaLabel="Radio 3"
          radioKey="3"
          onChange={handleVersionChange}
        />
        <RadioInput
          radioLabel="Limited edition"
          radioId="radio4"
          radioName="version"
          radioValue="Limited edition"
          radioAriaLabel="Radio 4"
          radioKey="4"
          onChange={handleVersionChange}
        />
      </div>
    </div>
  );
}
