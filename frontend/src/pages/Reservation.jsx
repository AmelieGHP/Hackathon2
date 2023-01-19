import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Proptypes from "prop-types";
import UserContext from "@components/context/UserContext";
import LoansList from "../components/LoansList";
import Header from "../components/SideBarMenu";
import Banner from "../components/HeaderBannerHorses";

function Reservation() {
  const { user } = useContext(UserContext);
  console.warn(user);
  const [allLoansById, setAllLoansById] = useState([]);
  const [reset, setReset] = useState(true);
  const getAllLoansById = (id) => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/reservation/${id}`)
      .then((res) => {
        console.log(res);
        setAllLoansById(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllLoansById(user.id_user);
  }, [reset]);

  return (
    <div className="primaryContainer">
      <Header />
      <div className="rightContainer">
        <Banner />
        <div className="rightContainerContent">
          {allLoansById ? (
            allLoansById.map((el) => {
              console.log(el);
              return (
                <LoansList
                  key={el.id_loan}
                  id_loan={el.id_loan}
                  model={el.model}
                  type={el.type}
                  borrowDate={el.borrowing_date}
                  returnDate={el.return_date}
                  imageSrc={el.image}
                  reset={reset}
                  setReset={setReset}
                />
              );
            })
          ) : (
            <p>No reservation yet</p>
          )}
        </div>
      </div>
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
