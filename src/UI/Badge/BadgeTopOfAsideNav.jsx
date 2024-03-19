/* eslint-disable react/prop-types */
import "./BadgeTopAsideNav.scss";
import BtnNormalX from "../Buttons/BtnNormalX";

export default function BadgeTopOfAsideNav({ nameOfNavPage }) {
  return (
    <div className="top-of-aside-nav">
      <h2 className="h-top-aside-nav">{nameOfNavPage}</h2>
      <BtnNormalX />
    </div>
  );
}
