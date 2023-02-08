import React, { useEffect, useState } from "react";
import Presentation from "../components/Presentation";
import ListUser from "../components/ListUser";
import OurVehicles from "../components/OurVehicles";
import Chart from "../components/Chart";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/HeaderBannerHorses";

function Dashboard() {
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

  const isTabletOrMobile = windowDimension <= 1024;

  return (
    <div className="primaryContainer">
      {isTabletOrMobile ? <Navbar /> : <Sidebar />}
      <div className="rightContainer">
        <Banner />
        <div className="rightContainerContent">
          <div className="dashboardContainer">
            <Presentation />
            <hr className="separator1" />
            <div className="dashboardSecondPart">
              <OurVehicles />
              <div className="statsAndTeam">
                <Chart />
                <hr className="separator2" />
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
