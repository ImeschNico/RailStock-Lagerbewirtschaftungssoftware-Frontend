import React, { useEffect, useState } from "react";
import { fetchBestandByArtNumber } from "../data/api";
import { BestandTabelle } from "./BestandTabelle";

export const BestandListe = ({ artNumber }) => {
  const [bestand, setBestand] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!artNumber) return;

    const fetchBestand = async () => {
      setLoading(true);
      try {
        const data = await fetchBestandByArtNumber(artNumber);
        setBestand(data);
      } catch (err) {
        console.error(err);
        setBestand([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBestand();
  }, [artNumber]);

  if (loading) return <p>Lade...</p>;
  if (!artNumber) return <p>Bitte Art Nr eingeben</p>;
  if (!bestand || bestand.length === 0) return <p>Keine Lok gefunden</p>;

  const lokData = bestand[0].lok;

  return (
    <div className="lok-container">
      <div className="lok-card">
        <h3>
          <strong>Hersteller:</strong> {lokData.herstellerName}
        </h3>
        <p>
          <strong>Art. Nr:</strong> {lokData.artNumber}
        </p>
        <p>
          <strong>Bezeichnung:</strong> {lokData.bezeichnung}
        </p>
        <p>
          <strong>Typ:</strong> {lokData.typ}
        </p>
        <p>
          <strong>Modell:</strong> {lokData.modell}
        </p>
        <p>
          <strong>Stromart:</strong> {lokData.stromart}
        </p>
        <p>
          <strong>Spur:</strong> {lokData.spur}
        </p>
        <p>
          <strong>Epoche:</strong> {lokData.epoche}
        </p>
        <p>
          <strong>Betriebsart:</strong> {lokData.betriebsart}
        </p>
      </div>

      <div className="bestand-card">
        <BestandTabelle
          bestand={bestand}
          setBestand={setBestand}
          lokId={lokData.lokId}
        />
      </div>
    </div>
  );
};
