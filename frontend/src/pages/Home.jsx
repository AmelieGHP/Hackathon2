import React from "react";
import Footer from "@components/Footer";
import HorseCard from "@components/HorseCard";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <HorseCard />
      <Footer />
    </div>
  );
}

export default Home;
