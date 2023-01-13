import React, { useState } from "react";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";

function VehicleList({ model, type, imageSrc, borrowDate, returnDate, id }) {
  const pathToImages = `${import.meta.env.VITE_BACKEND_URL}${imageSrc}`;
  const [show, setShow] = useState(true);
  return (
    <div className="loanList">

{show && <li className= "dash_vehicle_elements_list">
      <div className= "dash_vehicle_elements_list_image">
        <img src={pathToImages} alt="profile of our horse" />
      </div>
      <div className="dash_vehicle_elements_list_paragraph description">
        <div>
        <p className="boldText">{model}</p>
        <p>{type}</p>
        </div>
        </div>
        <div>
        <p>Borrowing date : {borrowDate}</p>
        <p>Return date : {returnDate}</p>
        </div>
      <div>
        <button type="button" className="secondaryButton" onClick={() => setShow(false)}>
          Cancel
        </button>
      </div>
    </li>
}
    </div>
  );
}

export default VehicleList;

VehicleList.propTypes = {
  image: Proptypes.string.isRequired,
  model: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
};
