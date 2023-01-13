import React, { useState, useEffect } from "react";
import axios from "axios";
import Proptypes from "prop-types";
import LoansList from "../components/LoansList";

function Reservation({ user }) {
  console.warn(user);
  const [allLoansById, setAllLoansById] = useState([]);
  // const pathToImages = `${import.meta.env.VITE_BACKEND_URL}${image}`;
  const getAllLoansById = (id) => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/reservation/${id}`)
      .then(([res]) => {
        setAllLoansById(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllLoansById(user.id_user);
    console.warn(allLoansById);
  }, []);

  return (
    <div>
      {allLoansById &&
        allLoansById.map((el) => {
          return (
            <LoansList
              key={el.id_loan}
              borrowDate={el.borrowing_date}
              returnDate={el.return_date}
            />
          );
        })}
    </div>
  );
}

export default Reservation;

Reservation.propTypes = {
  user: Proptypes.shape({
    email: Proptypes.string.isRequired,
    firstname: Proptypes.string.isRequired,
    id_user: Proptypes.number.isRequired,
    lastname: Proptypes.string.isRequired,
    phone: Proptypes.string.isRequired,
    type_of_license: Proptypes.string.isRequired,
  }),
};
