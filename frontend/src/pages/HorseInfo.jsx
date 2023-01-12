import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Calendar from "react-calendar";

function HorseInfo() {
  const params = useParams();
  const { id } = params;
  const [vehicle, setVehicle] = useState("");
  const getHorse = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${id}`, [id])
      .then((result) => {
        setVehicle(result.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getHorse();
  }, []);
  return (
    <div className="horseInfo">
      <Header />
      {vehicle && (
        <img
          alt="horse"
          src={`${import.meta.env.VITE_BACKEND_URL}${vehicle.image}`}
        />
      )}
      <h3>{vehicle && vehicle.model}</h3>
      <p>Type : {vehicle && vehicle.type}</p>
      <p> Horsepower : {vehicle && vehicle.horsepower}</p>
      <p> Seats : {vehicle && vehicle.nb_of_places}</p>
      <p> Mileage : {vehicle && vehicle.nb_of_km} km</p>

      <Calendar
        showNeighboringMonth={false}
        minDetail="month"
        maxDetail="month"
        minDate={new Date()}
        selectRange="true"
        returnValue="range"
      //tileDisabled={}
      //onClickDay={(e) => {
      //   rangeSelected(e);
      // }}
      //tileClassName={(e) => tileSelected(e)}
      />

      <button className="primaryButton" type="button">Book this vehicle</button>

    </div>
  );
}

export default HorseInfo;
