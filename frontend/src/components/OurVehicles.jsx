import React, { useState, useEffect } from "react";
import axios from "axios";
import VehicleList from "./VehicleList";
import { Link } from "react-router-dom";

function OurVehicles() {
  const [allCars, setAllCars] = useState([]);

  const getAllCars = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
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
      <p className="our_vehicles">Our vehicles</p>
      {allCars.length > 0 &&
        allCars.map((el) => {
          console.warn(el);
          return (
            <VehicleList model={el.model} type={el.type} image={el.image} id_vehicle={el.id_vehicle} />
          );
        })}
      <Link to={"/horseList"} ><button className="clearButton">See all vehicles</button></Link>
    </ul>
  );
}

export default OurVehicles;
