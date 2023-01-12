import React from "react";
import Proptypes from "prop-types";

function HorseCard({ image, model, type }) {
  return (
    <div className="horseCard">
      <img alt="horse" src={image} />
      <h4>{model}</h4>
      <p>{type}</p>
      <button type="button" className="primaryButton">Book</button>
    </div>
  );
}
HorseCard.propTypes = {
  image: Proptypes.string.isRequired,
  model: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
};
export default HorseCard;
