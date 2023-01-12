import React, { useState, useEffect } from "react";
import axios from "axios";
import VehicleList from "./VehicleList";

function OurVehicles() {
  const [allCars, setAllCars] = useState([]);

  const getAllCars = () => {
    axios
      .get(`http://localhost:5000/vehicles`)
      .then((res) => {
        setAllCars(res.data.slice(0, 3));
        console.warn(allCars);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <ul className="dash_vehicle_elements">
      {allCars.length > 0 &&
        allCars.map((el) => {
          return (
            <VehicleList model={el.model} type={el.type} image={el.image} />
          );
        })}
    </ul>
  );
}

export default OurVehicles;
