const BASE_URL = "http://localhost:8080/api";

export const fetchBestandByArtNumber = async (artNumber) => {
  const res = await fetch(`${BASE_URL}/bestand/lok/${artNumber}`);
  if (!res.ok) throw new Error("Fehler beim Laden des Bestandes");
  return res.json();
};

export const fetchUpdateBestand = async ({
  artNumber,
  regal,
  tablar,
  menge,
}) => {
  const res = await fetch(`${BASE_URL}/bestand/updateBestand`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ artNumber, regal, tablar, menge }),
  });
  return res.json();
};

export const fetchTransferBestand = async ({
  artNumber,
  vonRegal,
  vonTablar,
  zuRegal,
  zuTablar,
  menge,
}) => {
  const res = await fetch(`${BASE_URL}/bestand/transferBestand`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      artNumber,
      vonRegal,
      vonTablar,
      zuRegal,
      zuTablar,
      menge,
    }),
  });
  return res.json();
};

//API aufruf für die Dropdowns
export const fetchFilter = async (filterObj) => {
  const params = new URLSearchParams();

  Object.entries(filterObj).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const res = await fetch(`${BASE_URL}/loks/filter?${params.toString()}`);
  if (!res.ok) throw new Error("Fehler beim Abrufen der Daten");
  return res.json();
};

//Api Aufruf für die freie Textsuche
export const fetchSearchFilter = async (searchParams) => {
  const params = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const res = await fetch(`${BASE_URL}/loks/filter?${params.toString()}`);
  if (!res.ok) throw new Error("Fehler beim Aufrufen der Daten");
  return res.json();
};
