import React from "react";
import IconArrowBack from "../Icons/IconArrowBack";
import "./BtnArrowBack.scss";

export default function BtnArrowBack() {
  return (
    <button className="btn-arrow-back" type="button" aria-label="Comeback icon">
      <IconArrowBack />
    </button>
  );
}
