import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import isWithinInterval from "date-fns/isWithinInterval";
// import  areIntervalsOverlapping  from 'date-fns/areIntervalsOverlapping';
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import UserContext from "@components/context/UserContext";
import axios from "axios";
// import Header from "../components/Header";

function HorseInfo() {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const { id_user } = useContext(UserContext).user;
  const [vehicle, setVehicle] = useState("");
  const [notAvailable, setNotAvailable] = useState([]);
  const [borrowingDate, setBorrowingDate] = useState("");
  const [returnDate, setreturnDate] = useState("");

  const getHorse = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${id}`, [id])
      .then((result) => {
        setVehicle(result.data[0]);
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/loan/${id}`, [id])
          .then((result) => {
            console.log(result.data);
            if (result.data.length >= 0) {
              for (let i = 0; i < result.data.length; i++) {
                const start = result.data[i].borrowing_date;
                const end = result.data[i].return_date;
                const range = [start, end];
                setNotAvailable((notAvailable) => [...notAvailable, range]);
              }
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (returnDate !== "") {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/postLoan`, {
          id_user,
          id,
          borrowingDate,
          returnDate,
        })
        .then((result) => {
          if (result) {
            navigate("/home", {});
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else return alert("please select a date range in the calendar");
  };
  const showRange = (e) => {
    const startDate = format(e[0], `yyyy-MM-dd`);
    const endDate = format(e[1], `yyyy-MM-dd`);
    setBorrowingDate(startDate);
    setreturnDate(endDate);
  };

  useEffect(() => {
    getHorse();
  }, []);

  const disableTile = (e) => {
    if (notAvailable[0]) {
      let result = false;
      for (let i = 0; i < notAvailable.length; i++) {
        if (
          isWithinInterval(e.date, {
            start: parseISO(notAvailable[i][0]),
            end: parseISO(notAvailable[i][1]),
          })
        ) {
          result = true;
        }
      }
      return result;
    }
  };
  console.log(notAvailable);
  return (
    <div className="horseInfo">
      {/* <Header /> */}
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
        selectRange
        returnValue="range"
        tileDisabled={(e) => disableTile(e)}
        onChange={(e) => showRange(e)}
      />

      <button
        className="primaryButton"
        type="button"
        onClick={(e) => handleClick(e)}
      >
        Book this vehicle
      </button>
    </div>
  );
}

export default HorseInfo;
