import React from "react";
import Chart from "@components/Chart";
import Presentation from "@components/Presentation";
import ListUser from "@components/ListUser";
import OurVehicles from "../components/OurVehicles";
import Header from "@components/Header";

function Dashboard() {
  return (
    <div>
      <Header />
      <div>
        <div className="dashboard">
          <div className="toto">
            <div className="pres">
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

    </div>
  );
}

export default Dashboard;
