import React from "react";
import { useLocation } from "react-router-dom";

export const HerstellerBestand = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const hersteller = params.get("hersteller");

  return (
    <div>
      <h2>Bestand von: {hersteller}</h2>
    </div>
  );
};
