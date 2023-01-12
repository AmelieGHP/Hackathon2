import React, { useEffect, useState } from "react";
import Footer from "@components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

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
      {vehicle && <p>{vehicle.type}</p>}
      {vehicle && <p>{vehicle.model}</p>}
      {vehicle && <p>{vehicle.horsepower}</p>}
      {vehicle && <p>{vehicle.nb_of_places}</p>}
      {vehicle && <p>{vehicle.nb_of_km}</p>}
      <Footer />
    </div>
  );
}

export default HorseInfo;
