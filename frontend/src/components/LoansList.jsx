import React from "react";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";

function VehicleList({ model, type, image, id }) {
  const pathToImages = `${import.meta.env.VITE_BACKEND_URL}${image}`;
  const navigate = useNavigate();
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
        <button type="button" onClick={() => navigate(`/info/${id}`)}>
          Book
        </button>
      </div>
    </li>
  );
}

export default VehicleList;

VehicleList.propTypes = {
  image: Proptypes.string.isRequired,
  model: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
};
