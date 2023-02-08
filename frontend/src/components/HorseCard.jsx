import React, { useEffect, useState } from "react";
import Proptypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { areIntervalsOverlapping } from "date-fns/esm";
import { parseISO } from "date-fns";

function HorseCard({ image, model, type, startDate, endDate, id, search }) {
  const [notAvailable, setNotAvailable] = useState([]);
  const [hideCard, setHideCard] = useState(false);
  const getLoans = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/loan/${id}`, [id])
      .then((result) => {
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
        console.warn(err);
      });
  };

  const hiddenCard = () => {
    setHideCard(false);
    if (startDate !== "" && endDate !== "")
      if (notAvailable[0]) {
        for (let i = 0; i < notAvailable.length; i++) {
          if (
            areIntervalsOverlapping(
              {
                start: parseISO(startDate),
                end: parseISO(endDate),
              },
              {
                start: parseISO(notAvailable[i][0]),
                end: parseISO(notAvailable[i][1]),
              }
            )
          ) {
            setHideCard(true);
          }
        }
      }
  };

  useEffect(() => {
    getLoans();
    hiddenCard();
  }, [search]);

  return (
    <div className={hideCard ? "hidden" : "horseCard"}>
      <img alt="horse" src={image} />
      <div className="content">
        <h4>{model}</h4>
        <p>{type}</p>
      </div>
      <Link to={`/info/${id}`}>
        <button type="button" className="primaryButton">
          Book
        </button>
      </Link>
    </div>
  );
}
HorseCard.propTypes = {
  image: Proptypes.string.isRequired,
  model: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  startDate: Proptypes.string.isRequired,
  endDate: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  search: Proptypes.node.isRequired,
};
export default HorseCard;
