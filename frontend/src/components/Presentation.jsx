import React from "react";
import Trophee from "../assets/black-mount-icon-trophee.svg";

function Presentation() {
  return (
    <div className="vehicleOfTheMonthContainer">
      <div className="trophee">
        <img src={Trophee} alt="Trophee" />
      </div>
      <div className="vehicleContent">
        <h3>Vehicle of the month</h3>
        <div className="horseInfo">
          <h4>Altesse</h4>
          <div className="horseCaracteristics">
            <div>
              <p>
                <span className="label">Type:</span> Horse
              </p>
              <p>
                <span className="label">Horsepower:</span> 1cv
              </p>
            </div>
            <div>
              <p>
                <span className="label">Nb of seats:</span> 2
              </p>
              <p>
                <span className="label">Mileage:</span> 1562 kms
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="horseImage"
        src={`${
          import.meta.env.VITE_BACKEND_URL
        }/assets/vehicles/black-mount-vehicle-image-horse-altesse.jpg`}
        alt="altesse"
      />
    </div>
  );
}

export default Presentation;
