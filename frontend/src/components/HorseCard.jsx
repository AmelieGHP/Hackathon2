import React from "react";

function HorseCard({ image, model, type }) {
  return (
    <div className="horseCard">
      <img alt="horse" src={image} />
      <h3>{model}</h3>
      <h4>{type}</h4>
    </div>
  );
}

export default HorseCard;
