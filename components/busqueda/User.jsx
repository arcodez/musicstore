import React from "react";

export function User({ name, city }) {
  return (
    <div className="User">
      <h2>Nombre: {name}</h2>
      <p>Ciudad: {city}</p>
    </div>
  );
}
