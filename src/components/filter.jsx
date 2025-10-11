import React, { useState } from "react";
import { Dropdown } from "./dropdown";
import "../css/Style.css";

export const Filter = ({ onFilterChange }) => {
  const [epoche, setEpoche] = useState("");
  const [spur, setSpur] = useState("");
  const [betriebsart, setBetriebsart] = useState("");
  const [typ, setTyp] = useState("");
  const [stromart, setStromart] = useState("");

  const handleChange = () => {
    onFilterChange({ epoche, spur, betriebsart, typ, stromart });
  };

  return (
    <div className="filter-container">
      <Dropdown
        label="Epoche"
        value={epoche}
        onChange={(v) => {
          setEpoche(v);
          handleChange();
        }}
        options={["I", "II", "III", "IV", "V", "VI"]}
      />
      <Dropdown
        label="Spur"
        value={spur}
        onChange={(v) => {
          setSpur(v);
          handleChange();
        }}
        options={["Z", "N", "TT", "H0", "0"]}
      />
      <Dropdown
        label="Betriebsart"
        value={betriebsart}
        onChange={(v) => {
          setBetriebsart(v);
          handleChange();
        }}
        options={["Digital", "Analog", "MFX"]}
      />
      <Dropdown
        label="Typ"
        value={typ}
        onChange={(v) => {
          setTyp(v);
          handleChange();
        }}
        options={["Dampf", "Diesel", "Elektro"]}
      />
      <Dropdown
        label="Stromart"
        value={stromart}
        onChange={(v) => {
          setStromart(v);
          handleChange();
        }}
        options={["Gleichstrom", "Wechselstrom"]}
      />
    </div>
  );
};
