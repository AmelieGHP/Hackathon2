import React, { useState } from "react";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoanList({
  model,
  type,
  imageSrc,
  borrowDate,
  returnDate,
  reset,
  setReset,
  id_loan,
}) {
  const pathToImages = `${import.meta.env.VITE_BACKEND_URL}${imageSrc}`;

  const deleteLoan = () => {
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/deleteLoan/?id_loan=${id_loan}`
      )
      .then(() => {
        setReset(!reset);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="loanList">
      <li className="dash_vehicle_elements_list">
        <div className="dash_vehicle_elements_list_image">
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
          <button
            type="button"
            className="secondaryButton"
            onClick={() => deleteLoan()}
          >
            Cancel
          </button>
        </div>
      </li>
    </div>
  );
}

export default LoanList;

LoanList.propTypes = {
  image: Proptypes.string.isRequired,
  model: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
};
