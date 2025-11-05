import React, { useState } from "react";
import { Button } from "../components/button";
import { LokErstellen } from "../components/lokErstellen";

export const Admin = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h2>Admin</h2>
      <Button
        text={"Neue Lok anlegen"}
        onAnswerClick={() => setShowForm(true)}
      />
      <Button text={"Bestehende Lok anpassen"} />

      {showForm && <LokErstellen />}
    </div>
  );
};
