import React, { useState } from "react";
import { createLok } from "../data/api";
import { Button } from "./button";

export const LokErstellen = () => {
  const [artNumber, setArtNumber] = useState("");
  const [bezeichnung, setBezeichnung] = useState("");
  const [typ, setTyp] = useState("");
  const [modell, setModell] = useState("");
  const [stromart, setStromart] = useState("");
  const [spur, setSpur] = useState("");
  const [epoche, setEpoche] = useState("");
  const [betriebsart, setBetriebsart] = useState("");
  const [herstellerName, setHerstellerName] = useState("");

  const [formData, setFormData] = useState({
    artNumber,
    bezeichnung,
    typ,
    modell,
    stromart,
    spur,
    epoche,
    betriebsart,
    herstellerName,
  });

  const labelMap = {
    artNumber: "Artikelnummer",
    bezeichnung: "Bezeichnung",
    typ: "Typ",
    modell: "Modell",
    stromart: "Stromart",
    spur: "Spur",
    epoche: "Epoche",
    betriebsart: "Betriebsart",
    herstellerName: "Hersteller",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gesendete Daten:", formData);
    createLok(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="lok-form">
      <h2 className="lok-form-title">Neue Lok erstellen:</h2>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="lok-form-group">
          <label className="lok-label">{labelMap[key]}</label>
          <input type="text" name={key} value={value} onChange={handleChange} />
        </div>
      ))}

      <Button
        className="lok-form-button"
        text={"Lok hinzufügen"}
        onAnswerClick={handleSubmit}
      />
    </form>
  );
};
