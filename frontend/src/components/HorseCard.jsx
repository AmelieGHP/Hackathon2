import React from "react";
import Proptypes from "prop-types";

function HorseCard({ image, model, type }) {
  return (
    <div className="horseCard">
      <img alt="horse" src={image} />
      <h3>{model}</h3>
      <h4>{type}</h4>
    </div>
  );
}
HorseCard.propTypes = {
  image: Proptypes.string.isRequired,
  model: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
};
export default HorseCard;
