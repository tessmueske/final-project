import React from "react";

function Coffee({ coffee }) {
    return (
      <div>
        <h2>{coffee.origin}</h2>
        <p><strong>Harvest Period:</strong> {coffee["harvest period"]}</p>
        <p><strong>Tasting Notes:</strong> {coffee["tasting notes"]}</p>
        <p><strong>Aromas:</strong> {coffee.aromas}</p>
        <p><strong>Pairings:</strong> {coffee.pairings}</p>
      </div>
    );
  }
  

export default Coffee;