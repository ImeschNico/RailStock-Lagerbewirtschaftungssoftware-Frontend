import React, { useState } from "react";
import { SearchField } from "../components/SearchField";
import "../css/Style.css";
import { FilterListe } from "../components/filterListe";
import { BestandListe } from "../components/bestandListe";

export const Suche = () => {
  return (
    <div className="suche-container">
      <h2>Artikelstamm</h2>

      <FilterListe />
    </div>
  );
};
