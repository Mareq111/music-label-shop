/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

/* import { useState } from "react";
import RadioInput from "./../UI/Inputs/RadioInput";
import "./ChooserVersionRadio.scss";

export default function ChooserVersionRadio({ onVersionChange, prodData }) {
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [radioId, setRadioId] = useState(null);
  const generateProductId = (prodData, version) => {
    return `${version}`;
  };
  const handleVersionChange = (event, version) => {
    const id = generateProductId(prodData, version);
    setSelectedVersion(version);
    setRadioId(id);
    onVersionChange(version, id);
    console.log("Selected version:", version);
  };
  return (
    <div className="div-chooser-text-all">
      <h2 className="h2-radio-chooser">Choose Your Version</h2>

      <div className="div-radio-chooser">
        <RadioInput
          radioLabel="CD"
          radioId={generateProductId(prodData.itemTitle, "CD")}
          radioName="version"
          radioValue="CD"
          radioAriaLabel="Radio 1"
          radioKey="1"
          onChange={(event) => handleVersionChange(event, "CD")}
        />
        <RadioInput
          radioLabel="Digital"
          radioId={generateProductId(prodData, "Digital")}
          radioName="version"
          radioValue="Digital"
          radioAriaLabel="Radio 2"
          radioKey="2"
          onChange={(event) => handleVersionChange(event, "Digital")}
        />

        <RadioInput
          radioLabel="Usb card"
          radioId={generateProductId(prodData, "Usb card")}
          radioName="version"
          radioValue="Usb card"
          radioAriaLabel="Radio 3"
          radioKey="3"
          onChange={(event) => handleVersionChange(event, "Usb-card")}
        />
        <RadioInput
          radioLabel="Limited edition"
          radioId={generateProductId(prodData, "Limited edition")}
          radioName="version"
          radioValue="Limited edition"
          radioAriaLabel="Radio 4"
          radioKey="4"
          onChange={(event) => handleVersionChange(event, "Limited-edition")}
        />
      </div>
    </div>
  );
}
 */

/* import { useState } from "react";
import RadioInput from "./../UI/Inputs/RadioInput";
import "./ChooserVersionRadio.scss";

export default function ChooserVersionRadio({ onVersionChange, prodData }) {
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [radioId, setRadioId] = useState(null);

  const generateProductId = (prodData, version) => {
    return `${prodData.titleItem}_${version}`;
  };

  const handleVersionChange = (event, version) => {
    const id = generateProductId(prodData, version);
    setSelectedVersion(version);
    setRadioId(id);
    onVersionChange(version, id);

  };
  console.log("Item Versions:", prodData.itemVersions);

  const { itemVersions = [] } = prodData;

  return (
    <div className="div-chooser-text-all">
      <h2 className="h2-radio-chooser">Choose Your Version</h2>
      <div className="div-radio-chooser">
        {itemVersions.map(({ numberOfVersion, version }) => (
          <RadioInput
            key={numberOfVersion}
            radioLabel={version}
            radioId={generateProductId(prodData, version)}
            radioName="version"
            radioValue={version}
            radioAriaLabel={`Radio ${numberOfVersion}`}
            radioKey={numberOfVersion.toString()}
            onChange={(event) => handleVersionChange(event, version)}
          />
        ))}
      </div>
    </div>
  );
}
 */

import { useState } from "react";
import "./ChooserVersionRadio.scss";
import RadioInput from "../UI/Inputs/RadioInput";

export default function ChooserVersionRadio({ onVersionChange, productData }) {
  const [selectedVersion, setSelectedVersion] = useState(null);

  const generateProductId = (productData, version) => {
    return `${productData.titleItem}_${version}`;
  };

  const handleVersionChange = (event, version) => {
    const id = generateProductId(productData, version);
    setSelectedVersion(version);
    onVersionChange(version, id);
  };

  return (
    <div className="div-chooser-text-all">
      <h2 className="h2-radio-chooser">Choose Your Version</h2>
      <div className="div-radio-chooser">
        {productData.itemVersions && productData.itemVersions.length > 0 ? (
          productData.itemVersions.map(({ numberOfVersion, id, version }) => (
            <RadioInput
              key={id}
              radioLabel={version}
              radioId={id}
              radioName="version"
              radioValue={version}
              radioAriaLabel={`Radio ${id}`}
              radioKey={id.toString()}
              onChange={(event) => handleVersionChange(event, version)}
            />
          ))
        ) : (
          <p>No versions available</p>
        )}
      </div>
    </div>
  );
}
