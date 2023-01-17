import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import isWithinInterval from "date-fns/isWithinInterval";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import UserContext from "@components/context/UserContext";
import axios from "axios";
import Header from "../components/Header";
import Banner from "../components/Banner";

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
      let id_user_forSure = id_user;
      if (id_user === undefined || id_user === null) {
        id_user_forSure = 2;
        console.log(id_user_forSure);
      }
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/postLoan`, {
          id_user_forSure,
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
  return (
    <>
      <Header />
      <div className="rightContainer">
        <Banner />
        <div className="horseInfo">
          <div className="horseCardInfo">
            <div className="imageContainer">
              {vehicle && (
                <img
                  alt="horse"
                  src={`${import.meta.env.VITE_BACKEND_URL}${vehicle.image}`}
                />
              )}
            </div>
            <div>
              <h3>{vehicle && vehicle.model}</h3>
              <p>
                {" "}
                <span className="accentText boldText">Type : </span>
                {vehicle && vehicle.type}
              </p>
              <p>
                {" "}
                <span className="accentText boldText">Horsepower : </span>{" "}
                {vehicle && vehicle.horsepower}
              </p>
              <p>
                {" "}
                <span className="accentText boldText">Seats : </span>{" "}
                {vehicle && vehicle.nb_of_places}
              </p>
              <p>
                {" "}
                <span className="accentText boldText">Mileage : </span>{" "}
                {vehicle && vehicle.nb_of_km} km
              </p>
              <p className="accentText boldText">Description : </p>
              <p>
                {" "}
                Horses share many of the same physiologic characteristics of
                people and domestic pets, in that they have a circulatory
                system, a respiratory system, a nervous system, and so on.
              </p>
            </div>
          </div>
          <div className="booking">
            <div className="calendarContainer">
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
            </div>
            <div className="confirm">
              <p className="boldText">Book this vehicle </p>
              <p>
                From {borrowingDate || "..."} to {returnDate || "..."}
              </p>
              <button
                className="primaryButton"
                type="button"
                onClick={(e) => handleClick(e)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorseInfo;
