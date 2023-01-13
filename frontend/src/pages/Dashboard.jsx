import React from "react";
import Chart from "@components/Chart";
import Presentation from "@components/Presentation";
import ListUser from "@components/ListUser";
import OurVehicles from "../components/OurVehicles";
import Header from "@components/Header";
import Banner from "@components/Banner";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="rightContainer">
        <Banner />
        <div className="dashboard">
          <Presentation />
          <hr className="hr1" />
          <div className="stat">
            <OurVehicles />
            <div className="userstat">
              <Chart />
              <hr className="hr2" />
              <ListUser />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Dashboard;
