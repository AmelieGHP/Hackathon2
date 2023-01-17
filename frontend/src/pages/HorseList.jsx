import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "@components/context/UserContext";
import axios from "axios";
import HorseCard from "@components/HorseCard";
import Filters from "@components/Filters";
import Header from "../components/Header";
import Banner from "../components/Banner";

function Home() {
  const { user } = useContext(UserContext);
  const [stage0, setStage0] = useState(true);
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(true);
  const [stage3, setStage3] = useState(true);
  const [stage4, setStage4] = useState(true);
  const [stage0Required, setStage0Required] = useState([]);
  const [stage1Required, setStage1Required] = useState([]);
  const [stage2Required, setStage2Required] = useState([]);
  const [stage3Required, setStage3Required] = useState([]);
  const [stage4Required, setStage4Required] = useState([]);

  const getHorses = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
      .then((result) => {
        console.log(result);
        for (let i = 0; i < result.data.length; i += 1) {
          if (result.data[i].type === "Rocking horse") {
            setStage0Required((array) => [...array, result.data[i]]);
          }
          if (
            result.data[i].type === "Shetland" ||
            result.data[i].type === "Pony"
          ) {
            setStage1Required((array) => [...array, result.data[i]]);
          }
          if (
            result.data[i].type === "Horse" ||
            result.data[i].type === "Donkey"
          ) {
            setStage2Required((array) => [...array, result.data[i]]);
          }
          if (result.data[i].type === "Zebra") {
            setStage3Required((array) => [...array, result.data[i]]);
          }
          if (result.data[i].type === "Unicorn") {
            setStage4Required((array) => [...array, result.data[i]]);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const clearFilters = () => {
    setStage0(true);
    setStage1(true);
    setStage2(true);
    setStage3(true);
    setStage4(true);
  };

  useEffect(() => {
    getHorses();
  }, []);
  console.log(user);
  return (
    <>
      <Header />
      <div className="rightContainer">
        <Banner />
        <div className="horseListPage">
          <div className="filtersBox">
            <Filters
              setStage0={setStage0}
              setStage1={setStage1}
              setStage2={setStage2}
              setStage3={setStage3}
              setStage4={setStage4}
            />
          </div>
          <button
            className="clearButton"
            type="button"
            onClick={() => clearFilters()}
          >
            Show all
          </button>
          <div className="horseList">
            {stage2 &&
              stage2Required.map((horse) => {
                return (
                  <Link to={`/info/${horse.id_vehicle}`}>
                    <HorseCard
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                    />
                  </Link>
                );
              })}
            {stage0 &&
              stage0Required.map((horse) => {
                return (
                  <Link to={`/info/${horse.id_vehicle}`}>
                    <HorseCard
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                    />
                  </Link>
                );
              })}
            {stage1 &&
              stage1Required.map((horse) => {
                return (
                  <Link to={`/info/${horse.id_vehicle}`}>
                    <HorseCard
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                    />
                  </Link>
                );
              })}
            {stage3 &&
              stage3Required.map((horse) => {
                return (
                  <Link to={`/info/${horse.id_vehicle}`}>
                    <HorseCard
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                    />
                  </Link>
                );
              })}
            {stage4 &&
              stage4Required.map((horse) => {
                return (
                  <Link to={`/info/${horse.id_vehicle}`}>
                    <HorseCard
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
