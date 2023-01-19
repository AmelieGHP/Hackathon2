import React from "react";
import Presentation from "../components/Presentation";
import ListUser from "../components/ListUser";
import OurVehicles from "../components/OurVehicles";
import Chart from "../components/Chart";
import Header from "../components/SideBarMenu";
import Banner from "../components/HeaderBannerHorses";

function Dashboard() {
  return (
    <div className="primaryContainer">
      <Header />
      <div className="rightContainer">
        <Banner />
        <div className="rightContainerContent">
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
    </div>
  );
}

export default Dashboard;
