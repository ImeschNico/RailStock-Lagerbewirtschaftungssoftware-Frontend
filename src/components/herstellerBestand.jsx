import React from "react";
import { useLocation } from "react-router-dom";
import { fetchBestandByHersteller } from "../data/api";
import { useState, useEffect } from "react";

export const HerstellerBestand = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const hersteller = params.get("hersteller");
  const [bestand, setBestand] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hersteller) return;

    const fetchBestand = async (herstellerName) => {
      setLoading(true);
      try {
        const data = await fetchBestandByHersteller(herstellerName);
        setBestand(data);
      } catch (err) {
        console.error(err);
        setBestand([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBestand(hersteller);
  }, [hersteller]);

  if (loading) return <p>Lade...</p>;
  if (!bestand || bestand.length === 0) return <p>Keine Lok gefunden</p>;

  const lokData = bestand[0].lok;

  return (
    <div>
      <h2>Bestand von: {hersteller}</h2>
      <div className="lok-container">
        {bestand.map((b) => (
          <div key={b.id} className="lok-card">
            <p>
              <strong>Art. Nr: </strong>
              {b.lok.artNumber}
            </p>
            <p>
              <strong>Modell: </strong>
              {b.lok.modell}
            </p>
            <p>
              <strong>Betriebsart: </strong>
              {b.lok.betriebsart}
            </p>
            <p>
              <strong>Bestand: </strong>
              {b.menge}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
