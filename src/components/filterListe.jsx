import React from "react";
import { useState } from "react";
import { Filter } from "./filter";
import { fetchFilter, fetchSearchFilter } from "../data/api";
import { SearchField } from "./SearchField";
import { Button } from "./button";

export const FilterListe = () => {
  const [loks, setLoks] = useState([]);
  const [error, setError] = useState("");

  const [artNumber, setArtNumber] = useState("");
  const [hersteller, setHersteller] = useState("");
  const [modell, setModell] = useState("");

  const handleSearch = async () => {
    try {
      const searchParams = {
        artNumber,
        modell,
        hersteller,
      };
      const data = await fetchSearchFilter(searchParams);
      setLoks(data);
    } catch (err) {
      console.error(err);
      setError("Fehler beim Laden der Daten");
    }
  };

  const handleSearchFieldChange = (field) => (value) => {
    let params = {
      artNumber,
      modell,
      herstellerName: hersteller,
    };

    switch (field) {
      case "hersteller":
        setHersteller(value);
        params.herstellerName = value;
        break;
      case "artNumber":
        setArtNumber(value);
        params.artNumber = value;
        break;
      case "modell":
        setModell(value);
        params.modell = value;
        break;
      default:
        break;
    }
    handleSearch(params);
  };

  const handleFilterChange = async (filters) => {
    try {
      const data = await fetchFilter(filters);
      setLoks(data);
    } catch (err) {
      console.error(err);
      setError("Fehler beim Laden der Daten");
    }
  };

  return (
    <div className="filter-section">
      {/*Freie TextSuche */}
      <div className="search-fields">
        <SearchField
          label="Hersteller"
          onSearch={handleSearchFieldChange("hersteller")}
        />
        <SearchField
          label="Artikel Nummer"
          onSearch={handleSearchFieldChange("artNumber")}
        />
        <SearchField
          label="Modell"
          onSearch={handleSearchFieldChange("modell")}
        />
      </div>

      <Filter onFilterChange={handleFilterChange} />
      {error && <p>{error}</p>}

      <div className="lok-container">
        {loks.map((lok) => (
          <div className="lok-card" key={lok.id}>
            {lok.bezeichnung}
          </div>
        ))}
      </div>
    </div>
  );
};
