/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
