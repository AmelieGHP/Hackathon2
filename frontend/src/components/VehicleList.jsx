import React from "react";
import Proptypes from "prop-types";

function VehicleList({ model, type, image }) {
  const pathToImages = `${import.meta.env.VITE_BACKEND_URL}${image}`;
  return (
    <li className="dash_vehicle_elements_list">
      <div className="dash_vehicle_elements_list_image">
        <img src={pathToImages} alt="profile of our horse" />
      </div>
      <div className="dash_vehicle_elements_list_paragraph">
        <p>{model}</p>
        <p>{type}</p>
      </div>
      <div>
        <button type="button">Book</button>
      </div>
    </li>
  );
}

export default VehicleList;

VehicleList.propTypes = {
  image: Proptypes.string.isRequired,
  model: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
};
