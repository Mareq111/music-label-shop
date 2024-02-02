import React from "react";
import RadioInput from "./../UI/Inputs/RadioInput";
import "./ChooserVersionRadio.scss";
export default function ChooserVersionRadio() {
  return (
    <div className="div-chooser-text-all">
      <h2 className="h2-radio-chooser">Choose Your Version</h2>
   
    <div className="div-radio-chooser">
      
      <RadioInput
        radioLabel="CD"
        radioId="radio1"
        radioName="version"
        radioValue="1"
        radioAriaLabel="Radio 1"
        radioKey="1"
      />
      <RadioInput
        radioLabel="Digital"
        radioId="radio2"
        radioName="version"
        radioValue="2"
        radioAriaLabel="Radio 2"
        radioKey="2"
      />
      <RadioInput
        radioLabel="Limited Edition"
        radioId="radio3"
        radioName="version"
        radioValue="3"
        radioAriaLabel="Radio 3"
        radioKey="3"
      />
      <RadioInput
        radioLabel="Mystery Box"
        radioId="radio4"
        radioName="version"
        radioValue="4"
        radioAriaLabel="Radio 4"
        radioKey="4"
      />
    </div>
    </div>
  );
}
