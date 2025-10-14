import "./App.css";
import { Home } from "./Pages/Home";
import { Layout } from "./components/layout";
import { Route, Routes } from "react-router-dom";
import { Bestand } from "./Pages/Bestand";
import { Suche } from "./Pages/Suche";
import { Lagerplatz } from "./Pages/Lagerplatz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/bestand/:lokId" element={<Bestand />} />
        <Route path="/suche" element={<Suche />} />
        <Route path="/lagerplatz" element={<Lagerplatz />} />
      </Route>
    </Routes>
  );
}

export default App;
