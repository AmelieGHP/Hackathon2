import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@components/Footer";
import HorseCard from "@components/HorseCard";
import Filters from "@components/Filters";
import Header from "@components/Header";

function Home() {
  const [stage0, setStage0] = useState(true);
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(true);
  const [stage3, setStage3] = useState(true);
  const [stage4, setStage4] = useState(true);
  // const [stage0Required, setStage0Required] = useState([]);
  // const [stage1Required, setStage1Required] = useState([]);
  // const [stage2Required, setStage2Required] = useState([]);
  // const [stage3Required, setStage3Required] = useState([]);
  // const [stage4Required, setStage4Required] = useState([]);
  // // 4 unicorn
  // 3 zebra
  // 2 horse donkey
  // 1 shetland pony
  // 0 rocking-horse

  const getHorses = () => {
    axios
      .get("/vehicles")
      .then((result) => {
        //console.log(result);
        // for (let i = 0; i < result.data.length; i++){
        // if(result.data[i].type === "rocking-horse"){
        // setStage0Required(stage0Required.push(result.data[i])
        //   }
        // if(result.data[i].type === "shetland" || result.data[i].type === "pony"){
        // setStage0Required(stage0Required.push(result.data[i])
        //   }
        // })
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getHorses();
  }, []);
  return (
    <div className="home">
      <Header />
      <div className="filter">
        <Filters
          stage0={stage0}
          setStage0={setStage0}
          stage1={stage1}
          setStage1={setStage1}
          stage2={stage2}
          setStage2={setStage2}
          stage3={stage3}
          setStage3={setStage3}
          stage4={stage4}
          setStage4={setStage4}
        />
      </div>
      <div className="horseList">
        <HorseCard
          model="model"
          type="type"
          image="https://via.placeholder.com/150.png"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
