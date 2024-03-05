/* eslint-disable react/prop-types */


export default function TextDistributorDetails({distributor}) {
  return (
    <div className="distributor-div">
      <h3 className="detailedInfo-h">Distributor:</h3>
      <p className="detailedInfo-p">{distributor}</p>
    </div>
  );
}
