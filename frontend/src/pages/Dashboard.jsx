import React from "react";
// import Chart from "@components/Chart";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import OurVehicles from "../components/OurVehicles";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Presentation />
        <div className="stat">
          <OurVehicles />
          {/* <Chart /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
