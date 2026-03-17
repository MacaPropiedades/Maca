import { useState, useEffect } from "react";

export default function App() {
  const [properties, setProperties] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("maca_properties")) || [];
    setProperties(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("maca_properties", JSON.stringify(properties));
  }, [properties]);

  const addProperty = () => {
    if (!name) return;
    setProperties([...properties, { id: Date.now(), name }]);
    setName("");
  };

  return (
    <div style={{padding:20}}>
      <h1>Maca</h1>
      <input
        placeholder="Propiedad"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addProperty}>Agregar</button>

      <ul>
        {properties.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
