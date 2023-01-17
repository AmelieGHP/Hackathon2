import React from "react";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function VehicleList({ model, type, image, id_vehicle }) {
  const pathToImages = `${import.meta.env.VITE_BACKEND_URL}${image}`;
  console.log(pathToImages)
  const navigate = useNavigate();
  return (
    <li className="dash_vehicle_elements_list">
      <div className="dash_vehicle_elements_list_image">
        <img src={pathToImages} alt="profile of our horse" />
      </div>
      <div className="dash_vehicle_elements_list_paragraph">
        <p><strong>{model}</strong></p>
        <p>{type}</p>
      </div>
      <div>
        <Link to={`/info/${id_vehicle}`}>
          <button type="button" className="primaryButton">Book</button>
        </Link>
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
