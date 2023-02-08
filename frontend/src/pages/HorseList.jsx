import React, { useEffect, useState } from "react";
import axios from "axios";
import HorseCard from "@components/HorseCard";
import Filters from "@components/Filters";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/HeaderBannerHorses";
import FiltersCollapsible from "../components/FiltersCollapsible";

function Home() {
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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState(false);

  const getHorses = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
      .then((result) => {
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

  useEffect(() => {
    getHorses();
  }, []);

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTabletOrMobile = windowDimension < 1025;
  const isMobile = windowDimension <= 600;

  return (
    <div className="primaryContainer">
      {isTabletOrMobile ? <Navbar /> : <Sidebar />}
      <div className="rightContainer">
        <Banner />
        <div className="rightContainerContent">
          <div className="horseListPage">
            {isMobile ? (
              <FiltersCollapsible
                setStage0={setStage0}
                setStage1={setStage1}
                setStage2={setStage2}
                setStage3={setStage3}
                setStage4={setStage4}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                setSearch={setSearch}
              />
            ) : (
              <Filters
                setStage0={setStage0}
                setStage1={setStage1}
                setStage2={setStage2}
                setStage3={setStage3}
                setStage4={setStage4}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                setSearch={setSearch}
              />
            )}

            <div className="horseList">
              {stage2 &&
                stage2Required.map((horse) => {
                  return (
                    <HorseCard
                      key={horse.id_vehicle}
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                      id={horse.id_vehicle}
                      startDate={startDate}
                      endDate={endDate}
                      search={search}
                    />
                  );
                })}
              {stage0 &&
                stage0Required.map((horse) => {
                  return (
                    <HorseCard
                      key={horse.id_vehicle}
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                      id={horse.id_vehicle}
                      startDate={startDate}
                      endDate={endDate}
                      search={search}
                    />
                  );
                })}
              {stage1 &&
                stage1Required.map((horse) => {
                  return (
                    <HorseCard
                      key={horse.id_vehicle}
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                      id={horse.id_vehicle}
                      startDate={startDate}
                      endDate={endDate}
                      search={search}
                    />
                  );
                })}
              {stage3 &&
                stage3Required.map((horse) => {
                  return (
                    <HorseCard
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                      id={horse.id_vehicle}
                      startDate={startDate}
                      endDate={endDate}
                      search={search}
                      key={horse.id_vehicle}
                    />
                  );
                })}
              {stage4 &&
                stage4Required.map((horse) => {
                  return (
                    <HorseCard
                      model={horse.model}
                      type={horse.type}
                      image={`${import.meta.env.VITE_BACKEND_URL}${
                        horse.image
                      }`}
                      id={horse.id_vehicle}
                      startDate={startDate}
                      endDate={endDate}
                      search={search}
                      key={horse.id_vehicle}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
